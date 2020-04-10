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
                {this.props.Case && <p className="darker">Cases: <span className="yellow"><CountUp start={0} end={this.props.Case} duration={2}></CountUp></span></p>}
                {this.props.Recovered && <p className="darker">Recovered: <span className="green"><CountUp start={0} end={this.props.Recovered} duration={2}></CountUp></span></p>}
                {this.props.Deaths && <p className="darker">Deaths: <span className="red"><CountUp start={0} end={this.props.Deaths} duration={2}></CountUp></span></p>}
                {this.props.deathPercent && <p className="darker">Death Percent: <span className="yellow">% <CountUp decimals={2} end={(this.props.deathPercent)} duration={3}></CountUp></span></p>}
                {this.props.Critical && <p className="darker">Critical: <span id="newdeaths" className="red"><CountUp start={0} end={(this.props.Critical)} duration={2}></CountUp></span></p>}
                </div>
                
                
                
            </div>
        )
    }
}

export default Result;