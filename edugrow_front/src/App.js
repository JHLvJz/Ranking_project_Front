import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalFonts from "./fonts/fonts";
import { Layout } from "./styles/layout";
import Ready from "./pages/Ready";
import Mypage from "./pages/Mypage";
import Stopwatch from "./pages/Stopwatch";
import Signup from "./pages/Signup";
import Building from "./pages/Building";
import Ranking from "./pages/Ranking";
import Footer from "./components/layout/Footer";
import Rank from "./components/building/Rank";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="App">
          <GlobalFonts />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ready" element={<Ready />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/building" element={<Building />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
          {/* <Footer></Footer> */}
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
