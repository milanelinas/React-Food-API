import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Recipe extends Component {
    render() {
        const {image_url, title, source_url, publisher, recipe_id} = this.props.recipe;
        return (
               <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card" style={{height:'100'}}>
                        <img src={image_url} style={{height:'14rem'}} className="img-card-top" alt=""/>
                        <div className="card-body text-capitalize">
                            {title}
                            <h6 className="text-warning text-slante">
                                provided by {publisher}
                            </h6>
                        </div>
                        <div className="card-footer">
                            <Link className="btn btn-primary text-capitalize mr-3" to={`/recipes/${recipe_id}`}>View</Link>
                            <a href={source_url} className="btn btn-success mx-2 text-capitalize" target="_blank" rel="noreferrer">recipe url</a>
                        </div>
                    </div> 
               </div>
        )
    }
}