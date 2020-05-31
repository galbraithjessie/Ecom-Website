import React, { Component } from 'react';
 
export default class Quantity extends Component {
   render() {
       const { className, quantity } = this.props;
       return(
          <div className={`${className} quantity`}>
              <div className='quantity__count'>
                  {quantity}
              </div>
              <div className='quantity__plus'>
                    <i className='fas fa-plus'></i>
              </div>
              <div className='quantity__minus'>
                    <i className='fas fa-minus'></i>
              </div>
          </div>
       );
   }
}