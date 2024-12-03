import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AppProvider } from "./context/AppContext.jsx";
import CoffeeLoader from "./ui/Loader/CoffeeLoader.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundary from "./ui/ErrorBoundary/ErrorBoundary.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { StatusLogger } from "./utils/StatusLogger.jsx";

const Homepage = lazy(() => import("./pages/MenuPage/index.jsx"), {
  suspense: true,
  preload: true,
});

const Cart = lazy(() => import("./pages/CartPage/index.jsx"), {
  suspense: true,
  preload: true,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {


    return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <AppProvider>
            <StatusLogger/>
            <BrowserRouter>
              <Suspense fallback={<CoffeeLoader />}>
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate to="/Coffee" replace={true} />}
                  />
                  <Route path="/:categoryId" element={<Homepage />} />
                  <Route path="/cart" element={<Cart replace />} />
                  <Route path="*" element={<div>404 - Page Not Found</div>} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </AppProvider>
        </ModalProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
