import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { AppProvider } from "./context/AppContext.jsx";
import CoffeeLoader from "./ui/Loader/CoffeeLoader.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./ui/ErrorBoundary/ErrorBoundary.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { StatusLogger } from "./utils/StatusLogger.jsx";
import Welcome from "./ui/Welcome.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NotFound from "./ui/NotFound/NotFound.jsx";

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
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <AppProvider>
            <StatusLogger />
            <BrowserRouter>
              {showWelcome && (
                <Welcome onComplete={() => setShowWelcome(false)} />
              )}
              <Suspense fallback={<CoffeeLoader />}>
                <Routes>
                  <Route path="/Coffee" element={<Homepage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route
                    path="/"
                    element={<Navigate to="/Coffee" replace={true} />}
                  />
                  <Route path="*" element={<NotFound />} />
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
