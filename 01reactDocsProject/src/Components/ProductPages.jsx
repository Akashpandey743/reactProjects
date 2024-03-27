import {useCallback} from "react";

import ShippingForm from "./ShippingForm"


export default function ProductPages({productId,referrer,theme}){

    const handleSubmit = useCallback((orderDetails) => {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails
        })
    }, [productId,referrer])

    return(
        <div className = {theme}>
            <ShippingForm onSubmit={handleSubmit} />
        </div>
    )

}

function post(url,data){
    // imagine this sends a post request
    console.log('POST/' + url);
    console.log(data);
}