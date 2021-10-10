import ReactDOM from 'react-dom';
import { StrictMode, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from "./ThemeContext";

// top of App function body

// wrap the rest of the app
const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>

  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);