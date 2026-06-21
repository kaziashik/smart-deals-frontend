import React, { Suspense } from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import Loding from '../Loading/Loding';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import useAxios from '../../hooks/useAxios';



const latestProductPromis=  fetch ('https://smart-deals-server-ecru.vercel.app/latest-products')
.then(res=>res.json());

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