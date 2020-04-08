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
                {this.props.Case && <p>Cases: <span className="yellow"><CountUp start={0} end={parseInt(this.props.Case.replace(",", ""))} duration={3}></CountUp></span></p>}
                {this.props.Recovered && <p>Recovered: <span className="green"><CountUp start={0} end={parseInt(this.props.Recovered.replace(",", ""))} duration={3}></CountUp></span></p>}
                {this.props.Deaths && <p>Deaths: <span className="red"><CountUp start={0} end={parseInt(this.props.Deaths.replace(",", ""))} duration={3}></CountUp></span></p>}
                {this.props.NewCases && <p>New cases: <span className="yellow"><CountUp start={0} end={parseInt(this.props.NewCases.replace(",", ""))} duration={3}></CountUp></span></p>}
                {this.props.NewDeaths && <p>New deaths: <span id="newdeaths" className="red"><CountUp start={0} end={parseInt(this.props.NewDeaths.replace(",", ""))} duration={3}></CountUp></span></p>}
                </div>
                
                
                
            </div>
        )
    }
}

export default Result;