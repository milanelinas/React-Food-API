import React, {Component} from 'react';
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import beef from '../images/beef.jpg';
import chicken from '../images/chicken.jpg';
import pasta from '../images/pasta.jpg';
import pizza from '../images/pizza.jpg';
import salad from '../images/salad.jpg';
import vegetarian from '../images/vegetarian.jpg';





export default class Home extends Component {
    render() {
        return (
            <div>
                <Header title="amazing recipes"> 
                <ScrollAnimation animateIn="zoomIn" duration={2} delay={1000} >
                    <Link to="/recipes" className="text-uppercase btn-secondary btn-lg mt-3">Search Recipes</Link>
                </ScrollAnimation>               
                </Header>
                <ScrollAnimation animateIn="zoomIn" duration={2} delay={1000}  >
                    <h4 className="text-slanted text-center text-capitalize mt-5">popular food <span className="text-orange">categories</span></h4>
                </ScrollAnimation>  
                <div className="container">
                <ScrollAnimation animateIn="zoomIn" duration={2} delay={2000} >
                    <div className="row image-circle py-5">
                        <div className="col-6 col-md-4 col-lg-2 text-center">
                            <Link to="/recipescategory/beef">
                            <img src={beef} alt=""/>
                            <p className="text-uppercase mt-3">Beef</p>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 text-center">
                            <Link to="/recipescategory/chicken">
                            <img src={chicken} alt=""/>
                            <p className="text-uppercase mt-3">chicken</p>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 text-center">
                            <Link to="/recipescategory/pasta">
                            <img src={pasta} alt=""/>
                            <p className="text-uppercase mt-3">pasta</p>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 text-center">
                            <Link to="/recipescategory/pizza">
                            <img src={pizza} alt=""/>
                            <p className="text-uppercase mt-3">pizza</p>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 text-center">
                            <Link to="/recipescategory/salad">
                            <img src={salad} alt=""/>
                            <p className="text-uppercase mt-3">salad</p>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 text-center">
                            <Link to="/recipescategory/vegetarian">
                            <img src={vegetarian} alt=""/>
                            <p className="text-uppercase mt-3">vegetarian</p>
                            </Link>
                        </div>
                    </div>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }
}