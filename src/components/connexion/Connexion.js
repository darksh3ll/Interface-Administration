import React, {Component} from 'react';
import "./Connexion.css"
class Connexion extends Component {
    render() {
        return (
            <div className="connexion">
                <form>
                    {/*name*/}
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="name"/>
                    </div>

                    {/*password*/}
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Connexion;