import { useEffect, useRef } from "react";

const Bird2 = ({ style }) => {
    const birdRef = useRef(null);

    useEffect(() => {
        const bird = birdRef.current;

        function onLand() {
            bird.style.transform = "translateX(250%)";
            bird.style.animation = "idleBird2 1s steps(1) infinite";
        }

        bird.addEventListener("animationend", onLand);

        return () => bird.removeEventListener("animationend", onLand);
    }, []);

    return (
        <div ref={birdRef} className={`bird-container bird2 bg-[url(/bird2.png)] ${style}`}></div>
    );
}

export default Bird2;