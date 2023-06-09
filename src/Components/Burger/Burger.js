import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js'
const Burger = ({ingredients})=>{
    let transformedIngredients = Object.keys(ingredients)
    .map(ingKey => [...Array(ingredients[ingKey])]
    .map((_,index) => <BurgerIngredient key={ingKey + index} type={ingKey}></BurgerIngredient>))
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please Add Some Ingredient</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='burgerTop' />
            {transformedIngredients}
            <BurgerIngredient type='burgerBottom'/>
        </div>
    );
}
export default Burger;