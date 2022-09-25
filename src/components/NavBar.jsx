import {useState} from "react";
import {Link} from "react-router-dom";

const NavBar = (props) => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="FilterBar">
                <div className="hamburger" onClick={() => setShow(!show)}>
                    <svg fill="white" viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="12"/>
                        <rect y="30" width="100" height="12"/>
                        <rect y="60" width="100" height="12"/>
                    </svg>
                </div>
                { props.children }
            </div>
            <div className="Space"/>
            {!show ||
                <div className="Dropdown">
                    <Link to="/">
                        <div className="DropdownElement">
                            Home
                        </div>
                    </Link>
                    <Link to="/catalog">
                        <div className="DropdownElement">
                            Catalog
                        </div>
                    </Link>
                    <Link to="/analysis">
                        <div className="DropdownElement">
                            Analysis
                        </div>
                    </Link>
                </div>
            }
        </div>
    );
}

export default NavBar;