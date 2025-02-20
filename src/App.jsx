import { useState, useEffect } from 'react'
import Profile from './components/Profile';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("yellow-mode");
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("yellow-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <div>
      <div className='flex justify-between m-5'>
        <div className='portfolio'>
          <h2 className='text-[38px]'>PortFolio</h2>
        </div>
        <div className='cursor-pointer'>
          <img src="light.png" alt="light" width={"54px"} height={"54px"} className='cursor-pointer duration-300 ease-out' onClick={() => setDarkMode(!darkMode)} hidden={darkMode} />

          <img src="dark.png" alt="dark" width={"54px"} height={"54px"} className='cursor-pointer duration-300 ease-out' onClick={() => setDarkMode(!darkMode)} hidden={!darkMode} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  place-items-center">
        <Profile darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Navbar />
      </div>
    </div>

  )
}

export default App
