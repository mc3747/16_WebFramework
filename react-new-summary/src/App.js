
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './page/login'
import Home from './page/home'
import Welcome from './page/welcome'
function App() {
  return (
    <HashRouter>
      <Switch>
        {/* 子目录 */}
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/welcome" component={Welcome} />
        {/* 根路径 */}
        <Route exact path="/" component={Home} />
        {/* 路径错误，重定向 */}
        <Redirect to={"/home"} />
      </Switch>
    </HashRouter>
  );
}

export default App;
