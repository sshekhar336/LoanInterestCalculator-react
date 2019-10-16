import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import SidebarContent from './Components/SidebarContent/SidebarContent';
import Backdrop from './Components/Backdrop/Backdrop';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarOpen: false,
    }
  }

  sidebarToggleClickHandler = () => {
    this.setState(
      (prevState => {
        return {
          sidebarOpen: !prevState.sidebarOpen
        }
      })
    )
  }

  backDropClickHandler = () => {
    this.setState({
      sidebarOpen: false
    })
  }

  render() {

    let sidebar;
    let backdrop;

    if (this.state.sidebarOpen) {
      sidebar = <SidebarContent showLocalValHandler={this.showLocalValHandler} backDropClickHandler={this.backDropClickHandler} />;
      backdrop = <Backdrop backDropClickHandler={this.backDropClickHandler} />;
    }

    return (
      <div className="App" style={{ height: '100%' }}>
        {sidebar}
        {backdrop}
        <Header sidebarToggleClickHandler={this.sidebarToggleClickHandler} />
        <Main sidebarOpen={this.state.sidebarOpen} />
      </div>

    );
  }
}

export default App;
