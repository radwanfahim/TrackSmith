import "./App.css";
import { Route, Router } from "@solidjs/router";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
