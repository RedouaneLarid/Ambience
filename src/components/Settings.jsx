import { useContext, useState } from "react";
import { AudioContext } from "./main/App"; 

const Settings = () => {
    const { rainPlayer, firePlayer, forestPlayer, riverPlayer,
        setVolumes,
        sliders, setSliders } = useContext(AudioContext);

    const players = {
        rain: rainPlayer,
        fire: firePlayer,
        forest: forestPlayer,
        river: riverPlayer,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSliders(prev => ({ ...prev, [name]: Number(value) }));
        setVolumes(prev => ({ ...prev, [name]: Number(value) }));

        const player = players[name].current;
        player.volume = value / 100;
        if (Number(value) === 0) {
            player.pause();
        } else {
            player.play();
        }
    };

    return (
        <div className="flex h-full w-full m-14 flex-col justify-evenly items-center">
            <div className="rain-input flex items-center gap-6">
                <input
                    type="range"
                    name="rain"
                    min="0" max="100" step="1"
                    value={sliders.rain}
                    onChange={handleChange}
                />
                <label htmlFor="rain">Rain</label>
            </div>
            <div className="forest-input flex items-center gap-6">
                <input
                    type="range"
                    name="forest"
                    min="0" max="100" step="1"
                    value={sliders.forest}
                    onChange={handleChange}
                />
                <label htmlFor="forest">Forest</label>
            </div>
            <div className="fire-input flex items-center gap-6">
                <input
                    type="range"
                    name="fire"
                    min="0" max="100" step="1"
                    value={sliders.fire}
                    onChange={handleChange}
                />
                <label htmlFor="fire">Fire</label>
            </div>
            <div className="river-input flex items-center gap-6">
                <input
                    type="range"
                    name="river"
                    min="0" max="100" step="1"
                    value={sliders.river}
                    onChange={handleChange}
                />
                <label htmlFor="river">River</label>
            </div>
        </div>
    );
};

export default Settings;