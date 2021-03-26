import logo from '../../source/logo.svg';
import './index.css';
import { Fragment } from 'react';


function Welcome() {
    return (
      <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <p>学习react</p>
      </Fragment>
      );
}

export default Welcome;