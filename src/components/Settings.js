import React from "react"
import closeBTN from "../Images/closeSetting.png"
class  Settings extends React.Component {
    state= {
         LIGHTMODE: "Light Mode"
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
          for ( var p = 0; p < document.getElementsByClassName("borderBottom").length;p++) {
            document.getElementsByClassName("borderBottom")[p].style.color = "white"
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
          document.getElementsByClassName("mainDiv")[0].style.color = "white"
          document.getElementsByClassName("darkMode")[0].style.color = "white"
          document.getElementsByClassName("settingPanel")[0].style.backgroundColor = "#707070"
          document.getElementsByClassName("Settings")[0].style.backgroundColor = "#707070"
          document.getElementsByClassName("settingIcon")[0].style.filter = "invert(100%)"
          document.getElementsByClassName("closeButton")[0].style.filter = "invert(100%)"
          document.getElementsByClassName("stayHOME")[0].style.color = "white"
  
  
          
  
  
  
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
          document.getElementsByClassName("settingPanel")[0].style.backgroundColor = "white"
          document.getElementsByClassName("darkMode")[0].style.color = "#707070"
          document.getElementsByClassName("Settings")[0].style.backgroundColor = "white"
          document.getElementsByClassName("settingIcon")[0].style.filter = "invert(30%)"
          document.getElementsByClassName("closeButton")[0].style.filter = "invert(30%)"
          document.getElementsByClassName("stayHOME")[0].style.color = "#707070"


  
  
          
  
  
  
  
  
  
  
  
          //document.getElementsByClassName("darker")[0].style.color = "white"
  
          this.setState({
            LIGHTMODE: "Light Mode"
          })
  
  
  
  
  
  
  
        }
      }
      closeSettings() {
        document.getElementsByClassName("ShadowedSettingPanel")[0].style.display = "none"
      }
   

    render() {
        return (
            <div className="ShadowedSettingPanel">
                <div className="settingPanel">
                <div className="darkMode">
                <p className="switcher">{this.state.LIGHTMODE}</p>
                  <label className="globalSwitch">
                  <input onClick={() => this.darkMode()} className="switch" type="checkbox" id="switch"/>
                  <span className="slider"></span>
                  </label>
                  
            </div>
            <button onClick={() => this.closeSettings()} className="closeBTN">
                      <img className="closeButton" src={closeBTN} alt="closeButton"/>
                  </button>
            </div>
            </div>
        )
    }
}

export default Settings