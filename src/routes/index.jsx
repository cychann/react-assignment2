import Layout from 'layouts/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';
import MyOrderPage from 'pages/MyOrderPage/MyOrderPage';
import SignupPage from 'pages/SignupPage/SignupPage';
import { createBrowserRouter } from 'react-router-dom';
import MyOrderDetailPage from 'pages/MyOrderDetailPage/MyOrderDetailPage';
import LogoutPage from 'pages/LogoutPage/LogoutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/logout',
        element: <LogoutPage />,
      },
      {
        path: '/sign-up',
        element: <SignupPage />,
      },
      {
        path: '/mypage/order',
        element: <MyOrderPage />,
      },
      {
        path: '/mypage/order/:id',
        element: <MyOrderDetailPage />,
      },
    ],
  },
]);
