import React, {Component} from 'react';
import Search from '../components/Search';
import RecipesList from '../components/RecipesList';




export default class Recipes extends Component {
    constructor(props) {
        super(props)
         this.getRecipes = this.getRecipes.bind(this)
    }
    state = {
        recipes:[],
        search:'',
        url: `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search`,
        // https://recipesapi.herokuapp.com/api/search?q=chicken
        base_url:`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search`,
        query:`?q=`,
        error:''
    }
    handleChange = e => {
        this.setState({
            search:e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.search)
        const {base_url, query, search} = this.state
        this.setState({
            url:`${base_url}${query}${search}`,
            search:''
        },()=>this.getRecipes())
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
                    error:''
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
        console.log(this.state.search)
        return (
            <div>
                <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} search={this.state.search} />
                {this.state.error?(<section className="text-center display-4 my-5 text-slanted text-orange">{this.state.error}</section>):(<RecipesList recipes={this.state.recipes} />) }
                
            </div>
        )
    }
}


