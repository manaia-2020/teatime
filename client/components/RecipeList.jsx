import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions'
import { getRecipes } from '../api'
import RecipeListItem from './RecipeListItem'


class RecipeList extends React.Component {
    componentDidMount() {
        getRecipes()
            .then(recipes => {
                this.props.dispatch(fetchRecipes(recipes))
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
            <h1>Recipe List</h1>
            <div className='recipeList'>
            <ul>{this.props.recipes.map(recipe => <li role= 'listitem' key={recipe.id}><RecipeListItem recipe={recipe}/></li>)}</ul>
            </div>
            </>
            
        )
    }
}

    function mapStateToProps(state) {
        return {
            recipes: state.recipes
        }
    }


export default connect(mapStateToProps)(RecipeList)