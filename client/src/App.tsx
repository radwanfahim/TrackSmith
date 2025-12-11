import "./App.css";
import { Route, Router } from "@solidjs/router";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./shared/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Router>
    </>
  );
}

export default App;
