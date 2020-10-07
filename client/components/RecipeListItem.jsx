import React from 'react'
import { connect } from 'react-redux'


class RecipeListItem extends React.Component {
    render(){
        return(
            <>
                <div className='recipeCard'>
                    <img style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.props.recipe.image})` }}></img>
                    <h2>{this.props.recipe.recipe_name}</h2>
                    <p id='description'>
                        {this.props.recipe.recipe_description}
                    </p>
                    <p id="times">
                        prep: {this.props.recipe.prep_time}
                        <br></br>
                        cook: {this.props.recipe.cook_time}
                    </p>
                    <button>+</button>
                </div>
            </>
        )
    }
}



export default connect()(RecipeListItem)