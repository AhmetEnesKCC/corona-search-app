import React from 'react'; 
import CountUp from 'react-countup';

class Result extends React.Component {
    state = {
        
    }
   
    render() {
        return (
            <div className="result">
                {this.props.Flags && <img className="flags" src={this.props.Flags} alt="flags"/>}
                <div className="left">
                {this.props.Case && <p className="darker">Cases: <span className="yellow"><CountUp start={0} end={parseInt(this.props.Case.replace(",", ""))} duration={4}></CountUp></span></p>}
                {this.props.Recovered && <p className="darker">Recovered: <span className="green"><CountUp start={0} end={parseInt(this.props.Recovered.replace(",", ""))} duration={4}></CountUp></span></p>}
                {this.props.Deaths && <p className="darker">Deaths: <span className="red"><CountUp start={0} end={parseInt(this.props.Deaths.replace(",", ""))} duration={4}></CountUp></span></p>}
                {this.props.NewCases && <p className="darker">New cases: <span className="yellow">{this.props.NewCases}</span></p>}
                {this.props.NewDeaths && <p className="darker">New deaths: <span id="newdeaths" className="red">{this.props.NewDeaths}</span></p>}
                </div>
                
                
                
            </div>
        )
    }
}

export default Result;