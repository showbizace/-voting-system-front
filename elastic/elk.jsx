import { ApmRoute } from "@elastic/apm-rum-react";
class App extends React.Component {
  render() {
    return (
      <div>
        <ApmRoute
          exact
          path="/"
          component={() => (
            <Redirect
              to={{
                pathname: "/home",
              }}
            />
          )}
        />
        <ApmRoute path="/home" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
      </div>
    );
  }
}
