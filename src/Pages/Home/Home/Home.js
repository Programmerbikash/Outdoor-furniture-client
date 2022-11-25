import React from 'react';
import AboutFurniture from '../AboutFurniture/AboutFurniture';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <AboutFurniture></AboutFurniture>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;