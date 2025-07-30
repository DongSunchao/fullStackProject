import { LazyLoad } from '../utils/LazyLoad';
import LoginView from '../views/LoginView';
import AdminView from '../views/admin/AdminView';

const baseRouter = [
    { path: "/", element: <LoginView /> },
    { path: "/admin", element: <AdminView /> },
    { children: [] },
    { path: '*', element: LazyLoad('ErrorPage') }
]

export default baseRouter