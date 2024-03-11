import {Component} from 'react'
import './index.css'

class ProductItemDetails extends Component {
  state = {itemDetails: {}}

  componentDidMount() {
    this.getProductData()
  }

  getFormattedData = data => ({
    description: data.description,
    id: data.id,
    image: data.image,
    price: data.price,
    rating: data.rating.rate,
    title: data.title,
  })

  getProductData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://fakestoreapi.com/products/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    const fetchedData = await response.json()
    const updatedData = this.getFormattedData(fetchedData)
    console.log(updatedData)

    this.setState({
      itemDetails: updatedData,
    })
  }

  render() {
    const {itemDetails} = this.state
    const {id, image, title, price, description, rating} = itemDetails

    return (
      <div className="item-container">
        <div className="card-container">
          <img className="img-class" src={image} alt={`img${id}`} />
          <div>
            <h1 className="head">{title}</h1>
            <p className="price">Price : {price}</p>
            <p className="rating">
              Rating : <span className="rate-span">{rating}</span>
            </p>
            <p className="desc">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductItemDetails
