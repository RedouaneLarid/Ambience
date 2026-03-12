import { useContext, useState } from "react";
import { AudioContext } from "./App";

const MainPage = () => {
    const [value, setValue] = useState("");
    const { tasks, setTasks } = useContext(AudioContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!tasks.includes(value)) {
            setTasks(prev => [...prev, value]);
            setValue("")
        }
    }

    return (
        <div className="main-page flex flex-col justify-center items-center gap-10 h-full w-full">
            <div className="task-list w-1/2 max-w-[530px] flex flex-col justify-evenly items-center gap-1.5">
                {tasks.map((task, i) => {
                    return (
                        <div className="checkbox-wrapper-11 w-full flex items-center gap-3">
                            <input type="checkbox" id={`option${i}`} name={`option${i}`} />
                            <label for={`option${i}`}>{task}</label>
                        </div>
                    );
                })}
            </div>
            {tasks.length < 10 &&
                <form onSubmit={handleSubmit} className="w-1/2 max-w-[530px]">
                    <input type="text" placeholder="Insert a task" value={value} onChange={(e) => { setValue(e.target.value) }} className="bg-mist-900 w-full h-10 focus:ring-0 focus:outline-none !p-4 text-mist-600"
                    />
                </form>}
        </div>
    );
}

export default MainPage;