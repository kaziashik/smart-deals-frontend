import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Loding from '../Loading/Loding';
import LatestProducts from '../LatestProducts/LatestProducts';
// const axiosInstance = useAxios();

const latestProductPromis=  fetch ('https://node-express-assignment-seven.vercel.app/allProducts')
.then(res=>res.json());

const AllProduct = () => {
    return (
         <div>
        
        

            <Suspense fallback={<Loding></Loding>}>
                <LatestProducts latestProductPromis={latestProductPromis}></LatestProducts>
            </Suspense>

           
             
        </div>
    );
};

export default AllProduct;