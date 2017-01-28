import React, { Component } from 'react';
import { Col, Table, Badge } from 'react-bootstrap';
import './Sidebar.css';
import FA from 'react-fontawesome';

class Navbar extends Component {
  render() {
    return (
        <Col lg={2} className="sidenav">
            <div >
                <Table condensed hover>
                    <thead><tr><th><FA name='envelope' /> Messages</th></tr></thead>
                    <tbody>
                        <tr class="active"><td><FA name='envelope-o' /> Non lu <Badge className="f-right">12</Badge></td></tr>
                        <tr><td><FA name='envelope-open-o' /> Lu</td></tr>
                        <tr><td><FA name='send-o' /> Envoyé</td></tr>
                        <tr><td><FA name='hand-paper-o' /> Spam</td></tr>
                        <tr><td><FA name='trash-o' /> Corbeille</td></tr>
                    </tbody>
                </Table>
                <Table condensed hover>
                    <thead><tr><th><FA name='folder' /> Dossiers</th></tr></thead>
                    <tbody>
                        <tr><td><FA name='folder-o' /> Travail</td></tr>
                        <tr><td><FA name='folder-o' /> Famille</td></tr>
                        <tr><td><FA name='folder-o' /> Amis</td></tr>
                    </tbody>
                </Table>
                <Table condensed hover>
                    <thead><tr><th><FA name='user-circle-o' /> Comptes</th></tr></thead>
                    <tbody>
                        <tr><td><FA name='user-circle' /> malah@malah.fr <Badge className="f-right">12</Badge></td></tr>
                        <tr><td><FA name='user-circle' /> jean@jean.fr</td></tr>
                    </tbody>
                </Table>
            </div>
        </Col>
    );
  }
}

export default Navbar;