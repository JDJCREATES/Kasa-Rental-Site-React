import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import AppRouter from "./AppRouter";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
