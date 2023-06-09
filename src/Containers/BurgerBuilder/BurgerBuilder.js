import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends React.Component{
    state = {
        ingredients:{
            salad:0,
            cheese:0,
            meat:0,
            bacon:0
        }
    }
    render(){
        return(
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    <h3>Burger Ingredients</h3>
                </div>
            </Aux>
        );
    }
}
export default BurgerBuilder;