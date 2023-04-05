import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const isAuth = true;

    if (!isAuth) {
        return <Navigate to={RoutePath.login} replace />;
    }

    return children;
};