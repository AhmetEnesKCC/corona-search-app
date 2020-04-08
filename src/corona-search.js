import React  from 'react';
import Logo from "./Images/coronaImage.png";
import "../src/corona-app.css";
import "./goTop"; 
import Forms from "./components/form";
import Result from "./components/result"
import World from "./Images/world-1303628_1920.png"
import UK from "./Images/UK.jpg"
import Iran from "./Images/Iran.png"


class Search extends React.Component {

    state = {
      Case: undefined,
      Recovered: undefined,
      Deaths: undefined,
      Error: undefined,
      Flags: undefined,
      NewCases: undefined,
      NewDeaths: undefined,
      LIGHTMODE: "Light Mode",

    };

  

    get = async (e) => {
      e.preventDefault();
      var country = e.target.elements.country.value;
      if ( country === "usa") {
        country = country.toUpperCase();
      } if (country === "uk") {
        country = country.toUpperCase();
      }
       
      country = country.charAt(0).toUpperCase() + country.slice(1);
      
      
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
      } 
      else if ( country === "World"){
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
        if ( data.result[0].newCases === "" || data.result[0].newDeaths === "") {
          this.setState({
            NewCases: "-",
            NewDeaths: "-"
          })
        }  
        
          } 
          
        
      

        }
    

    

   
        goTop() {
          window.scrollTo({top : 0,behavior: "smooth"})

        }
    

    
    
       
    
    
    darkMode() {
      var x = document.getElementById("switch");
      if ( x.checked === true ) {
        document.body.style.backgroundColor = "black";
        document.getElementsByClassName("switcher")[0].style.color = "white";
        document.getElementsByClassName("info")[0].style.color = "white"
        document.getElementsByClassName("searchInput")[0].style.backgroundColor = "white";
        document.getElementsByClassName("result")[0].style.color = "black";
        document.getElementsByClassName("switcher")[0].style.content = "DARK MODE";
        this.setState({
          LIGHTMODE: "Dark Mode",
        })
        


      } else if ( x.checked === false ) {
        document.body.style.backgroundColor = "white";
        document.getElementsByClassName("switcher")[0].style.color = "#707070";
        document.getElementsByClassName("info")[0].style.color = "#707070"
        document.getElementsByClassName("searchInput")[0].style.backgroundColor = "rgb(252, 252, 252)"
        document.getElementsByClassName("result")[0].style.color = "white";
        this.setState({
          LIGHTMODE: "Light Mode"
        })







      }
    } 
    
    
    
    render() {
        return (
            <div className="cover">
              <div className="darkMode">
                <div className="makeMiddle">
                  <p className="switcher">{this.state.LIGHTMODE}</p>
                  <label className="globalSwitch">
                  <input onClick={() => this.darkMode()} className="switch" type="checkbox" id="switch"/>
                  <span className="slider"></span>
                  </label>
                  
                </div>
              </div>
            <div className="top">
          <div className="imageContainer">
            <div className="image">
              <img src={Logo} alt="corona"/>
            </div>
          </div>
          <div className="textContainer">
            <div className="text">
              <h1 className="info">CORONA TRACK</h1>
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