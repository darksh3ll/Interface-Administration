import React, {Component} from 'react';

class Date extends Component {
    render() {
        return (
            <div className="date">
                <label htmlFor="formGroupExampleInput2">Date</label>
                <input type="date"/>
            </div>
        );
    }
}

export default Date;