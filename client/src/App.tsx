import "./App.css";
import { Route, Router } from "@solidjs/router";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./shared/NotFound/NotFound";
import HomeDash from "./components/Dashboard/HomeDash";
import OrderDash from "./components/Dashboard/Order/OrderDash";
import CustomersDash from "./components/Dashboard/Customers/CustomersDash";
function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        {/* dashboard */}
        <Route path="/dashboard" component={Dashboard}>
          {/* dashboard routes */}
          <Route path="/home" component={HomeDash} />
          <Route path="/orders" component={OrderDash} />
          <Route path="/customers" component={CustomersDash} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    </>
  );
}

export default App;
