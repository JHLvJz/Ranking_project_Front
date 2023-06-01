import Home from "./pages/Home";
import Login from "../src/pages/Login"
import "./App.css";
import { Layout } from "./styles/layout";

function App() {
  return (
    <Layout>
      <div className="App">
        {/* <Home /> */}
        <Login/>

      </div>
    </Layout>
  );
}

export default App;
