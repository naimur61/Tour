import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './Routes/Routes/Routes';

function App() {
  return (
    <RouterProvider router={Routes} />
  );
}

export default App;
