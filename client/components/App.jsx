import React from 'react'
import {connect} from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import RecipeList from './RecipeList'
import MyFavourites from './MyFavourites'

class App extends React.Component {
  render() {
    return (
      <>
        <div className='App'>
          <Header />

          <nav className="printHidden">
            <button className="navButton" onClick={this.props.viewRecipes}>Recipes</button> 
            <button className="navButton" onClick={this.props.viewFavourites}>Favourites</button> 
          </nav>

          <main>
              {this.props.currentPage == 'recipes' ? <RecipeList/> : ''}  
              {this.props.currentPage == 'favourites' ? <MyFavourites /> : ''}
          </main>
          <Footer />
        </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    viewRecipes: () => dispatch({ type: 'CHANGE_PAGE', page: 'recipes' }),
    viewFavourites: () => dispatch({ type: 'CHANGE_PAGE', page: 'favourites' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
