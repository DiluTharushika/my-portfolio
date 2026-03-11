import React, { useEffect, useRef } from "react";
import "./SpaceRobot.css";

const SpaceRobot = () => {
    const robotRef = useRef(null);
    const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const current = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const animFrame = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
            // Smoothly lag behind the cursor
            current.current.x += (pos.current.x - current.current.x) * 0.07;
            current.current.y += (pos.current.y - current.current.y) * 0.07;

            if (robotRef.current) {
                robotRef.current.style.left = `${current.current.x - 30}px`;
                robotRef.current.style.top = `${current.current.y - 60}px`;
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
