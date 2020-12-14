import './FootItem.css'
import React from 'react'

function FootItem(props) {
    let { isLinked } = props;
    if (isLinked) {
        return (
            <div className="FootItem">
                <ul>
                    <span id="foot-title">{props.title}</span>
                    {props.subs.map(item => (
                        <li key={item.id}>
                           <a  href={item.link}>{item.text}</a>
                         </li>
                       
                    ))}
                        
                    
                </ul>
                
                
            </div>
        );
    } else {
        return (
            <div className="FootItem">
                <ul>
                    <span id="foot-title">{props.title}</span>
                    {props.subs.map(item => (
                        <li key={item.id}> 
                                {item.text} 
                        </li>
                     ))}
                  </ul>
            </div>
        )
    }
    
}

export default FootItem
