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
import SidebarOPENICON from "./Images/sideBar.png"
import "../src/pace.css"
import SettingPanel from "./components/Settings"
import settingsICON from "./Images/blackSettingsICON.png"
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

        openSettings() {
          document.getElementsByClassName("ShadowedSettingPanel")[0].style.display = "block"
        }
        
       
        
        
    

    
       
    
    
     
   

    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open})
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
   
    
    
    
    
    render() {
      
        return (
          
            <div className="cover">
                              <p className="stayHOME">#STAYATHOME</p>
                              <SettingPanel></SettingPanel>

            
              <img className="animated" src={Logo} alt="animated corona"/>
              <img className="animated2" src={Logo} alt="animated corona"/>
              <Sidebar
          sidebar={
            
              <div>
                <div className="Settings">
                  
                  <button onClick={() => this.openSettings()} className="settingBTN">
                    <img className="settingIcon" src={settingsICON} alt="settings"/>
                  </button>
                </div>
                <div className="mainDiv">
                
                <div className="nameGrid">
                <div className="orange fixed">LOCATIONS</div>
                  {
                  this.state.countries_stat.map(item => (
                    <p className="borderBottom" key={item.Name}>{item.country_name}</p>
                  ))
                }
                  
                </div>
                
               <div className="contentContainer">
               <div className="secondContent">
                <div className="caseGrid">
                  <div className="orange fixed">CASES</div>
                  {
                    this.state.countries_stat.map(item => (
                      <p className="borderBottom" key={item.Case}>{item.cases}</p>
                    ) )
                  }
                </div>
                <div className="recoverGrid">
                  <div className="orange fixed">RECOVERED</div>
                  {
                    this.state.countries_stat.map(item => (
                      <p className="borderBottom" key={item.Recover}>{item.total_recovered}</p>
                    ) )
                  }
                </div>
                <div className="deathGrid fixed">
                  <div className="orange">DEATHS</div>
                  {
                    this.state.countries_stat.map(item => (
                      <p className="borderBottom" key={item.Death}>{item.deaths}</p>
                    ) )
                  }
                </div>
                <div className="newCasesGrid fixed">
                  <div className="orange">NEW CASES</div>
                  {
                    this.state.countries_stat.map(item => (
                      <p className="borderBottom" key={item.NewCases}>{item.new_cases}</p>
                    ) )
                  }
                </div>
                <div className="newDeathsGrid" fixed>
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
              </div>
            
            

        }
          open={this.state.sidebarOpen} 
          onSetOpen={this.onSetSidebarOpen} sidebarClassName="ClassSidebar"
          styles={{sidebar: {position: "fixed",width: "60%",height: "100vh"}}}>
            <button className="sidebarBTN" onClick={() => this.onSetSidebarOpen(true)}>
              <img className="hamburger" src={SidebarOPENICON} alt="hamburger"/>
            </button>
          </Sidebar>
                
              
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