import React,{Component} from 'react';
import { connect } from "react-redux";
import { removeFromWhishList, addToWhishList} from '../actions';
import * as $ from 'jquery';




class  WhishList extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        whishlistproducts: {}
  };
  }

  renderItem(product){
    return(
      <div key={product._id} className="row m-lg-0 overl bor-r" >
        <div className="col-sm-5 col-md-5 col-lg-5 cart-item">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <a href=" " className="cart-img-prev">
                <img src={`${process.env.PUBLIC_URL}/images/${product.imageName}`} alt="" />
              </a>
            </div>
            <div className="col-sm-9 col-md-9 col-lg-9 p-lg-0">
              <div className="product-name">
                <h5>
                  <a href=" ">{product.name}</a>
                </h5>
                <span className="price">${product.price}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-sm-1 col-md-1 col-lg-1 cart-item">
          <i className="fa fa-remove cart-remove-btn" onClick={()=>this.props.removeFromWhishList(product)}/>
        </div>
      </div>
      
      );
      
  };

  render(){
    return <div className="wrap-body-inner">
    <div className="hidden-xs">
      <div className="row">
        <div className="col-lg-6">
          <ul className="ht-breadcrumb pull-left">
            <li className="home-act">
              <a href=" ">
                <i className="fa fa-home" />
              </a>
            </li>
            <li className="home-act">
              <a href=" ">Product</a>
            </li>
            <li className="active">Authentication</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="block-cart m-b-lg-50 m-t-lg-30 m-t-xs-0">
      <div>
        <div className="heading">
          <h3>Cart</h3>
        </div>
        <div className="display-inline-block width-100">

          {this.props.whishlistproducts.map((e)=>this.renderItem(e))}
          
          <div className="clearfix" />
          
          <div className="clearfix" />
          {/*
            <a href=" " className="ht-btn ht-btn-default pull-right">
            Proceed to check out
          </a>
          */}
         

         
          
        </div>
      </div>
    </section>
  </div>;
  }
   

};
function mapStateToProps({ whishlistproducts }) {
  return { whishlistproducts };
}

export default connect(mapStateToProps,{removeFromWhishList})(WhishList);
