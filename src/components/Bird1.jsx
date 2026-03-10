import { useEffect, useRef } from "react";

const Bird1 = ({ style }) => {
    const birdRef = useRef(null);

    useEffect(() => {
        const bird = birdRef.current;

        function onLand() {
            bird.style.transform = "translateX(-250%)";
            bird.style.animation = "idleBird 1s steps(1) infinite";
        }

        bird.addEventListener("animationend", onLand);

        return () => bird.removeEventListener("animationend", onLand);
    }, []);


    return (
        <div ref={birdRef} className={`bird-container bg-[url(/bird1.png)] ${style}`}></div>
    );
}

export default Bird1;