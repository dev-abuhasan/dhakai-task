import { createContext } from "react";
import { Route, Router, Switch } from 'react-router-dom';
import browserHistory from './Components/Pages/Sessions/carateBrowserHistory';
import LoadingSuspense from "./Components/Parent/Loadings/LoadingSuspense";
// import pagesRoute from './Components/Pages/PagesRoute';
import AuthGuard from "./Components/Pages/Sessions/AuthGuard";
import AdminRouting from './Components/Routings/AdminRouting';
import AdminLayout from "./Components/Parent/Layouts/AdminLayout";
import { ToastNotify } from "./Components/Parent/ToastNotify/ToastNotify";
import PagesRoute from "./Components/Pages/PagesRoute";

export const AppContext = createContext({});

const App = () => {
  const rootRouting = AdminRouting;
  return (
    <AppContext.Provider value={{ rootRouting }}>
      <Router history={browserHistory}>
        <LoadingSuspense>
          <Switch>
            {PagesRoute.map((item, i) => (
              <Route
                key={i}
                name={item.name}
                path={item.path}
                exact
                component={item.component}
              />
            ))}
            <AuthGuard>
              <AdminLayout /> {" "}
            </AuthGuard>
          </Switch>
        </LoadingSuspense>
      </Router>
      <ToastNotify />
    </AppContext.Provider>
  );
}

export default App;
