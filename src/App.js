import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostsLine from "./pages/PostsLine";
import Subscriptions from "./pages/Subscriptions";
import Post from "./components/Post";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route path="/postsline" component={PostsLine}></Route>
          <Route path="/subscribes" component={Subscriptions}></Route>
          <Route path="/:post_id" component={Post}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
