import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { AppProvider } from './context/AppContext.jsx';
import CoffeeLoader from './ui/Loader/CoffeeLoader.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './ui/ErrorBoundary/ErrorBoundary.jsx';
import { ModalProvider } from './context/ModalContext.jsx';
import Welcome from './ui/Welcome.jsx';
import NotFound from './ui/NotFound/NotFound.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useCategoryData } from './hooks/useCategoryData.js';
import { generateSlug } from './utils/categoryMapping.js';

const Homepage = lazy(() => import('./pages/MenuPage/index.jsx'));
const Cart = lazy(() => import('./pages/CartPage/index.jsx'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function AppRoutes() {
  const { data: categories = [], isLoading } = useCategoryData();

  if (isLoading) return <CoffeeLoader />;

  const defaultCategory = categories[0];

  return (
    <Routes>
      <Route
        path="/"
        element={
          defaultCategory ? (
            <Navigate
              to={`/${generateSlug(defaultCategory.name)}`}
              replace={true}
            />
          ) : (
            <CoffeeLoader />
          )
        }
      />
      <Route path="/:categoryId" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <AppProvider>
            <BrowserRouter>
              {showWelcome && (
                <Welcome onComplete={() => setShowWelcome(false)} />
              )}
              <Suspense fallback={<CoffeeLoader />}>
                <AppRoutes />
              </Suspense>
            </BrowserRouter>
          </AppProvider>
        </ModalProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
