import React from 'react'
import RecipeList from './RecipeList'

class App extends React.Component {
 
  render() {
    return (
      <>
        <div className='recipes'>
         <RecipeList />
        </div>
      </>
    )
  }
}


export default App
