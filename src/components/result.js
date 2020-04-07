import React from 'react';

class Result extends React.Component {
    render() {
        return (
            <div className="result">
                {this.props.Flags && <img className="flags" src={this.props.Flags} alt="flags"/>}
                <div className="left">
                {this.props.Case && <p>Cases: <span className="yellow">{ this.props.Case }</span></p>}
                {this.props.Recovered && <p>Recovered: <span className="green">{this.props.Recovered}</span></p>}
                {this.props.Deaths && <p>Deaths: <span className="red">{this.props.Deaths}</span></p>}
                </div>
                
                
            </div>
        )
    }
}

export default Result;