import React from 'react'
import {FaMinusCircle} from 'react-icons/fa'
import {connect} from 'react-redux'

class FavouriteItem extends React.Component  {
  render() {    
    const { recipe_id } = this.props.favourite
    const deleteStyle = { color: 'red', marginRight: '7px', cursor: 'pointer' }
    return (
      <tr>
        <td><img src={this.props.recipe[recipe_id - 1]?.image} width='100px' height='100px'></img></td>
        <td><h4>{this.props.recipe[recipe_id - 1]?.recipe_name}</h4></td>
        <td>
          <FaMinusCircle
            style={deleteStyle}
            role='button'
            onClick={() => this.props.kill(recipe_id)}
          />
        </td>
      </tr>
    )
  }
}

export default connect()(FavouriteItem)