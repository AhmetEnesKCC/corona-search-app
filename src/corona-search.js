import React  from 'react';
import Logo from "./Images/coronaImage.png";
import "../src/corona-app.css";
import "./goTop"; 
import Forms from "./components/form";
import Result from "./components/result"
import World from "./Images/world-1303628_1920.png"
import UK from "./Images/UK.jpg"
import Iran from "./Images/Iran.png"


alert("○ Type the first letter Uppercase\n○ Expect!!! USA and UK\n○ Like Italy\n○ TYPE 'World' FOR GLOBAL RESULT")
class Search extends React.Component {

    state = {
      Case: undefined,
      Recovered: undefined,
      Deaths: undefined,
      Error: undefined,
      Flags: undefined,
      NewCases: undefined,
      NewDeaths: undefined,

    };

  

    get = async (e) => {
      e.preventDefault();
      const country = e.target.elements.country.value;
      const flag_call = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      const api_call = await fetch(`https://api.collectapi.com/corona/countriesData?country=${country}`,{method:'POST',headers: {
        "content-type": "application/json",
        "authorization": "apikey 29lHC5ootLf5GzS3pSCfAX:5OrAtMfecMxflAjdItazUG"
      }});
      if ( country !== "" ) {
        const flagData = await flag_call.json();
      if ( flagData.length === 1 ) {
        if ( country !== "World" )
        console.log(flagData);
        this.setState({
          Flags: flagData[0].flag,
        })
      } else if ( country === "World"){
        this.setState({
          Flags: World 
        }) 
      } else if ( country === "UK" ){
        this.setState({
          Flags: UK
        })
      } else if ( country === "Iran") {
        this.setState({
          Flags: Iran,
        })
      }
      }


    
      
      const data = await api_call.json();
          if ( data.result.length === 1) {
            console.log(data);
          this.setState({
          Case: data.result[0].totalCases,
          Recovered: data.result[0].totalRecovered,
          Deaths: data.result[0].totalDeaths,
          NewCases: data.result[0].newCases,
          NewDeaths: data.result[0].newDeaths,
          error: "",
        });
          } else if ( data.result.length === 0 ) {
            const a = "First Letter must be Uppercase"
            alert(a)
          }
        
      

    }

    

   
    goTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    goDown() {
    document.body.scrollDown = 0;
    document.documentElement.scrollDown = 0;
    }

    
    
    
    render() {
        return (
            <div className="cover">
            <div className="top">
          <div className="imageContainer">
            <div className="image">
              <img src={Logo} alt="corona"/>
            </div>
          </div>
          <div className="textContainer">
            <div className="text">
              <h1>CORONAVIRUS</h1>
            </div>
          </div>
        </div>
        <Forms get={this.get}/>
        <button id="topbtn" onClick={() => this.goTop()}>
              </button>
              <Result className="Down"
               Case={this.state.Case}
               Recovered={this.state.Recovered}
               Deaths={this.state.Deaths}
               NewCases={this.state.NewCases}
               NewDeaths={this.state.NewDeaths}
               Error={this.state.Errors}
               Flags={this.state.Flags}
               />
        
          </div>
          
        )
    }
}




export default Search;