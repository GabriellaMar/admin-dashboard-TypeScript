import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  component: React.ReactElement;
  redirectTo: string;
  isAuth: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component, redirectTo = '/login', isAuth }) => {
  return isAuth ? component : <Navigate to={redirectTo} />;
}