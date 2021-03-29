import React from 'react'; 
import ScrollAnimation from 'react-animate-on-scroll';


export default function Header({children, title, styleClass}) {
    return (
        <div className="container-fluid">
            <div className={`row align-items-center ${styleClass}`}>
                <div className="col text-center">
                    <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
                        
                        <ScrollAnimation animateIn="fadeInDown" duration={2}>
                        {title}
                        </ScrollAnimation>   
                    </h1>
                    {children}
                </div>
            </div>
        </div>
    )
}


Header.defaultProps = {
    title: 'default title',
    styleClass: 'header-hero'
}