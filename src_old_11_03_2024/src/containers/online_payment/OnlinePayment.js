import React , { Component } from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';


class OnlinePayment extends Component {

    render() {

        return(

          <Aux>
            
            <div><Burger /></div> 
            <div>Build Controls</div> 

          </Aux>   
        );
    }

}

export default OnlinePayment;