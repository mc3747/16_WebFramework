import React, { Component } from 'react';
import { Router, Route ,Switch} from 'react-router';

import App from './App';
import SelfDefinedComponent from './practices/1_selfDefinedComponent';
import Props from './practices/2_props';
import States from './practices/3_states';
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();
class Routers extends Component {
    render(){        
        return(            
        <Router history={ history }>
            <Switch>
                        <Route path="/"  exact component={App} />
                        <Route path="/selfDefinedComponent"  exact component={SelfDefinedComponent} />
                        <Route path="/props"  exact component={Props} />
                        <Route path="/states"  exact component={States} />    
            </Switch>
                
        </Router> 
        )
    }   
}
export default Routers;
