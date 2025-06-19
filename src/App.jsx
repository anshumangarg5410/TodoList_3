import { useEffect, useState } from "react";
import "./App.css";
import AddTodoIn from "./components/AddTodoIn";
import { useSelector, useDispatch } from 'react-redux';

import Item from "./components/Item";


function App() {

  const [completedarea, setcompletedarea] = useState(true);



  const todos = useSelector(state => state.todos);
  const completed = todos.filter(todo => todo.completed === true);
  const pending = todos.filter(todo => todo.completed === false);

  useEffect(() => {
    setcompletedarea(completed.length > 0);
  }, [completed]);

  return (
    <>
      <div className="main bg-[url(./assets/bg7.webp)] bg-cover bg-no-repeat bg-center h-screen w-screen flex flex-col justify-start items-center overflow-hidden">
        <div className="px-4 backdrop-blur-md bg-[#0d0d0d]/40 h-[10%] w-[98%] rounded-lg  mt-4 flex justify-between items-center shadow-[0_0_3px_#00ffff]">
          <h1 className="text-3xl font-bold text-[#00ffff] drop-shadow-[0_0_8px_#00ffff] tracking-wide font-mono">
            ⚡ Todo List
          </h1>
          <AddTodoIn />
        </div>
        <div className={`boxes  mt-4 flex ${completedarea ? "justify-between w-[98%]" : "justify-center w-[100%]"} items-center h-[83%]`}>
          <div className={`box1 rounded-lg shadow-[0_0_3px_#00ffff] h-[95%] ${completedarea ? "w-[49%]" : "w-[98%]"}  backdrop-blur-md bg-[#0d0d0d]/40 transition-all ease-in-out duration-500`}>
            <div className="heading h-[10%] w-[40%] flex justify-start px-4 items-center text-[17px] font-bold font-sans ">
              <h1 className="text-[#00ffff] font-mono w-[200px] drop-shadow-[0_0_1px_#00ffff] border-b border-[#00ffff] border-double p-2">
                Pending Tasks
              </h1>
            </div>

            <div className="tasks w-[100%] font-mono h-[90%] max-h-[552px] p-5 flex flex-col items-center space-y-2 scroll-smooth scrollable-content overflow-y-auto">
              {/* {todos.map((todo, index) => (
                <Item key={index} todo={todo} />
              ))} */}
              {pending.map((todo, index) => (
                <Item key={index} todo={todo} />
              ))} 
              
            </div>

          </div>


           <div className={`box2 rounded-lg shadow-[0_0_3px_#00ffff] h-[95%] w-[49%] backdrop-blur-md bg-[#0d0d0d]/40  ${completedarea ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none hidden w-[0%]"} transition-all ease-in-out duration-[500]`}>
            <div className="heading h-[10%] w-[49%] flex justify-start px-4 items-center text-[17px] font-bold font-sans ">
              <h1 className="text-[#00ffff] w-[250px] drop-shadow-[0_0_1px_#00ffff] border-b border-[#00ffff] border-double p-2">
                Completed Tasks
              </h1>
            </div>

            <div className="tasks w-full h-[90%] overflow-hidden  max-h-[552px] p-5 flex flex-col items-center space-y-2 scroll-smooth scrollable-content overflow-y-auto">
                {completed.map((todo, index) => (
                  <Item key={index} todo={todo} />
                ))}
            </div>


          </div> 


        </div>
      </div>
    </>
  );
}

export default App;
