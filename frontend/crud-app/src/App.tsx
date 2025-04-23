import './App.css'
import { Outlet } from "react-router";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
}

export default App;
