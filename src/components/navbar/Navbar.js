import React, {Component} from 'react';
import "./Navbar.css"
class Navbar extends Component {
    render() {
        return (
                <nav>
                    <h2>ADMINISTRATION</h2>
                    <div className="logo">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt=""/>
                    </div>
                    <div className="titre">
                        <h5>Ajoutez nouvelles actualités</h5>
                        <h5>Ajoutez produits Mer</h5>
                        <h5>Ajoutez produits Terre</h5>
                    </div>

                    <button className="btn btn-primary">Deconnexion</button>
                </nav>
        );
    }
}

export default Navbar;