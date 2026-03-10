import { createContext, useRef, useState } from "react";
import ArtFrame from "../ArtFrame";
import Settings from "../Settings";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const AudioContext = createContext();

const App = () => {
  const rainPlayer = useRef(null);
  const firePlayer = useRef(null);
  const forestPlayer = useRef(null);
  const [volumes, setVolumes] = useState({ rain: 0, fire: 0, forest: 0 });
  const [sliders, setSliders] = useState({ rain: 0, fire: 0, forest: 0 });

  return (
    <>
      <AudioContext.Provider value={{
        rainPlayer, firePlayer, forestPlayer,
        volumes, setVolumes,
        sliders, setSliders
      }}>
        <BrowserRouter>
          <div className="main-container relative flex flex-col justify-center items-center h-full w-full">
            <nav className="w-full flex justify-around items-center absolute top-10">
              <Link to="/">Main</Link>
              <Link to="/settings">Settings</Link>
            </nav>

            <Routes>
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </BrowserRouter>
        <ArtFrame />
        <audio ref={rainPlayer} src="/sounds/rain.wav" loop />
        <audio ref={firePlayer} src="/sounds/fire.mp3" loop />
        <audio ref={forestPlayer} src="/sounds/forest2.mp3" loop />
      </AudioContext.Provider>
    </>
  );
};

export default App;