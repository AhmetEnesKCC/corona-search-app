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
    
    };
    Sidebar = async (e) => {
      const sidebar_call = await fetch(`https://corona-virus-world-and-india-data.p.rapidapi.com/api`,{
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
          "x-rapidapi-key": "65ec12cc03msh6abb45debc27630p1c7e3djsn11f67dc8ad54"
        }
      })
      const SİDEDATA = await sidebar_call.json()
      console.log(SİDEDATA)
      this.setState({
        CN1: SİDEDATA.countries_stat[0].country_name,
        Cases1: SİDEDATA.countries_stat[0].cases,
        Recover1: SİDEDATA.countries_stat[0].total_recovered,
        Deaths1: SİDEDATA.countries_stat[0].deaths,
        CN2: SİDEDATA.countries_stat[1].country_name,
        Cases2: SİDEDATA.countries_stat[1].cases,
        Recover2: SİDEDATA.countries_stat[1].total_recovered,
        Deaths2: SİDEDATA.countries_stat[1].deaths,
        CN3: SİDEDATA.countries_stat[2].country_name,
        Cases3: SİDEDATA.countries_stat[2].cases,
        Recover3: SİDEDATA.countries_stat[2].total_recovered,
        Deaths3: SİDEDATA.countries_stat[2].deaths,
        CN4: SİDEDATA.countries_stat[3].country_name,
        Cases4: SİDEDATA.countries_stat[3].cases,
        Recover4: SİDEDATA.countries_stat[3].total_recovered,
        Deaths4: SİDEDATA.countries_stat[3].deaths,
        CN5: SİDEDATA.countries_stat[4].country_name,
        Cases5: SİDEDATA.countries_stat[4].cases,
        Recover5: SİDEDATA.countries_stat[4].total_recovered,
        Deaths5: SİDEDATA.countries_stat[4].deaths,
        CN6: SİDEDATA.countries_stat[5].country_name,
        Cases6: SİDEDATA.countries_stat[5].cases,
        Recover6: SİDEDATA.countries_stat[5].total_recovered,
        Deaths6: SİDEDATA.countries_stat[5].deaths,
        CN7: SİDEDATA.countries_stat[6].country_name,
        Cases7: SİDEDATA.countries_stat[6].cases,
        Recover7: SİDEDATA.countries_stat[6].total_recovered,
        Deaths7: SİDEDATA.countries_stat[6].deaths,
        CN8: SİDEDATA.countries_stat[7].country_name,
        Cases8: SİDEDATA.countries_stat[7].cases,
        Recover8: SİDEDATA.countries_stat[7].total_recovered,
        Deaths8: SİDEDATA.countries_stat[7].deaths,
        CN9: SİDEDATA.countries_stat[8].country_name,
        Cases9: SİDEDATA.countries_stat[8].cases,
        Recover9: SİDEDATA.countries_stat[8].total_recovered,
        Deaths9: SİDEDATA.countries_stat[8].deaths,
        CN10: SİDEDATA.countries_stat[9].country_name,
        Cases10: SİDEDATA.countries_stat[9].cases,
        Recover10: SİDEDATA.countries_stat[9].total_recovered,
        Deaths10: SİDEDATA.countries_stat[9].deaths,
        CN11: SİDEDATA.countries_stat[10].country_name,
        Cases11: SİDEDATA.countries_stat[10].cases,
        Recover11: SİDEDATA.countries_stat[10].total_recovered,
        Deaths11: SİDEDATA.countries_stat[10].deaths,
        CN12: SİDEDATA.countries_stat[11].country_name,
        Cases12: SİDEDATA.countries_stat[11].cases,
        Recover12: SİDEDATA.countries_stat[11].total_recovered,
        Deaths12: SİDEDATA.countries_stat[11].deaths,
        CN13: SİDEDATA.countries_stat[12].country_name,
        Cases13: SİDEDATA.countries_stat[12].cases,
        Recover13: SİDEDATA.countries_stat[12].total_recovered,
        Deaths13: SİDEDATA.countries_stat[12].deaths,
        CN14: SİDEDATA.countries_stat[13].country_name,
        Cases14: SİDEDATA.countries_stat[13].cases,
        Recover14: SİDEDATA.countries_stat[13].total_recovered,
        Deaths14: SİDEDATA.countries_stat[13].deaths,
        CN15: SİDEDATA.countries_stat[14].country_name,
        Cases15: SİDEDATA.countries_stat[14].cases,
        Recover15: SİDEDATA.countries_stat[14].total_recovered,
        Deaths15: SİDEDATA.countries_stat[14].deaths,
        CN16: SİDEDATA.countries_stat[15].country_name,
        Cases16: SİDEDATA.countries_stat[15].cases,
        Recover16: SİDEDATA.countries_stat[15].total_recovered,
        Deaths16: SİDEDATA.countries_stat[15].deaths,
        CN17: SİDEDATA.countries_stat[16].country_name,
        Cases17: SİDEDATA.countries_stat[16].cases,
        Recover17: SİDEDATA.countries_stat[16].total_recovered,
        Deaths17: SİDEDATA.countries_stat[16].deaths,
        CN18: SİDEDATA.countries_stat[17].country_name,
        Cases18: SİDEDATA.countries_stat[17].cases,
        Recover18: SİDEDATA.countries_stat[17].total_recovered,
        Deaths18: SİDEDATA.countries_stat[17].deaths,
        CN19: SİDEDATA.countries_stat[18].country_name,
        Cases19: SİDEDATA.countries_stat[18].cases,
        Recover19: SİDEDATA.countries_stat[18].total_recovered,
        Deaths19: SİDEDATA.countries_stat[18].deaths,
        CN20: SİDEDATA.countries_stat[19].country_name,
        Cases20: SİDEDATA.countries_stat[19].cases,
        Recover20: SİDEDATA.countries_stat[19].total_recovered,
        Deaths20: SİDEDATA.countries_stat[19].deaths,
        CN21: SİDEDATA.countries_stat[20].country_name,
        Cases21: SİDEDATA.countries_stat[20].cases,
        Recover21: SİDEDATA.countries_stat[20].total_recovered,
        Deaths21: SİDEDATA.countries_stat[20].deaths,

      })
      
    }
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
      this.Sidebar()
      
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
        document.getElementsByClassName("result")[0].style.color = "white";
        document.getElementsByClassName("hamburger")[0].style.filter = "invert(100%)"

        //document.getElementsByClassName("darker")[0].style.color = "#707070";
        this.setState({
          LIGHTMODE: "Dark Mode",
        })
        

      
      } else if ( x.checked === false ) {
        document.body.style.backgroundColor = "white";
        document.getElementsByClassName("switcher")[0].style.color = "#707070";
        document.getElementsByClassName("info")[0].style.color = "#707070";
        document.getElementsByClassName("searchInput")[0].style.backgroundColor = "rgb(252, 252, 252)";
        document.getElementsByClassName("result")[0].style.color = "white";
        document.getElementsByClassName("hamburger")[0].style.filter = "invert(0%)"


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
            <div>
              <div className="sidebarINFO">
                <div className="grid-container">
                  <div className="grid-item">LOCATION</div>
                  <div className="grid-item">CASES</div>
                  <div className="grid-item">RECOVERED</div>
                  <div className="grid-item">DEATHS</div>
                  <div className="grid-item">{this.state.CN1}</div>
                  <div className="grid-item">{this.state.Cases1}</div>
                  <div className="grid-item">{this.state.Recover1}</div>
                  <div className="grid-item">{this.state.Deaths1}</div>
                  <div className="grid-item">{this.state.CN2}</div>
                  <div className="grid-item">{this.state.Cases2}</div>
                  <div className="grid-item">{this.state.Recover2}</div>
                  <div className="grid-item">{this.state.Deaths2}</div>
                  <div className="grid-item">{this.state.CN3}</div>
                  <div className="grid-item">{this.state.Cases3}</div>
                  <div className="grid-item">{this.state.Recover3}</div>
                  <div className="grid-item">{this.state.Deaths3}</div>
                  <div className="grid-item">{this.state.CN4}</div>
                  <div className="grid-item">{this.state.Cases4}</div>
                  <div className="grid-item">{this.state.Recover4}</div>
                  <div className="grid-item">{this.state.Deaths4}</div>
                  <div className="grid-item">{this.state.CN5}</div>
                  <div className="grid-item">{this.state.Cases5}</div>
                  <div className="grid-item">{this.state.Recover5}</div>
                  <div className="grid-item">{this.state.Deaths5}</div>
                  <div className="grid-item">{this.state.CN6}</div>
                  <div className="grid-item">{this.state.Cases6}</div>
                  <div className="grid-item">{this.state.Recover6}</div>
                  <div className="grid-item">{this.state.Deaths6}</div>
                  <div className="grid-item">{this.state.CN7}</div>
                  <div className="grid-item">{this.state.Cases7}</div>
                  <div className="grid-item">{this.state.Recover7}</div>
                  <div className="grid-item">{this.state.Deaths7}</div>
                  <div className="grid-item">{this.state.CN8}</div>
                  <div className="grid-item">{this.state.Cases8}</div>
                  <div className="grid-item">{this.state.Recover8}</div>
                  <div className="grid-item">{this.state.Deaths8}</div>
                  <div className="grid-item">{this.state.CN9}</div>
                  <div className="grid-item">{this.state.Cases9}</div>
                  <div className="grid-item">{this.state.Recover9}</div>
                  <div className="grid-item">{this.state.Deaths9}</div>
                  <div className="grid-item">{this.state.CN10}</div>
                  <div className="grid-item">{this.state.Cases10}</div>
                  <div className="grid-item">{this.state.Recover10}</div>
                  <div className="grid-item">{this.state.Deaths10}</div>
                  <div className="grid-item">{this.state.CN11}</div>
                  <div className="grid-item">{this.state.Cases11}</div>
                  <div className="grid-item">{this.state.Recover11}</div>
                  <div className="grid-item">{this.state.Deaths11}</div>
                  <div className="grid-item">{this.state.CN12}</div>
                  <div className="grid-item">{this.state.Cases12}</div>
                  <div className="grid-item">{this.state.Recover12}</div>
                  <div className="grid-item">{this.state.Deaths12}</div>
                  <div className="grid-item">{this.state.CN13}</div>
                  <div className="grid-item">{this.state.Cases13}</div>
                  <div className="grid-item">{this.state.Recover13}</div>
                  <div className="grid-item">{this.state.Deaths13}</div>
                  <div className="grid-item">{this.state.CN14}</div>
                  <div className="grid-item">{this.state.Cases14}</div>
                  <div className="grid-item">{this.state.Recover14}</div>
                  <div className="grid-item">{this.state.Deaths14}</div>
                  <div className="grid-item">{this.state.CN15}</div>
                  <div className="grid-item">{this.state.Cases15}</div>
                  <div className="grid-item">{this.state.Recover15}</div>
                  <div className="grid-item">{this.state.Deaths15}</div>
                  <div className="grid-item">{this.state.CN16}</div>
                  <div className="grid-item">{this.state.Cases16}</div>
                  <div className="grid-item">{this.state.Recover16}</div>
                  <div className="grid-item">{this.state.Deaths16}</div>
                  <div className="grid-item">{this.state.CN17}</div>
                  <div className="grid-item">{this.state.Cases17}</div>
                  <div className="grid-item">{this.state.Recover17}</div>
                  <div className="grid-item">{this.state.Deaths17}</div>
                  <div className="grid-item">{this.state.CN18}</div>
                  <div className="grid-item">{this.state.Cases18}</div>
                  <div className="grid-item">{this.state.Recover18}</div>
                  <div className="grid-item">{this.state.Deaths18}</div>
                  <div className="grid-item">{this.state.CN19}</div>
                  <div className="grid-item">{this.state.Cases19}</div>
                  <div className="grid-item">{this.state.Recover19}</div>
                  <div className="grid-item">{this.state.Deaths19}</div>
                  <div className="grid-item">{this.state.CN20}</div>
                  <div className="grid-item">{this.state.Cases20}</div>
                  <div className="grid-item">{this.state.Recover20}</div>
                  <div className="grid-item">{this.state.Deaths20}</div>
                  
                  
                </div>
              </div>
            </div>
            

        }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{sidebar: {background: "black",position: "fixed",width: "30vh",backgroundColor: "#707070",}}}>
            <button className="sidebarBTN" onClick={() => this.onSetSidebarOpen(true)}>
              <img className="hamburger" src={Hamburger} alt="hamburger"/>
            </button>
          </Sidebar>
                <div className="makeMiddle">
                  <p className="switcher">{this.state.LIGHTMODE}</p>
                  <label className="globalSwitch">
                  <input onClick={() => this.darkMode()} className="switch" type="checkbox" id="switch"/>
                  <span className="slider"></span>
                  </label>
                  
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