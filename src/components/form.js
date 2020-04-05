import React from 'react'



class Forms extends React.Component {

  goDown() {
    document.body.scrollUp = 0;
    document.documentElement.scrollUp = 0;
  }
    
    render() {
        return(
            <div>
                <div className="searchBar">
          <div className="search">
            <form onSubmit={this.props.get}>
              <input autoComplete="off" spellCheck="false" className="searchInput" type="search" name="country" placeholder="enter the country name"/>
            <button  className="btn">
              
              <p>SEARCH</p>
              </button> 
              </form>
            
        </div>
        
          </div>
            </div>
        )
    }
}

export default Forms;