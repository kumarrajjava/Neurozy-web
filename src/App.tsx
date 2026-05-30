import { lazy, Suspense } from 'react';
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  type RouteObject,
  useLocation,
} from 'react-router-dom';

import CookieBannerErrorBoundary from '@/components/CookieBannerErrorBoundary';
import RootLayout from './layouts/RootLayout';
import Spinner from './components/Spinner';
import { routes } from './routes';
import { AuthProvider } from './context/AuthContext';

const CookieBanner = lazy(() =>
  import('@/components/CookieBanner').catch((error) => {
    console.warn('Failed to load CookieBanner:', error);
    return { default: () => null };
  })
);

const SpinnerFallback = () => (
  <div className="flex justify-center py-8 h-screen items-center">
    <Spinner />
  </div>
);

// Conditionally wrap in RootLayout — dashboard and login get their own full-screen layouts
function LayoutWrapper() {
  const location = useLocation();
  const isFullscreen =
    location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/login');
  if (isFullscreen) {
    return <Outlet />;
  }
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}

const rootElement = (
  <Suspense fallback={<SpinnerFallback />}>
    <LayoutWrapper />
  </Suspense>
);

// Wrap the agent-editable flat `routes` array in a layout route so ScrollRestoration
// + shared chrome live once above every page. Keeping the wrap here (instead of
// in routes.tsx) preserves the agent's simple flat-route contract.
const routeTree: RouteObject[] = [
  {
    element: rootElement,
    children: routes,
  },
];

const router = createBrowserRouter(routeTree);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <CookieBannerErrorBoundary>
        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>
      </CookieBannerErrorBoundary>
    </AuthProvider>
  );
}
