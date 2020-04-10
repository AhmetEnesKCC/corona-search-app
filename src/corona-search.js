import React  from 'react';
import Logo from "./Images/coronaImage.png";
import "../src/corona-app.css";
import "./goTop"; 
import Forms from "./components/form";
import Result from "./components/result"
import World from "./Images/world-1303628_1920.png"
import UK from "./Images/UK.jpg"
import Iran from "./Images/Iran.png"
import China from "./Images/china.png"
import Sidebar from "react-sidebar"
import Hamburger from "./Images/hamburger.png"


class Search extends React.Component {
  

  

    state = {
      Cases: undefined,
      Recovered: undefined,
      Deaths: undefined,
      Error: undefined,
      Flags: undefined,
      NewCases: undefined,
      NewDeaths: undefined,
      LIGHTMODE: "Light Mode",
      sideBarOpen: true,
      TotalCases: undefined,
      TotalDeaths: undefined,
      TotalRecoveries: undefined,
      deathPercent: undefined,
      Critical: undefined,
      countries_stat: [],
    
    };
    
    DATA = async (e) => {
      e.preventDefault();
      var country = e.target.elements.country.value;
      if ( country === "usa") {
        country = country.toUpperCase();
      } if (country === "uk") {
        country = country.toUpperCase();
      } if ( country === "Usa") {
        country = country.toUpperCase();
      } if ( country === "Türkiye" || country === "türkiye") {
        country = "Turkey";
      } if ( country === "Amerika" || country === "amerika") {
        country = "USA";
      }  if ( country === "italya" || country === "İtalya") {
        country = "Italy";
      }
       
       
      country = country.charAt(0).toUpperCase() + country.slice(1);
      
      const api_call = await fetch(`https://covid-19-data.p.rapidapi.com/country?format=undefined&name=${country}`,{
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key": "65ec12cc03msh6abb45debc27630p1c7e3djsn11f67dc8ad54"
        }
    })
    
      const DATAS = await api_call.json()
      if ( DATAS.length === 1) {
        console.log(DATAS);
      this.setState({
        Case: DATAS[0].confirmed,
        Recovered: DATAS[0].recovered,
        Deaths: DATAS[0].deaths,
        deathPercent: DATAS[0].deaths / DATAS[0].confirmed * 100,
        Critical: DATAS[0].critical,
      })
      const flag_call = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      
      
      
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
      } else if ( country === "China") {
        this.setState({
          Flags: China
        })
      }
      } 
      }
      
      }
    

    
   


    
    componentDidMount() {
      fetch(`https://corona-virus-world-and-india-data.p.rapidapi.com/api`,{
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
          "x-rapidapi-key": "65ec12cc03msh6abb45debc27630p1c7e3djsn11f67dc8ad54"
        }
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            countries_stat: result.countries_stat
          });
        } 
      
      )
      }
  

  

    
    

    

   
        goTop() {
          window.scrollTo({top : 0,behavior: "smooth"})

        }
        
      
     
        
        
    

    
       
    
    
    darkMode() {
      var x = document.getElementById("switch");
     
      
      if ( x.checked === true ) {
        for ( var a = 0; a < document.getElementsByClassName("grid-item").length; a++ ) {
          document.getElementsByClassName("grid-item")[a].style.borderBottom  = "white .2vw solid"

        }
        for ( var d = 0; d < document.getElementsByClassName("firstFOR").length;d++) {
          document.getElementsByClassName("firstFOR")[d].style.color = "white"
        }
        for ( var e = 0; e < document.getElementsByClassName("borderBottom").length;e++) {
          document.getElementsByClassName("borderBottom")[e].style.color = "white"
        }
        for ( var g = 0; g < document.getElementsByClassName("orange").length;g++) {
          document.getElementsByClassName("orange")[g].style.color = "white"
        }
        
        document.body.style.backgroundColor = "black";
        document.getElementsByClassName("switcher")[0].style.color = "white";
        document.getElementsByClassName("info")[0].style.color = "white"
        document.getElementsByClassName("searchInput")[0].style.backgroundColor = "white";
        document.getElementsByClassName("result")[0].style.color = "white";
        document.getElementsByClassName("hamburger")[0].style.filter = "invert(100%)"
        document.getElementsByClassName("mainDiv")[0].style.backgroundColor = "#707070"

        



        //document.getElementsByClassName("darker")[0].style.color = "#707070";
        this.setState({
          LIGHTMODE: "Dark Mode",
        })
        

      
      } else if ( x.checked === false ) {
        for ( var b = 0; b < document.getElementsByClassName("grid-item").length; b++ ) {
          document.getElementsByClassName("grid-item")[b].style.borderBottom  = "#707070 .2vw solid"
        

        }
        for ( var c = 0; c< document.getElementsByClassName("firstFOR").length;c++) {
          document.getElementsByClassName("firstFOR")[c].style.color = "#f0932b"
        }
        for ( var f = 0; f < document.getElementsByClassName("borderBottom").length;f++) {
          document.getElementsByClassName("borderBottom")[f].style.color = "#707070"
        }
        for ( var h = 0; h < document.getElementsByClassName("orange").length;h++) {
          document.getElementsByClassName("orange")[h].style.color = "#f0932b"
        }
        
        document.body.style.backgroundColor = "white";
        document.getElementsByClassName("switcher")[0].style.color = "#707070";
        document.getElementsByClassName("info")[0].style.color = "#707070";
        document.getElementsByClassName("searchInput")[0].style.backgroundColor = "rgb(252, 252, 252)";
        document.getElementsByClassName("result")[0].style.color = "white";
        document.getElementsByClassName("hamburger")[0].style.filter = "invert(30%)"
        document.getElementsByClassName("mainDiv")[0].style.backgroundColor = "white"
        document.getElementsByClassName("mainDiv")[0].style.color = "#707070"


        








        //document.getElementsByClassName("darker")[0].style.color = "white"

        this.setState({
          LIGHTMODE: "Light Mode"
        })







      }
    } 
   

    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open})
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    
    
    
    
    render() {
      
        return (
          
            <div className="cover">
              
              <img className="animated" src={Logo} alt="animated corona"/>
              <img className="animated2" src={Logo} alt="animated corona"/>
              <Sidebar 
          sidebar={
            
              <div className="mainDiv">
              <div className="nameGrid">
              <div className="orange">LOCATIONS</div>
                {
                this.state.countries_stat.map(item => (
                  <p className="borderBottom" key={item.Name}>{item.country_name}</p>
                ))
              }
                
              </div>
              
             <div className="contentContainer">
             <div className="secondContent">
              <div className="caseGrid">
                <div className="orange">CASES</div>
                {
                  this.state.countries_stat.map(item => (
                    <p className="borderBottom" key={item.Case}>{item.cases}</p>
                  ) )
                }
              </div>
              <div className="recoverGrid">
                <div className="orange">RECOVERED</div>
                {
                  this.state.countries_stat.map(item => (
                    <p className="borderBottom" key={item.Recover}>{item.total_recovered}</p>
                  ) )
                }
              </div>
              <div className="deathGrid">
                <div className="orange">DEATHS</div>
                {
                  this.state.countries_stat.map(item => (
                    <p className="borderBottom" key={item.Death}>{item.deaths}</p>
                  ) )
                }
              </div>
              <div className="newCasesGrid">
                <div className="orange">NEW CASES</div>
                {
                  this.state.countries_stat.map(item => (
                    <p className="borderBottom" key={item.NewCases}>{item.new_cases}</p>
                  ) )
                }
              </div>
              <div className="newDeathsGrid">
                <div className="orange">NEW DEATHS</div>
                {
                  this.state.countries_stat.map(item => (
                    <p className="borderBottom" key={item.NewDeaths}>{item.new_deaths}</p>
                  ) )
                }
              </div>
              </div>
             </div>
              
              </div>
            
            

        }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{sidebar: {position: "fixed",width: "60%"}}}>
            <button className="sidebarBTN" onClick={() => this.onSetSidebarOpen(true)}>
              <img className="hamburger" src={Hamburger} alt="hamburger"/>
            </button>
          </Sidebar>
                <div className="makeRight">
                  <p className="switcher">{this.state.LIGHTMODE}</p>
                  <label className="globalSwitch">
                  <input onClick={() => this.darkMode()} className="switch" type="checkbox" id="switch"/>
                  <span className="slider"></span>
                  </label>
                  
                </div>
              
            <div className="top">
              <h1 className="info">CORONA TRACK</h1>
        </div>
        <Forms DATA={this.DATA}/>
        <button id="topbtn" onClick={() => this.goTop()}>
              </button>
              <Result className="Down"
               Case={this.state.Case}
               Recovered={this.state.Recovered}
               Deaths={this.state.Deaths}
               deathPercent={this.state.deathPercent}
               Critical={this.state.Critical}
               Error={this.state.Errors}
               Flags={this.state.Flags}
               />
        
          </div>
          
        )
    }
}




export default Search;