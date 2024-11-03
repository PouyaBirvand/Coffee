import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AppProvider } from "./context/AppContext.jsx";
import CoffeeLoader from "./components/CoffeeLoader.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { initialItems } from "./components/initialItems.js";
const Homepage = lazy(() => import("./pages/Homelayout.jsx"), {
  suspense: true,
  preload: true
});
const Cart = lazy(() => import("./pages/Cart.jsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

// اضافه کردن این کد برای کش کردن عکس‌ها
if ('caches' in window) {
  caches.open('image-cache').then(cache => {
    initialItems.forEach(item => {
      cache.add(item.image);
    });
  });
}

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <BrowserRouter>
          <Suspense fallback={<CoffeeLoader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/Coffee" replace={true} />} />
              <Route path="/:categoryId" element={<Homepage />} />
              <Route path="/cart" element={<Cart replace />} />
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
