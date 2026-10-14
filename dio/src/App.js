import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Cadastro from "./pages/cadastro";

// Components
import { Header } from "./components/header/index";
import { Footer } from "./components/footer";

function App() {
  const [isAutenticado, setIsAutenticado] = useState(false);
  const handleLogin = () => setIsAutenticado(true);
  const handleLogout = () => setIsAutenticado(false);

  function FeedWrapper() {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/feed") {
        setIsAutenticado(true);
      }
    }, [location.pathname]);

    return <Feed isAutenticado={isAutenticado} onLogout={handleLogout} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        {isAutenticado ? <Header autenticado={true} /> : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/feed" element={<FeedWrapper />} />
          <Route path="/register" element={<Cadastro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
