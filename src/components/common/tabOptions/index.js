import React from 'react';
import "./tabOptions.css";
import crs from '../../../assets/images/crs.png';
import crs_inactive from '../../../assets/images/crs_inactive.png';
import car from '../../../assets/images/car.png';
import car_inactive from '../../../assets/images/car_inactive.png';
import ptg from '../../../assets/images/ptg.png';
import ptg_inactive from '../../../assets/images/ptg_inactive.png';

const tabs = [
    {
        id: 1,
        name: "Car Rental Services",
        active_img: `${crs}`,
        backdrop: "#Dabfee",
        inactive_img: `${crs_inactive}`,
    },
    {
        id: 2,
        name: "Cars",
        active_img: `${car}`,
        backdrop: "#Bfecee",
        inactive_img: `${car_inactive}`,
    },
    {
        id: 3,
        name: "Nearby",
        active_img: `${ptg}`,
        backdrop: "#Bfeec6",
        inactive_img: `${ptg_inactive}`,
    }
];

const TabOptions = ({ activeTab, setActiveTab }) => {
    return (
        <div className='tab-options'>
            <div className='max-width options-wrapper'>
                {tabs.map((tab) => {
                    return <div onClick={() => setActiveTab(tab.name)}
                        className={`tab-item absolute-center cur-po ${activeTab === tab.name && "active-tab"}`}
                    >
                        <div className='tab-image-container absolute-center'
                            style={{ backgroundColor: `${activeTab === tab.name ? tab.backdrop : ""}` }}
                        >
                            <img className='tab-image' alt='tab.name' src={activeTab === tab.name ? tab.active_img : tab.inactive_img} />
                        </div>
                        <div className='tab-name'>{tab.name}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TabOptions