
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './page/login'
import Home from './page/home'
import Welcome from './page/welcome'
import Hooks from './page/hooks'
import UseState from './page/hooks/useState'
import UseEffect from './page/hooks/useEffect'
import UseRef from './page/hooks/useRef'
import UseMemo from './page/hooks/useMemo'
import UseCallback from './page/hooks/useCallback'
import UseReducer from './page/hooks/useReducer'
import UseContext from './page/hooks/useContext'

function App() {
  return (
    <HashRouter>
      <Switch>
        {/* 子目录 */}
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/hooks" component={Hooks} />
        <Route path="/useState" component={UseState} />
        <Route path="/useEffect" component={UseEffect} />
        <Route path="/useRef" component={UseRef} />
        <Route path="/useMemo" component={UseMemo} />
        <Route path="/useCallback" component={UseCallback} />
        <Route path="/useReducer" component={UseReducer} />
        <Route path="/useContext" component={UseContext} />
        {/* 根路径 */}
        <Route exact path="/" component={Home} />
        {/* 路径错误，重定向 */}
        <Redirect to={"/home"} />
      </Switch>
    </HashRouter>
  );
}

export default App;
