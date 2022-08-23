import React  from "react";


 

class Product extends React.Component {
    constructor(props) {
        console.log("constructor")
      super(props)
    
      this.state = {
         ProductId:'',
         qty:0
      }
    }
    addTocart=(pid)=>{
        console.log("addTocart")
    
        this.setState({
ProductId:pid,
qty:this.state.qty+1
        })

    }
    componentDidUpdate(){
        console.log(' Product  -------componentDidUpdate')
    }
  
    render(){
        console.log("Product: ------render")
        
        return(<>
        {/* Product Id:{this.state.ProductId}
        <p>Qty: {this.state.qty}</p> */}
        {/* <h1>Product::::::{this.state.qty}</h1> */}
      <h1>
        
         <button onClick={()=>{this.addTocart(1)}}>Add To Cart</button>
        </h1>
        <Cart ProductId={this.state.ProductId} qty={this.state.qty}></Cart>
        </>)
    }
}

export default Product;

class Cart extends  React.Component {

    constructor(props){
        super(props);
        this.state={
            qty:this.props.qty
        }
    }


static getDerivedStateFromProps(props,state){
    
    console.log(' Cart  -------getDeriveStateFromProps')
    console.log(props.qty)
    console.log(state.qty)
     if(props.qty !==state.qty){
        return {qty:props.qty}
    }
    return null
}
componentDidUpdate(){
    console.log(' Cart  -------componentDidUpdate')
}

 
    render(){
        console.log("Cart: ------render")
        return(
            <>
            <h1>Product Id :{this.props.ProductId}</h1>
            <h1>Count: {this.state.qty}</h1>
            <h1>Cart</h1>
            </>
        )
    }
}
// // export default Cart;