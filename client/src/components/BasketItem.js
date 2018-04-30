import React,{Component} from 'react';
import { connect } from "react-redux";
import { removeFromBasket } from '../actions';

class BasketItem extends Component{
    render(){
      return(
        <div className="product-item">
          <div className="row m-lg-0">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 p-l-lg-0">
              <a className="product-img">
                <img src={`../${this.props.item.product.imagePath}`} alt="" />
              </a>
            </div>
            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 p-lg-0">
              <div className="product-caption text-left">
                <h4 className="product-name p-lg-0">
                  <a>{this.props.item.product.name}</a>
                </h4>
                <p>
                {this.props.item.quantity} x <strong>${this.props.item.product.price}</strong>
                </p>
              </div>
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 p-lg-0">
              <i className="fa fa-remove remove-cart-item" onClick={()=>this.props.removeFromBasket(this.props.item.product._id)} />
            </div>
          </div>
        </div>
     );
    }
    
};


export default connect(null,{removeFromBasket})(BasketItem);