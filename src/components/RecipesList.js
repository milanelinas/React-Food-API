import React, {Component} from 'react';
import Recipe from './Recipe'

export default class RecipesList extends Component {
    componentDidMount() {
        console.log(this.props.category)
    }
    render() {
        const {recipes} = this.props
        
        return (
            <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 col-lg-6 text-center text-uppercase mb-3">
                        <h1 className="text-slanted">Recipe List{this.props.category ?  ' for ' + this.props.category : '' }</h1>
                    </div>
                </div>
                <div className="row">
                {recipes.map( recipe => ( 
                    <Recipe key={recipe.recipe_id} recipe={recipe} />
                ))}
                </div>
                
            </div>
            </>
        )
    }
}

// https://recipesapi.herokuapp.com/api/search