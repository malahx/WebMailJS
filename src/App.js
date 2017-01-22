import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main class="container-fluid">
          <div class="row">
              <Sidebar/>
              <Content/>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
