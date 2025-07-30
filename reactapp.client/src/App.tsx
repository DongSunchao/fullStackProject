import {  useRoutes } from 'react-router-dom'; 
import baseRouter from './router/baseRouter'
//import RouterView from './router';
import './App.css';
import 'antd/dist/reset.css'

const App = () => {
    const routes = useRoutes(baseRouter)
    return routes
}

export default App;




