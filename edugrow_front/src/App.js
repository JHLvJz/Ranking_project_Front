import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "./App.css";
import { Layout } from "./styles/layout";

function App() {
  return (
    <Layout>
      <div className="App">
        <Signup />
      </div>
    </Layout>
  );
}

export default App;
