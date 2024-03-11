import './index.css'
import {Link} from 'react-router-dom'

const ProductCard = props => {
  const {productData} = props
  const {imageUrl, id} = productData

  return (
    <Link to={`/products/${id}`} className="link-item">
      <img className="img-class" src={imageUrl} alt={`img:${id}`} />
    </Link>
  )
}
export default ProductCard
