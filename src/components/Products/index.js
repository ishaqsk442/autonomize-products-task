import {Component} from 'react'
import ProductCard from '../ProductCard'
import './index.css'

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

class Products extends Component {
  state = {
    productsList: [],
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const apiUrl = `https://fakestoreapi.com/products`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    // const fetchedData = await response.json()
    // console.log(fetchedData)

    const fetchedData = await response.json()
    const updatedData = fetchedData.map(product => ({
      id: product.id,
      imageUrl: product.image,
      //   rating: product.rating.rate,
    }))
    console.log(updatedData)
    this.setState({
      productsList: updatedData,
    })
  }

  //   renderFailureView = () => (
  //     <div className="products-error-view-container">
  //       <img
  //         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
  //         alt="all-products-error"
  //         className="products-failure-img"
  //       />
  //       <h1 className="product-failure-heading-text">
  //         Oops! Something Went Wrong
  //       </h1>
  //       <p className="products-failure-description">
  //         We are having some trouble processing your request. Please try again.
  //       </p>
  //     </div>
  //   )

  //   renderLoadingView = () => (
  //     <div className="products-loader-container">
  //       <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
  //     </div>
  //   )

  //   renderAllProducts = () => {
  //     const {apiStatus} = this.state

  //     switch (apiStatus) {
  //       case apiStatusConstants.success:
  //         return this.renderProductsListView()

  //       case apiStatusConstants.inProgress:
  //         return this.renderLoadingView()
  //       default:
  //         return null
  //     }
  //   }

  render() {
    const {productsList} = this.state
    console.log(productsList, 'hiiiii')
    return (
      <div className="products-container">
        <ul className="products-list-cont">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Products
