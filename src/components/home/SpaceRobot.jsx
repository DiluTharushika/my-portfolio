import React, { useEffect, useRef } from "react";
import "./SpaceRobot.css";

const SpaceRobot = () => {
    const robotRef = useRef(null);
    const bubbleRef = useRef(null);
    const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const current = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const currentOffset = useRef(60);
    const animFrame = useRef(null);

    const interactiveElements = [
        { class: '.linkedin-link-home', message: "click to go to check my linked in account", threshold: 90 },
        { class: '.github-link-home', message: "check out my code on GitHub!", threshold: 90 },
        { class: '.email-link-home', message: "let's stay in touch via email!", threshold: 90 },
        { class: '.twitter-link-home', message: "follow my updates on Twitter!", threshold: 90 },
        { class: '.behance-link-home', message: "this is my behance account", threshold: 90 },
        { class: '.cv-button-home', message: "click the button to download my CV", threshold: 150 }
    ];

    useEffect(() => {
        const onMouseMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
            // Smoothly lag behind the cursor
            current.current.x += (pos.current.x - current.current.x) * 0.08;
            current.current.y += (pos.current.y - current.current.y) * 0.08;

            let nearestIcon = null;
            let minDistance = 9999;
            let targetYOffset = 60;

            interactiveElements.forEach(icon => {
                const el = document.querySelector(icon.class);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;

                    const dx = current.current.x - centerX;
                    const dy = current.current.y - centerY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < icon.threshold && distance < minDistance) {
                        minDistance = distance;
                        nearestIcon = icon;
                    }
                }
            });

            if (nearestIcon && bubbleRef.current) {
                bubbleRef.current.innerText = nearestIcon.message;
                bubbleRef.current.classList.add('visible');
                targetYOffset = 180; // Float much higher for larger bubbles
            } else if (bubbleRef.current) {
                bubbleRef.current.classList.remove('visible');
                targetYOffset = 60;
            }

            // Smooth the offset transition
            currentOffset.current += (targetYOffset - currentOffset.current) * 0.15;

            if (robotRef.current) {
                robotRef.current.style.left = `${current.current.x - 30}px`;
                robotRef.current.style.top = `${current.current.y - currentOffset.current}px`;
            }

            animFrame.current = requestAnimationFrame(animate);
        };
        animFrame.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animFrame.current);
        };
    }, []);

    return (
        <div className="space-robot" ref={robotRef}>
            {/* Speech Bubble */}
            <div className="robot-speech-bubble" ref={bubbleRef}>
                hey click to go to check my linked in account
            </div>

            {/* Antenna */}
            <div className="robot-antenna">
                <div className="antenna-ball"></div>
                <div className="antenna-stick"></div>
            </div>

            {/* Head */}
            <div className="robot-head">
                <div className="robot-eyes">
                    <div className="robot-eye left"></div>
                    <div className="robot-eye right"></div>
                </div>
                <div className="robot-grille">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Body */}
            <div className="robot-body">
                <div className="robot-chest-light"></div>
                <div className="robot-arms">
                    <div className="robot-arm left"></div>
                    <div className="robot-arm right"></div>
                </div>
            </div>

            {/* Legs */}
            <div className="robot-legs">
                <div className="robot-leg left"></div>
                <div className="robot-leg right"></div>
            </div>

            {/* Thruster / Jetpack */}
            <div className="robot-jetpack">
                <div className="thruster-flame"></div>
            </div>
        </div>
    );
};

export default SpaceRobot;
