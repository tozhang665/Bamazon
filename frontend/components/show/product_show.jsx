import React from "react";
import NavContainer from "../nav/nav_container"
import ProductItem from "./product_item";



class ProductShow extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      product: {}
    }
  }

  componentDidMount(){
    this.props.grabProduct(this.props.itemId).then(data=>this.setState({product: data.product}))
  }

  render(){
    if(!this.state.product.price){
      return(
        <div>
          <NavContainer/>
        </div>
      )
    }else{
      let{price,title,description,photoUrl} = this.state.product
      return(
        <div>
          <NavContainer/>
          <div id="show-to-product-container">
            <ProductItem price={price} title={title} description={description} photoUrl={photoUrl}/>
          </div>
        </div>
      ) 
    }
    
  }
}

export default ProductShow