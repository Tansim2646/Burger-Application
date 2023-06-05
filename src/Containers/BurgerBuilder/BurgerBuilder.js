import React from 'react';
import Aux from '../../hoc/Aux/Aux';
class BurgerBuilder extends React.Component{
    render(){
        return(
            <Aux>
                <div>
                    <h3>Burger</h3>
                </div>
                <div>
                    <h3>Burger Ingredients</h3>
                </div>
            </Aux>
        );
    }
}
export default BurgerBuilder;