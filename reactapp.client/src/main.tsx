//import  React  from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
//import { ConfigProvider } from 'antd' 
import store from './store'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux' 
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
     <BrowserRouter>
    <Provider store={store}>
        
            <App />
       
        </Provider>
        </BrowserRouter>
);
reportWebVitals();