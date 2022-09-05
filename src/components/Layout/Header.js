import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/pizza.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return ( 
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        
       
        
        <HeaderCartButton onClick={props.onShowCart} />
        
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
     
};

export default Header;