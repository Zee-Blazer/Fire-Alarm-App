
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Route screens
import { AdminDashboardScreen } from './Screens/admin-dashboard.screen';
import { AdminLoginScreen } from './Screens/admin-login.screen';
import { ClientDashboardScreen } from './Screens/client-dashboard.screen';
import { ClientInfoScreen } from './Screens/client-info.screen';
import { ClientLoginScreen } from './Screens/client-login.screen';
import { ClientSignupScreen } from './Screens/client-signup-screen';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
        errorElement: <div>There was an error loading this page</div>
    },
    {
        path: '/dashboard',
        element: <ClientDashboardScreen />,
    },
    {
        path: '/login',
        element: <ClientLoginScreen />,
    },
    {
        path: '/signup',
        element: <ClientSignupScreen />,
    },
    {
        path: '/fill-info',
        element: <ClientInfoScreen />,
    },
    {
        path: '/admin-login',
        element: <AdminLoginScreen />,
    },
    {
        path: '/admin-dashboard',
        element: <AdminDashboardScreen />,
    }
])
