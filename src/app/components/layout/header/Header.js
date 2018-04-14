import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="header">
                <div className="container">
                    <h2 className="header__logo">
                        <NavLink exact to="/">
                            <img src="" alt=""/>
                            UnSplash
                        </NavLink>
                    </h2>
                    <div className="header__gnb clearfix">
                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__nav-item">
                                    <NavLink to="/collections" className="header__nav-link">collections</NavLink>
                                </li>
                                <li className="header__nav-item">
                                    <NavLink to="/explores" className="header__nav-link">Explores</NavLink>
                                </li>
                                <li className="header__nav-item">
                                    <NavLink to="/todos" className="header__nav-link">todos</NavLink>
                                    <div className="header__box dropdown">
                                        <ul className="header__dropdown">
                                            <li className="header__depth1">
                                                <NavLink to="/about">About</NavLink>
                                            </li>
                                            <li className="header__depth1">
                                                <NavLink to="/wallpapers">Wallpapers</NavLink>
                                            </li>
                                            <li className="header__depth1">
                                                <NavLink to="/communities">communities</NavLink>
                                            </li>
                                            <li className="header__depth1">
                                                <NavLink to="/store">store</NavLink>
                                            </li>
                                            <li className="header__depth1">
                                                <NavLink to="/made">made widh unsplash</NavLink>
                                            </li>
                                            <li className="header__depth1">
                                                <NavLink to="/tag-photos">tag photos</NavLink>
                                            </li>
                                            <li className="header__depth1">
                                                <NavLink to="/api-developer">API/DEVELOPERS</NavLink>
                                            </li>
                                            <li className="header__depth1">
                                                <NavLink to="/license">License</NavLink>
                                            </li>
                                            <li className="header__depth1">
                                                <NavLink to="/help">Help</NavLink>
                                            </li>
                                        </ul>
                                        <div className="header__sns-area">
                                            <NavLink to="/twiter" className="twitter">twitter</NavLink>
                                            <NavLink to="/facebook" className="facebook">facebook</NavLink>
                                            <NavLink to="/utm-medium" className="utm-medium">utm-medium</NavLink>
                                            <NavLink to="/instagram" className="instagram">instagram</NavLink>
                                        </div>

                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>

            </div>
        )
    }
}


export default Header;