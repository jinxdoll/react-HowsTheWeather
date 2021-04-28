import React from 'react';
import classes from './ErrorNotice.module.css';
import Button from '../../elements/Button/Button';

const errorNotice = (props) => {
  return (
    <div className={classes.ErrorNoticeWrapper}>
      <h1 className={classes.NotFound404}>404</h1>
      <div className={classes.ErrorTextWrapper}>
        <h2 className={classes.NotFoundHeading}>Dang!</h2>
        <p className={classes.NotFoundDetails}>
          We can't seem to find teh city you are looking for.
        </p>
        <Button
          name='PleaseTryAgain'
          type='button'
          position='onErrorNotice'
          clicked={props.onClickHandler}
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default errorNotice;
