import React, { useState } from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Footer from '../../components/common/footer'
import CarRentalServices from '../../components/carRentalServices'
import PlacesToVist from '../../components/placesToVisit'
import Cars from '../../components/cars'

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Car Rental Services");

    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    )
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Car Rental Services":
            return <CarRentalServices />
        case "Cars":
            return <Cars />
        case "Nearby":
            return <PlacesToVist />
        default:
            return <CarRentalServices />
    }
}

export default HomePage