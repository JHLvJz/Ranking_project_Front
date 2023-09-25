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
import Planner from "./pages/Planner";
import Kakao from "./pages/Kakao";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="App">
          <GlobalFonts />
          <Routes>
            <Route path="/" element={<Kakao />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ready" element={<Ready />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/building" element={<Building />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/planner" element={<Planner />} />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
