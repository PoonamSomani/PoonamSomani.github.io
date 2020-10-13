import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useStyles } from "./helpers/navigationMenuHelper";
import NavigationMenu from "./components/NavigationMenu";
import LiveChart from "./components/LiveChart";
import Overview from "./components/Overview";

import "./App.css";

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const handleMenu = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Router>
      <div className={classes.root}>
        <NavigationMenu handleMenu={handleMenu} open={open} classes={classes} />
        <div onClick={() => handleMenu(false)}>
          <Switch>
            <Route path="/live">
              <LiveChart classes={classes} open={open} />
            </Route>
            <Route path="/">
              <Overview classes={classes} open={open} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
