import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx';
import { LoginProvider } from './context/LoginContext';
import { Provider } from 'react-redux';
import store from './redux/Store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <LoginProvider>
            <AppRoutes />
        </LoginProvider>
    </BrowserRouter>
    </Provider>
  </StrictMode>
)
