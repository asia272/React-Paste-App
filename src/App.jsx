import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import AllPastes from './components/AllPastes/AllPastes';
import Navbar from './components/Navbar/Navbar';
import ViewPast from "./components/ViewPast/ViewPast"

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
         <h1 className='heading'>Paste App</h1>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
