import { useRoutes } from "react-router-dom"
import baseRouter from './baseRouter';
function RouterView() {
    const element = useRoutes(baseRouter)
    return (
        <div>
            {element}
        </div>
    );
}

export default RouterView;