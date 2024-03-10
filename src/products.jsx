import { useEffect, useState } from "react"
import ProductDisplay from './productsDisplay'
export default function Products() {
    
const [GetProduct, setProducts] = useState([])


    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
        .then(data => setProducts(data))

},[])

    return (
        <>
           
        
{ GetProduct.map(productThrow => <ProductDisplay productShow={productThrow}></ProductDisplay>)}
</>
    )
}

