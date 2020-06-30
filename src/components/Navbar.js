import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer
  } from 'mdbreact';
  import '../App.css';


class Navbar extends React.Component {
    state = {
        collapseID: ''
    };
    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  componentDidMount() {
    document.querySelector('nav').style.height = 'auto';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapseID } = this.state;
    const navStyle = { marginTop: '0rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('navbarCollapse')}
      />
    );
  return (
    <div>
    <MDBNavbar style={navStyle} dark scrolling expand='md' fixed='top'>
              <MDBContainer>
                <MDBNavbarBrand>
                  <span className='white-text'>Home</span>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse('navbarCollapse')}
                />
                <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <ul className="navbar-nav mr-auto smooth-scroll">
                        <li className="nav-item">
                            <a className="nav-link" href="#about" data-offset="90">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects" data-offset="90">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#office" data-offset="90">Office 365</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#summary" data-offset="90">Summary</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#articles" data-offset="90">Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" data-offset="90">Contact</a>
                        </li>
                    </ul>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                    <ul className="navbar-nav nav-flex-icons">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/fernanda-ek-47b11573/">
                                <i className="fa fa-linkedin light-green-text-2"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://twitter.com/fernandinhaek">
                                <i className="fa fa-twitter light-green-text-2"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.instagram.com/fernandinhaek">
                                <i className="fa fa-instagram light-green-text-2"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/fernandaek">
                                <i className="fa fa-github-square"></i>
                            </a>
                        </li>
                    </ul>
                    </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapseID && overlay}
                </div>
        
  );
}
}

export default Navbar;