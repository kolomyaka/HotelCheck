import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const isAuth = useSelector(getUserData);

    if (!isAuth) {
        return <Navigate to={RoutePath.login} replace />;
    }

    return children;
};