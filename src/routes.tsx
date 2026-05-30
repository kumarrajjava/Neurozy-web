import { RouteObject } from 'react-router-dom';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ProductsPage from './pages/products';
import BlogsPage from './pages/blogs';
import ContactPage from './pages/contact';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import ProdNotFoundPage from './pages/_404';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/blogs',
    element: <BlogsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '*',
    element: <ProdNotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/about' | '/products' | '/blogs' | '/contact' | '/dashboard' | '/login';

export type Params = Record<string, string | undefined>;
