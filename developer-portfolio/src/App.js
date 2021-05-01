import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Timeline from './components/timeline';
import Projects from './components/projects';
import Footer from  './components/footer';
import Header from  './components/header';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
				
					
          <About></About>
                   					<Timeline></Timeline>        
               
        <Projects></Projects>
        Reminder: <Header></Header>
          <Introduction></Introduction>         
          <Footer></Footer>
        
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;