import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { firebaseConnect } from './firebase/config.js'
// import './index.css'

firebaseConnect()
                                                            // App() -> js puro
ReactDOM.createRoot( document.getElementById('root') ).render(
    // <BrowserRouter>
        <App />
    // </BrowserRouter>
)
