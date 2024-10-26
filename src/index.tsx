import { Route, Router } from "@solidjs/router";
import { render } from "solid-js/web";
import { App } from "./App";
import "./index.css";
import { Home } from "./pages/Home";

const root = document.getElementById("root");

render(
  () => (
    <Router root={App}>
      <Route path={"/"} component={Home} />
    </Router>
  ),
  root!
);
