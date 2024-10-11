import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Homepage = lazy(() => import("./pages/Homelayout.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/Coffee" replace />} />
          <Route path="/:categoryId" element={<Homepage />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}


export default App;

// <div className="bg-body h-screen overflow-auto scrollbar-hide w-full px-10 md:px-6 pt-5">
// <Home/>
// </div>
