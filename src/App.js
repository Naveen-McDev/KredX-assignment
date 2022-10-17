import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/*Layout wrapper */}
      <Layout>
        <Routes>
          {/* addition menu routes comes here */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
