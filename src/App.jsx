import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import  {useDispatch} from 'react-redux';

function App() {
  const [addicon, setaddicon] = useState(true);
  const [input, setinput] = useState("")
  const dispatch = useDispatch()

  const addtodohandler = () => {
    e.preventDefault();
    
  }
  return (
    <>
      <div className="main bg-[#0a0f1c] h-screen w-screen flex flex-col justify-start items-center">
        <div class="bg-[#0d0d0d] px-4 h-[10%] w-[98%] rounded-lg  mt-4 flex justify-between items-center shadow-[0_0_3px_#00ffff]">
          <h1 class="text-3xl font-bold text-[#00ffff] drop-shadow-[0_0_8px_#00ffff] tracking-wide font-mono">
            ⚡ Todo List
          </h1>
          <div className="addform h-[70%] w-[30%] flex justify-between items-center px-4 bg-transparent">
            <form className="h-full w-full border-b flex justify-between items-center px-5 border-[#00ffff]">
              <input type="text" placeholder="Enter Your Task Here:" className="h-full w-[90%] text-[#00ffff] font-mono placeholder:font-mono bg-transparent outline-none  placeholder:text-[#00ffff] flex justify-center items-center"></input>
              <div className="mouseicon transition-transform duration-300 ease-in-out transform hover:scale-110" onMouseEnter={() => setaddicon(false)} onMouseLeave={() => setaddicon(true)}>
                {addicon ? 
                <IoMdAddCircleOutline className="text-[#00ffff] text-2xl cursor-pointer transition-all duration-300 ease-in-out"/> :
                <IoAddCircle className="text-[#00ffff] text-2xl cursor-pointer transition-all duration-300 ease-in-out" />}
              </div>
              
            </form>

          </div>
        </div>
        <div className="boxes  mt-4 flex justify-evenly items-center h-[83%] w-[100%]">
          <div className="box1 rounded-lg shadow-[0_0_3px_#00ffff] h-[95%] w-[98%] bg-[#0d0d0d] ">
            <div className="heading h-[10%] w-full flex justify-start px-4 items-center text-[17px] font-bold font-sans ">
              <h1 className="text-[#00ffff] font-mono w-[200px] drop-shadow-[0_0_1px_#00ffff] border-b border-[#00ffff] border-double p-2">
                Pending Tasks
              </h1>
            </div>

            <div className="tasks w-full font-mono h-[90%] max-h-[552px] p-5 flex flex-col items-center space-y-2 scroll-smooth scrollable-content overflow-y-auto">
              <Item/>
            </div>

          </div>


          {/* <div className="box2 rounded-lg shadow-[0_0_3px_#00ffff] h-[95%] w-[49%] bg-[#0d0d0d]">
            <div className="heading h-[10%] w-full flex justify-start px-4 items-center text-[17px] font-bold font-sans ">
              <h1 className="text-[#00ffff] w-[250px] drop-shadow-[0_0_1px_#00ffff] border-b border-[#00ffff] border-double p-2">
                Completed Tasks
              </h1>
            </div>

            <div className="tasks w-full h-[90%] max-h-[552px] p-5 flex flex-col items-center space-y-2 scroll-smooth scrollable-content overflow-y-auto">
                {Array.from({ length: 20 }).map((_, i) => (
                  <Item key={i} />
                ))}
            </div>


          </div> */}


        </div>
      </div>
    </>
  );
}

export default App;
