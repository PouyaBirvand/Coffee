import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AppProvider } from "./context/AppContext.jsx";
import CoffeeLoader from "./components/CoffeeLoader.jsx";

const Homepage = lazy(() => import("./pages/Homelayout.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Suspense fallback={<CoffeeLoader/>}>
          <Routes>
            <Route path="/" element={<Navigate to="/Coffee" replace />} />
            <Route path="/:categoryId" element={<Homepage />} />
            <Route path="/cart" element={<Cart   />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
