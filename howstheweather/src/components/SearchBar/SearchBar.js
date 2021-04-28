import React from 'react'

import classes from '../SearchBar/SearchBar.module.css';
import InputField from '../../elements/InputField/InputField';
import Button from '../../elements/Button/Button';

const searchBar = (props) => {
    return(
        <div className={classes.SearchBarWrapper}>
            <InputField
                type="text"
                name="city"
                label="City Location"
                placeholder="City Name ?" 
                value={props.value} 
                handleChange={props.onChangeHandler} 
                error={props.error} />
            <Button 
                name="searchSubmit" 
                type="submit" 
                position="onForm"
                clicked={props.onClickHandler}>Search</Button>
        </div>
    );
}

export default searchBar;