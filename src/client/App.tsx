import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './scss/app';
import Home from './components/Home'


const App: React.SFC<IAppProps> = (props) => {


    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}></Route>


            </Switch>

        </Router>
    )
}



interface IAppProps {

}

export default App
