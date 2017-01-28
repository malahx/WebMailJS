import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
import './Content.css';
import FA from 'react-fontawesome';

class Content extends Component {
  render() {
    return (
        <Col lg={10} className="content">
            <Table condensed hover striped>
                <thead>
                    <tr>
                        <th><FA name='tag' /></th>
                        <th>De</th>
                        <th>Sujet</th>
                        <th>Taille</th>
                        <th>Envoyé</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bold">
                        <td><FA name='envelope' /></td>
                        <td>truc@machin.fr</td>
                        <td>Tincidunt, turpis sed séllicitudén facîlisis suscipit vehiculâ éléfantid donec conubié
                            tempès
                            rhoncüs class arcû, magnès lilitoxic vulputaté libero venenatis eget lectus !
                        </td>
                        <td>8 ko</td>
                        <td>jeu. 17 janv.</td>
                    </tr>
                    <tr className="bold">
                        <td><FA name='envelope' /></td>
                        <td>truc@machin.fr</td>
                        <td>Tincidunt, turpis sed séllicitudén facîlisis suscipit vehiculâ éléfantid donec conubié
                            tempès
                            rhoncüs class arcû, magnès lilitoxic vulputaté libero venenatis eget lectus !
                        </td>
                        <td>8 ko</td>
                        <td>jeu. 17 janv.</td>
                    </tr>
                    <tr className="bold">
                        <td><FA name='envelope' /></td>
                        <td>truc@machin.fr</td>
                        <td>Tincidunt, turpis sed séllicitudén facîlisis suscipit vehiculâ éléfantid donec conubié
                            tempès
                            rhoncüs class arcû, magnès lilitoxic vulputaté libero venenatis eget lectus !
                        </td>
                        <td>8 ko</td>
                        <td>jeu. 17 janv.</td>
                    </tr>
                </tbody>
            </Table>
        </Col>
    );
  }
}

export default Content;
