import { Link, useNavigate, useParams } from 'react-router-dom'
import { PRODUCTS_DATA } from './ProductPage'

const ProductDetails = () => {
    const params = useParams()
    const navigate = useNavigate()

    const backButtonHandler = () => {
        navigate('/products')
    }

    const productDetails = PRODUCTS_DATA.find((product) => {
        return product.id === params.id
    })

    return <>
        <p> product details</p>
        <p>{productDetails.id}</p>
        <p>{productDetails.title}</p>
        <p>{productDetails.description}</p>
        <button><Link onClick={backButtonHandler} className='bg-blue-100 p-1 rounded-2xl'>Go Back</Link></button>
    </>
}
export default ProductDetails