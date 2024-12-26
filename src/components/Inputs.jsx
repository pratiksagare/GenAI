import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";


export default function Inputs() {
    // const [model, setModel] = useState('');

    // const handleChange = (event) => {
    //     setModel(event.target.value);
    // };

    const checkBoxs = [
        {
            name: 'all',
            displayValue: 'All'
        },
        {
            name: 'chatgpt',
            displayValue: 'ChatGPT'
        },
        {
            name: 'gemini',
            displayValue: 'Gemini'
        },
        {
            name: 'gpt',
            displayValue: 'GPT'
        }
    ]

    const [isChecked, setIsChecked] = useState({ all: true, chatgpt: false, gemini: false, gpt: false });

    const handleModelChange = (event) => {
        const { name } = event.target;
        // If "all" is selected, mark it true and all others false
        setIsChecked((prev) => {
            if (name === "all") {
                return { all: !prev.all, chatgpt: false, gemini: false, gpt: false };
            } else {
                return { ...prev, [name]: !prev[name], all: false }
            }
        })

    }

    console.log({ isChecked });
    return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center gap-8  border-b border-t  border-black  py-2 my-2">

                {
                    checkBoxs && checkBoxs.map((obj, index) => {
                        return <div className="flex flex-col justify-center" key={index}>
                            <input type="checkbox" className="cursor-pointer" checked={isChecked[obj.name]} name={obj.name} onChange={handleModelChange} />
                            <span className="select-none">{obj.displayValue}</span>
                        </div>
                    })
                }
            </div>
            <div className=" flex items-center gap-4  p-2">
                {/* <div>
                <select value={model} onChange={handleChange} className="w-32 p-2 rounded-none dark:bg-[#0a0a0a]">
                    <option className="rounded-none" value="" disabled>Select Model</option>
                    <option value="all">All</option>
                    <option value="chatgpt">Chat GPT</option>
                    <option value="gemini">Google Gemini</option>
                </select>
            </div> */}

                <div className="flex-grow ">
                    <textarea rows={4} className="w-full resize-none outline-none  dark:bg-[#0a0a0a] border-b-2   border-purple-700" style={{ scrollbarWidth: 'thin' }} placeholder="Enter your query here..." data-gramm="false" />
                </div>
                <div>
                    <button className="py-2 px-4 border-[2px] rounded-full text-purple-700 flex items-center  text-nowrap hover:scale-105 duration-300 ease-in-out border-purple-700">Send &nbsp;<BsFillSendFill /></button>
                </div>
            </div>
        </div>
    )
}
