import React, { Component } from 'react';
import FA from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <Navbar fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">WebMailJS</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Text>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button bsStyle="success" bsSize="small" class="navbar-btn"><FA name='pencil-square-o' /> Ecrire</Button>
                            <Button bsStyle="info" bsSize="small" class="navbar-btn"><FA name='refresh' /></Button>
                            <Button bsStyle="primary" bsSize="small" class="navbar-btn"><FA name='cog' /></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Navbar.Text>
                <Navbar.Text>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button bsStyle="default" bsSize="small" class="navbar-btn" disabled><FA name='check' /></Button>
                            <Button bsStyle="warning" bsSize="small" class="navbar-btn" disabled><FA name='hand-paper-o' /></Button>
                            <Button bsStyle="danger" bsSize="small" class="navbar-btn" disabled><FA name='trash' /></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Navbar.Text>
                <Navbar.Form pullRight>
                    <InputGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Rechercher" />
                        </FormGroup>
                        <InputGroup.Button>
                            <Button bsStyle="default" type="submit"><Glyphicon glyph="search" /></Button>
                        </InputGroup.Button> 
                    </InputGroup>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;