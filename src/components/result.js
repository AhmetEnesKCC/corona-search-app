import React from 'react';
import CountUp from "react-countup"

class Result extends React.Component {
    render() {
        return (
            <div className="result">
                {this.props.Flags && <img className="flags" src={this.props.Flags} alt="flags"/>}
                <div className="left">
                {this.props.Case && <p>Cases: <span className="yellow">{ this.props.Case }</span></p>}
                {this.props.Recovered && <p>Recovered: <span className="green"><CountUp end={this.props.Recovered} duration={3.0}></CountUp></span></p>}
                {this.props.Deaths && <p>Deaths: <span className="red">{this.props.Deaths}</span></p>}
                {this.props.NewCases && <p>New cases: <span className="yellow">{this.props.NewCases}</span></p>}
                {this.props.NewDeaths && <p>New deaths: <span id="newdeaths" className="red">{this.props.NewDeaths}</span></p>}
                </div>
                
                
                
            </div>
        )
    }
}

export default Result;