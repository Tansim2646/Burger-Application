import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends React.Component{
    render(){
        return(
            <Aux>
                <div>
                    <Burger />
                </div>
                <div>
                    <h3>Burger Ingredients</h3>
                </div>
            </Aux>
        );
    }
}
export default BurgerBuilder;