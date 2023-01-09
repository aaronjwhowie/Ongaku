import React from "react";
import axios from "axios";

class Product extends React.Component {
  state = {
    products: [],
  };

  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:3001/Products").then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
      <>
        <div class = "productDisplay">
          {this.state.products.map((card) => {
            return (
              <div class = "productContainer">
                <div>
                <h2 className="title" class = "productName">{card.productName}</h2>
                <img src={card.productIMG} alt="Product" class = "productIMG"/>
                </div>
                <div class = "productRight">
                <h3 class = "productDescription" >{card.productDescription}</h3>  
                <div class = "priceContainer">
                  <p>$</p>
              <h1 className="price" class = "productCost" >{card.productCost}</h1>
              </div>
                <p> Free Delivery today 5:00PM - 9:00PM</p>
                <h3> Rating :</h3>
                <div>
                <i>3.5 </i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                <i><p>(300)</p></i>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Product;

