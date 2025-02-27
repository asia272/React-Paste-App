import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import AllPastes from './components/AllPastes/AllPastes';
import Navbar from './components/Navbar/Navbar';
import ViewPast from "./components/ViewPast/ViewPast"
import { motion } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Navbar />
        <Home />
      </>

  },
  {
    path: "/allPastes",
    element:
      <>
        <Navbar />
        <AllPastes />
      </>
  },
  {
    path: "/allPastes/:id",
    element:
      <>
        <Navbar />
        <ViewPast />
      </>
  },
]);

function App() {
  return (
    <div className='app'>
      
         <motion.h1 className='heading'
           initial={{ opacity: 0 ,y:-386}}
           animate={{ opacity: 1 , y:0}}
           transition={{ duration: 0.8 }}
         >
          Paste App
          </motion.h1>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
