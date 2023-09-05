import React from 'react';
import "./crs.css";
import Filters from '../common/filters';

const crsFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters",
    },
    {
        id: 2,
        title: "Rating 4.0+",
    },
    {
        id: 3,
        title: "5 seater",
    },
    {
        id: 4,
        title: "7 seater",
    },
    {
        id: 5,
        title: "Security Deposit",
        icon: <i class="fi fi-rr-sack-dollar absolute-center"></i>,
    },
    {
        id: 6,
        title: "Great Offers",
    },
];

const CarRentalServices = () => {
    return (
        <div>
            <div className='max-width'>
                <Filters filterList={crsFilters} />
            </div>
        </div>
    )
}

export default CarRentalServices