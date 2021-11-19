import {BrowserRouter, Switch,Route} from "react-router-dom";


import Layout from "./Layout/Layout";
import Weather from "./Pages/Weather/Weather";


const App = ()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>

          <Route path="/weather/:name" exact>
            <Weather/>
          </Route>
          
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
