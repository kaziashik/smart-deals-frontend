import React, { Suspense } from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import Loding from '../Loading/Loding';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';


const latestProductPromis=fetch ('http://localhost:3000/latest-products').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
        

            <Suspense fallback={<Loding></Loding>}>
                <LatestProducts latestProductPromis={latestProductPromis}></LatestProducts>
            </Suspense>

           
             
        </div>
    );
};

export default Home;