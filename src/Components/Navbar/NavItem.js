import './NavItem.css';
import {Link} from "react-router-dom";

function NavItem(props) {
    
    return (
        <div>
            <li className="nav-item">
                <Link to={props.page} className="icon-button">
                    {props.icon}
                </Link>
                
                  <div className="Description">
                    <span>{props.children}</span>
                  </div>
            </li>
        </div>
    )
}

export default NavItem
