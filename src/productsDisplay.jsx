import './productStyle.css'
export default function ProductDisplay({ productShow }) {
    console.log(productShow)
    
    const { id, title, price, description, category, image } = productShow;


    return (
 
        <div className='commonStyle'>
            < img className='image' src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p className='price'>Price: ${price}</p>
            </div>
            
)

}