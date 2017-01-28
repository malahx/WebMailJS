import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
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
          <Grid fluid>
            <Row>
              <Sidebar/>
              <Content/>
            </Row>
          </Grid>
        <Footer/>
      </div>
    );
  }
}

export default App;
