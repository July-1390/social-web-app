import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostsLine from "./pages/PostsLine";
import Subscriptions from "./pages/Subscriptions";
import Post from "./components/Post";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/registration" exact component={Registration}></Route>
          <Route path="/postsline" component={PostsLine}></Route>
          <Route path="/subscribes" component={Subscriptions}></Route>
          <Route path="/:post_id" component={Post}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
