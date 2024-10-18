import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AppProvider } from "./context/AppContext.jsx";

const Homepage = lazy(() => import("./pages/Homelayout.jsx"));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/Coffee" replace />} />
            <Route path="/:categoryId" element={<Homepage />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;