import React from 'react'
import {connect} from 'react-redux'
import {fetchIngredients, fetchSteps, addToFavourites} from '../actions'
import {getIngredients, getSteps, addFavourite} from '../api'
import IngredientsList from './IngredientsList'
import StepsList from './StepsList'
import {FaTimesCircle} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import { getFavouriteIds, isFavourited} from './helpers/helpers'

class recipeItem extends React.Component {

    state = {
        showMore: false,
        style: {color: 'grey', float: 'right', height: '25px', width: '25px', padding: '5px', marginLeft: '10px'}
        
    }

    componentDidMount() {

        getIngredients(this.props.recipe.id)
            .then(ingredients => {
                this.props.dispatch(fetchIngredients(ingredients))
            })
            .then(() => {
                getSteps(this.props.recipe.id)
                    .then(steps => {
                        this.props.dispatch(fetchSteps(steps))
                    })
            })

    }
     
    
    clickHandler = () => {
        this.setState({ showMore: !this.state.showMore })
    }
   

    render() {
        const { recipe, dispatch } = this.props
        const user = {id: 1}
        const deleteStyle = {color: 'red', cursor: 'pointer', position: 'fixed', display: 'absolute', top: '7%', left: '80%', height: '25px', width: '25px'}
        return (
            <>
                <img style={{ backgroundImage: `url(${recipe.image})` }}></img>
                <h1 className="recipe_name">{recipe.recipe_name}</h1>
                <div className="knifeAndFork">
                    <ul>
                        <li><b>Prep Time:</b> {recipe.prep_time}</li>
                        <li><b>Cook Time:</b> {recipe.cook_time}</li>
                        <li><b>Description:</b> {recipe.recipe_description}</li>
                    </ul>
                </div>
                <p className="rating">
                    <span className="fa fa-star checkedStar"></span>
                    <span className="fa fa-star checkedStar"></span>
                    <span className="fa fa-star checkedStar"></span>
                    <span className="fa fa-star checkedStar"></span>
                    <span className="fa fa-star checkedStar"></span>
                ({recipe.rating})
                </p>
                <p className="food_category">{recipe.food_category}</p>
                <button className="show_more" onClick={this.clickHandler}>Show more</button>

                {this.state.showMore && <div className="hide hide2" onClick={this.clickHandler}></div>}
                {this.state.showMore &&
                    <div className="recipe-content">
                        <FaTimesCircle style={deleteStyle} role='button' onClick={this.clickHandler}/>
                        <img style={{ backgroundImage: `url(${recipe.image})` }}></img>
                        <h1 className="recipe_name">{recipe.recipe_name}</h1>
                        <FaHeart id='notFavourited' role='button' style={{color: isFavourited(getFavouriteIds(this.props.favourites), this.props.recipe.id)? 'deepPink' : 'grey',
                             float: 'right', height: '25px', width: '25px', padding: '5px', marginLeft: '10px'}} 
                             onClick={() => isFavourited(getFavouriteIds(this.props.favourites), this.props.recipe.id)? null : (dispatch(addToFavourites({user_id: user.id, recipe_id: recipe.id})), addFavourite(user.id, recipe.id))}/>
                        <IngredientsList id={recipe.id} />
                        <StepsList id={recipe.id} />                     
                </div>}
            </>
        )
    }
}

function mapStateToProps (state)  {
    return {
        favourites: state.favourites
    }
}

export default connect(mapStateToProps)(recipeItem)

