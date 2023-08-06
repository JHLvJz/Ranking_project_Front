import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./styles/layout";
import Ready from "./pages/Ready";
import Mypage from "./pages/Mypage";
import Kakao from "./pages/Kakao";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Kakao />} />
            <Route path="/ready" element={<Ready />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
