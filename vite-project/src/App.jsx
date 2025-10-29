import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskManager from "./components/TaskManager";
import ApiData from "./components/ApiData";
import ThemeToggle from './components/ThemeToggle';


import "./index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen text-gray-900 transition-colors bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
       <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        <ThemeToggle />
       </div>
        <section className="p-6 mb-8 overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4 text-lg text-center">
              Simple Counter Demo — Try it!
            </p>

            <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 text-white transition-colors bg-red-500 rounded hover:bg-red-600"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 text-white transition-colors bg-green-500 rounded hover:bg-green-600"
              >
                +
              </button>
            </div>
          </div>
        </section>

        {/* Task Manager */}
        <section className="p-6 mb-8 overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800">
          <TaskManager />
        </section>

        {/* API Data */}
        <ApiData />
        <section className="p-6 overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Data fetched from API.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
