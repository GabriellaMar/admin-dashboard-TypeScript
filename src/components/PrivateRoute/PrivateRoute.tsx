import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: React.ReactElement;
  redirectTo: string;
  isAuth: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, redirectTo = '/', isAuth }) => {
  return isAuth ? children : <Navigate to={redirectTo} />;
}