import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ReactNode, FC } from 'react'; 

interface Iprops {
    children?: ReactNode;
}

const Private: FC<Iprops> = (props) => {
    const token = sessionStorage.getItem('token');
    const location = useLocation();
    if (token) {
        return <>{props.children}</>
    } else {
        return <Navigate to={'/?redirect=' + location.pathname} />
    }
}

export default Private;