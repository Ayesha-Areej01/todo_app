import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ 
  weight: [ "700"], 
  subsets: ["latin"] 
});
export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className="bg-[#94d1c8] min-h-screen">
      <div className='max-w-4xl mx-auto h-screen'>
      <div className='text-center flex flex-col gap-4 '>
        <h1 className={`${montserrat.className} text-2xl font-bold text-black mt-4`}>Todo List</h1>
        <AddTask/>
      </div>
      <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
