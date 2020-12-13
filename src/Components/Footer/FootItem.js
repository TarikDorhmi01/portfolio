import './FootItem.css'
import React from 'react'

function FootItem(props) {
    const subTitles = [
        {id: 1, text: "instagram"},
        {id: 1, text: "Facebok"},
        {id: 1, text: "instagram"},
    ];
    
    
    return (
        <div className="FootItem">
            <ul>
                {props.title}
                {subTitles.map(item => (
                <li key={item.id}>
                    {item.text}
                    </li>
                ))}
                
            </ul>
            
            
        </div>
    )
}

export default FootItem
