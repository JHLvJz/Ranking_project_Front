import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./styles/layout";
import Ready from "./pages/Ready";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ready" element={<Ready />} />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
