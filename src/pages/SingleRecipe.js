import React, {Component} from 'react';




export default class SingleRecipe extends Component {
    constructor(props) {
        super(props)
        const id = this.props.match.params.id;
        this.state = {
            recipe:{},
            id,
            loading:true       
        }
    }


    async componentDidMount() {
        const url = `https://recipesapi.herokuapp.com/api/get?rId=${this.state.id}`;

        try {
            const response =  await fetch(url);
            const responseData = await response.json()
            this.setState({
                recipe:responseData.recipe,
                loading:false
            })
            
            
        } catch(error) {
            console.log(error)
        }
    }


    render() {
        const { image_url,
            publisher,
            publisher_url, 
            source_url,
            title,
            ingredients } = this.state.recipe
            if(this.state.loading) {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <h2 className="text-uppercase text-orange text-center">
                                    loading recipe....
                                </h2>
                            </div>
                        </div>
                    </div>
                )
            }
            return (
                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 xm-auto col-md-6 my-3">
                            <img src={image_url} className="d-block w-100" 
                            style={{maxHeight: '30rem'}} alt=""/>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-capitalize text-slanted">
                                provided by {publisher}
                            </h6>
                            <a href={publisher_url} target="_blank" className="btn btn-primary mt-2 text-capitalize">Publisher web page</a>
                            <a href={source_url} target="_blank" className="btn btn-success mt-2 text-capitalize mx-5">recipe url</a>
                            <ul className="list-group mt-4">
                                <h2 className="my-3">Ingredients</h2>
                                {ingredients.map((item,index)=>  {
                                    return(<li className="list-group-item text-slanted" key={index}>{item}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )
    }
}