import React from 'react'
import {connect} from 'react-redux'
import {fetchRecipes, fetchFavourites} from '../actions'
import {getRecipes, getFavourites} from '../api'

import RecipeListItem from './RecipeListItem'

class RecipeList extends React.Component {
  componentDidMount() {
    getRecipes()
      .then(recipes => {
        this.props.dispatch(fetchRecipes(recipes))
      })
      .then(() => {
        getFavourites()
          .then(favourites => {
            this.props.dispatch(fetchFavourites(favourites))
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div role="listitem" className="recipe_list">
          {this.props.recipes.map(recipe => <div className="card" key={recipe.id}><RecipeListItem recipe={recipe}/></div>)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeList)
       