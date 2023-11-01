import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';
// import axios from 'axios';

// axios.get('/')

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='max-w-[90vw] mx-auto'>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
);
