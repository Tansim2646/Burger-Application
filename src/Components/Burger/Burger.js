import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js'
const Burger = ()=>{
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='burger-top' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='salad' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='burger-bottom' />
        </div>
    );
}
export default Burger;