
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './page/login'
import Home from './page/home'
import Welcome from './page/welcome'
// 
import Hooks from './page/hooks'
import UseState from './page/hooks/useState'
import UseEffect from './page/hooks/useEffect'
import UseRef from './page/hooks/useRef'
import UseMemo from './page/hooks/useMemo'
import UseCallback from './page/hooks/useCallback'
import UseReducer from './page/hooks/useReducer'
import UseContext from './page/hooks/useContext'
// 
import Classes from './page/classes'
import SelfDefinedComponent from './page/classes/1_selfDefinedComponent'
import Props from './page/classes/2_props'
import States from './page/classes/3_states'
import Render from './page/classes/4_render'
import Event from './page/classes/5_event'
import PassValue from './page/classes/6_passValue/'
import FatherToSon from './page/classes/6_passValue/fatherToSon/father'
import SonToFather from './page/classes/6_passValue/sonToFather/father'
import BrotherToBrother from './page/classes/6_passValue/brotherToBrother/brother1'

function App() {
  return (
    <HashRouter>
      <Switch>
{/* 子目录 */}
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/welcome" component={Welcome} />
{/* hooks */}
        <Route path="/hooks" component={Hooks} />
        <Route path="/useState" component={UseState} />
        <Route path="/useEffect" component={UseEffect} />
        <Route path="/useRef" component={UseRef} />
        <Route path="/useMemo" component={UseMemo} />
        <Route path="/useCallback" component={UseCallback} />
        <Route path="/useReducer" component={UseReducer} />
        <Route path="/useContext" component={UseContext} />
{/* classes */}
        <Route path="/classes" component={Classes} />
        <Route path="/selfDefinedComponent" component={SelfDefinedComponent} />
        <Route path="/props" component={Props} />
        <Route path="/states" component={States} />
        <Route path="/render" component={Render} />
        <Route path="/event" component={Event} />
        <Route path="/passValue" component={PassValue} />
        <Route path="/fatherToSon" component={FatherToSon} />
        <Route path="/sonToFather" component={SonToFather} />
        <Route path="/brotherToBrother" component={BrotherToBrother} />
{/* 根路径 */}
        <Route exact path="/" component={Home} />
{/* 路径错误，重定向 */}
        <Redirect to={"/home"} />
      </Switch>
    </HashRouter>
  );
}

export default App;
