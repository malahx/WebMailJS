import React, { Component } from 'react';
import FA from 'react-fontawesome';
import { Button, ButtonGroup, Navbar, FormGroup, FormControl, InputGroup, Glyphicon, ButtonToolbar } from 'react-bootstrap';
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
                            <Button bsStyle="success" bsSize="small"><FA name='pencil-square-o' /> Ecrire</Button>
                            <Button bsStyle="info" bsSize="small"><FA name='refresh' /></Button>
                            <Button bsStyle="primary" bsSize="small"><FA name='cog' /></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Navbar.Text>
                <Navbar.Text>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button bsStyle="default" bsSize="small" disabled><FA name='check' /></Button>
                            <Button bsStyle="warning" bsSize="small" disabled><FA name='hand-paper-o' /></Button>
                            <Button bsStyle="danger" bsSize="small" disabled><FA name='trash' /></Button>
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