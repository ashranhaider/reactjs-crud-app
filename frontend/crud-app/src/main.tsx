import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './pages/AddEmployee.tsx';
import EditEmployee from './pages/EditEmployee.tsx';
import Departments from './pages/Departments.tsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddDepartment from './pages/AddDepartment.tsx';

const queryClient = new QueryClient();


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="departments" element={<Departments />} />
            <Route path="AddDepartment" element={<AddDepartment />} />
            <Route path="AddEmployee" element={<AddEmployee />} />
            <Route path="EditEmployee/:id" element={<EditEmployee />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
