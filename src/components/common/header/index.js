import React from 'react'
import "./header.css";
import logo from '../../../assets/images/rentaride_logo.png';
import profileIcon from '../../../assets/images/profile_icon.png'

const Header = () => {
    return (
        <div className="max-width header">
            <img src={logo}
                alt='rentaride-logo'
                className='header-logo'
            />
            <div className='header-right'>
                <div className='header-location-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-icon-name'>
                            <i className="fi fi-rr-marker absolute-center location-icon"></i>
                            <div>Guwahati</div>
                        </div>
                        <i className="fi fi-rr-caret-down absolute-center"></i>
                    </div>
                    <div className='location-search-separator'></div>
                    <div className='header-searchBar'>
                        <i className="fi fi-rr-search absolute-center search-icon"></i>
                        <input placeholder='Search' className='search-input' />
                    </div>
                </div>
                <div className='profile-wrapper'>
                    <img src={profileIcon} alt='profileIcon' className='header-profile-image' />
                    <span className='header-username'>Rahul</span>
                    <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
                </div>
            </div>
        </div>
    )
};

export default Header