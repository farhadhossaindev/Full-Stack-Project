import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductData } from './contextApi/allData.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <ProductData>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductData>


)
