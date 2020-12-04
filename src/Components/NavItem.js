import React ,{useState} from 'react'
import './NavItem.css';

function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <li className="nav-item">
                <a href="#" className="icon-button" onClick={()=>setOpen(!open)}>
                    {props.icon}
                </a>
                {open && props.children}
           </li>
        </div>
    )
}

export default NavItem
