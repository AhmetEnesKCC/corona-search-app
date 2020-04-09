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
      Case: undefined,
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
      USAcases: undefined,
      USAdeaths: undefined,
      USArecovered: undefined,
      TurkeyCases: undefined,
      TurkeyDeaths: undefined,
      TurkeyRecovered: undefined,

    };

    Turkey = async (e) => {
      const api_callTurkey = await fetch(`https://api.collectapi.com/corona/countriesData?country=Turkey`,{method:'POST',headers: {
        "content-type": "application/json",
        "authorization": "apikey 29lHC5ootLf5GzS3pSCfAX:5OrAtMfecMxflAjdItazUG"
      }});
      const TURKEYdatas = await api_callTurkey.json();
      console.log(TURKEYdatas);
      this.setState({
        TurkeyCases: TURKEYdatas.result[0].totalCases,
        TurkeyDeaths: TURKEYdatas.result[0].totalDeaths,
        TurkeyRecovered: TURKEYdatas.result[0].totalRecovered,
      })
    }

    USA = async (e) => {
      const api_callUSA = await fetch(`https://api.collectapi.com/corona/countriesData?country=USA`,{method:'POST',headers: {
        "content-type": "application/json",
        "authorization": "apikey 29lHC5ootLf5GzS3pSCfAX:5OrAtMfecMxflAjdItazUG"
      }});
      const USAdatas = await api_callUSA.json();
      console.log(USAdatas);
      this.setState({
        USAcases: USAdatas.result[0].totalCases,
        USAdeaths: USAdatas.result[0].totalDeaths,
        USArecovered: USAdatas.result[0].totalRecovered,
      })
    }
    
    World = async (e) => {
      const api_callforNav = await fetch(`https://api.collectapi.com/corona/totalData`,{method:'POST',headers: {
        "content-type": "application/json",
        "authorization": "apikey 29lHC5ootLf5GzS3pSCfAX:5OrAtMfecMxflAjdItazUG"
      }});
      const DATAS = await api_callforNav.json();
      console.log(DATAS);
      this.setState({
        TotalCases: DATAS.result.totalCases,
        TotalDeaths: DATAS.result.totalDeaths,
        TotalRecoveries: DATAS.result.totalRecovered,
      })
    }
  

  

    get = async (e) => {
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
      } else if ( country === "China") {
        this.setState({
          Flags: China
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
            NewCases: "not certain",
            NewDeaths: "not certain"
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
          
            <div onLoad={() => this.World()} className="cover">
              <img className="animated" src={Logo} alt="animated corona"/>
              <img className="animated2" src={Logo} alt="animated corona"/>
              <Sidebar 
          sidebar={
            <div>
              <h2 className="sidebarContent">TOTAL DATAS</h2>
              <hr className="rule"></hr>
              <p className="navbarDATA">Total Case: {this.state.TotalCases}</p>
              <p className="navbarDATA">Total Deaths: {this.state.TotalDeaths}</p>
              <p className="navbarDATA">Total Recoveries: {this.state.TotalRecoveries}</p>
              <hr className="rule"></hr>
              <h2 className="sidebarContent">TURKEY DATAS</h2>
              <hr className="rule"></hr>
              <p className="navbarDATA">Total Case: {this.state.TurkeyCases}</p>
              <p className="navbarDATA">Total Deaths: {this.state.TurkeyDeaths}</p>
              <p className="navbarDATA">Total Recovered: {this.state.TurkeyRecovered}</p>
              <hr className="rule"></hr>
              <h2 className="sidebarContent">USA DATAS</h2>
              <hr className="rule"></hr>
              <p className="navbarDATA">Total Case: {this.state.USAcases}</p>
              <p className="navbarDATA">Total Deaths: {this.state.USAdeaths}</p>
              <p className="navbarDATA">Total Recovered: {this.state.USArecovered}</p>
            </div>

        }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{sidebar: {background: "black",width: "35vh",position: "fixed",backgroundColor: "#707070"}}}>
            <button className="sidebarBTN" onClick={() => this.onSetSidebarOpen(true)}>
              <img className="hamburger" src={Hamburger} alt="hamburger"/>
            </button>
          </Sidebar>
                <div className="darkMode">
                <div className="makeMiddle">
                  <p className="switcher">{this.state.LIGHTMODE}</p>
                  <label className="globalSwitch">
                  <input onClick={() => this.darkMode()} className="switch" type="checkbox" id="switch"/>
                  <span className="slider"></span>
                  </label>
                  
                </div>
              </div>
            <div onLoad={() => this.USA()} className="top">
          <div onLoad={() => this.Turkey()} className="imageContainer">
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