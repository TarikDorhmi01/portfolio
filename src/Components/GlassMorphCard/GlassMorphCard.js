import './GlassMorphCard.css'
import React from 'react'

function GlassMorphCard(props) {
    let { isGM } = props;
    if (isGM) {
        return (
            <div className="GlassMorphCard">
                
            </div>
        );
    } else {
        return (
            <div className="Card">
                <span className="icon">{props.icon}</span>
                <div className="Content">
                    <h1 className="greetin">{props.greetin}</h1>
                    <h1 className="title">{props.title}</h1>
                    <p className="paragraph"> {props.paragraph} </p>
                    
                </div>
                
            </div>
        )
    }
    

    
}

export default GlassMorphCard
