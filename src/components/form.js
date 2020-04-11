import React from 'react'




class Forms extends React.Component {

  goDownNTS() {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})

    }
    goDown() {
      window.setTimeout(() => this.goDownNTS(), 1250)
    }
    
  
    
    render() {
        return(
            <div>
                <div className="searchBar">
          <div className="search">
            <form  onSubmit={this.props.DATA}>
              <input   autoComplete="off" spellCheck="false" className="searchInput" type="search" name="country" placeholder="enter the country name"/>
            <button  className="btn" onClick={() => this.goDown()}>
              
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