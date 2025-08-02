import { LazyLoad } from '../utils/LazyLoad';
import LoginView from '../views/LoginView';
import AdminView from '../views/admin/AdminView';


const baseRouter = [
    { path: "/", element: <LoginView /> },
    { path: "/admin", element: <AdminView /> },
   // { path: "/test", element: <TestView /> }, 
    

    { path: '*', element: LazyLoad('ErrorPage') }

]

export default baseRouter  