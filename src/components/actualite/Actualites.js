import React, {Component} from 'react';
import "./Actualite.css"
import Date from "./Date";
class Actualites extends Component {
    render() {
        return (
            <div className="form">
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Nouvelle actualité</label>
                        <input type="text" className="form-control" id="formGroupExampleInput"
                               placeholder="Titre"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Images</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2"
                               placeholder="Another input"/>
                    </div>

                    <Date/>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary">Save Change</button>
                </form>
            </div>
        );
    }
}

export default Actualites;