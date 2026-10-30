import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Index = lazy(() => import("./pages/index/index"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div aria-label="Carregando página">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
