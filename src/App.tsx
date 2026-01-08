import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<div className="text-center pt-20">Tasks Module Coming Soon</div>} />
          <Route path="stats" element={<div className="text-center pt-20">Stats Module Coming Soon</div>} />
          <Route path="settings" element={<div className="text-center pt-20">Settings Module Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
