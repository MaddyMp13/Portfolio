import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {

    const container = useRef();

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".about", {
                y: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".about",
                    start: "top 70%"
                }
            });

            const tl = gsap.timeline();

            tl.from(".box", { x: -200, opacity: 0 })
                .from(".title", { y: -250, opacity: 0 })
                .from(".subtitle", { x: -100, opacity: 0 })
                .from(".btn", { scale: 0 });

            tl.to(".box", {
                x: 850,
                duration: 4,
                opacity: 1,
                scale: 1.5,
                rotate: 300
            });

        }, container);

        return () => ctx.revert();

    }, []);

    return (
        <div ref={container} className="w-full">

            <div className="box bg-red-500 w-20 h-20"></div>

            <div className="text-white text-center">
                <h1 className="text-8xl title">Hello World</h1>
                <h2 className="text-2xl my-5 subtitle">subtitle</h2>
                <button className="bg-green-400 p-2 rounded btn">Click Me!</button>
            </div>

            <div className="text-white text-center about mt-40">
                <h1 className="text-8xl">About World</h1>
                <h2 className="text-2xl my-5">subtitle</h2>
                <button className="bg-green-400 p-2 rounded">Click Me!</button>
            </div>

        </div>
    );
};

export default Demo;