import React, {Component} from 'react';
import RecipesList from '../components/RecipesList';



export default class RecipeCategory extends Component {
    constructor(props) {
        super(props)
         this.getRecipes = this.getRecipes.bind(this)
         const category = this.props.match.params.category
         this.state = {
            recipes:[],
            url: `https://recipesapi.herokuapp.com/api/search?q=${category}`,
            category
        }
    }
    
    async getRecipes() {
        try {
            const data = await fetch(this.state.url)
            const jsonData = await data.json()
            if(jsonData.recipes.length === 0) {
                this.setState({
                    error:'No records for the search please try something else or click on search icon for the most popular recipes'
                })
            } else {
                this.setState({
                    recipes:jsonData.recipes,
                    error:'',
                })
            }
            

        } catch(error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getRecipes()
    }


    render() {
        return (
            <div>
                {this.state.error?(<section className="text-center display-4 my-5 text-slanted text-orange">{this.state.error}</section>):(<RecipesList recipes={this.state.recipes} category={this.state.category} />) }
                
            </div>
        )
    }
}


