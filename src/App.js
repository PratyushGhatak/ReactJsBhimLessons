import './App.css';

import React, { Component, Pure } from 'react'
import ValueComponent from './component/ValueComponent';
import ChildComponent from './component/ChildComponent';
import { FunctionalComponent } from './component/FunctionalComponent';
import Nav from './component/Nav';
// for v5
// import { BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
// import Page2 from './component/ReactRouterV5/Page2';
// import Page1 from './component/ReactRouterV5/Page1';
// import Home from './component/ReactRouterV5/Home';
// import SubPageforPage2 from './component/ReactRouterV6/SubPageforPage2';

// for v6
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './component/ReactRouterV6/Home';
import Page1 from './component/ReactRouterV6/Page1';
import Page2 from './component/ReactRouterV6/Page2';
import SubPageforPage2 from './component/ReactRouterV6/SubPageforPage2';
import IdComponent from './component/ReactRouterV6/IdComponent';
export class App extends Component
{
  constructor(props)
  {
    // alo has its own `this`. `this` keyword in constructor points to App
    super(props)
    console.log("constructor")
    this.state = {
      counterValue: 0,
      showChild:true,
    }
    // this.incrementByOne = this.incrementByOne.bind(this)
    // this.decrementByOne = this.decrementByOne.bind(this)

  }
  render()
  {
    return (
      <>
      <Router>
        <Nav/>
        {/* set up for v5 */}
        {/* <Switch>
          <Route exact path="/" component={()=><Home/>}/>
          <Route exact path="/home" component={()=><Redirect to={'/'}/>}/>
          <Route exact path="/page1">
            <Page1 />
          </Route>
          <Route exact path="/page2" component={()=><Page2/>}/>
          <Route path="/page2/subpage" component={()=><SubPageforPage2/>}/>
          <Route path="/page2/:id" component={()=><Page2/>}/>
        </Switch> */}
        {/* set up for v6 */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/page1" element={<Page1/>}/>
          <Route exact path="/page2" element={<Page2/>}>
            <Route exact path="subpage" element={<SubPageforPage2/>}/>
            <Route exact path=":id" element={<IdComponent/>}/>
          </Route>


        </Routes>
      </Router>
      </>
    )
  }
}

export default App
