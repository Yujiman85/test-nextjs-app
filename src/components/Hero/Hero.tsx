import React from 'react';
import { TextField, InputBase, Divider, IconButton, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>
          No Listing Fees.
          <br />
          None. Whatsoever.
        </h2>
        <br />
        <br />
        <br />
        <Paper className={styles.searchBar} component="form">
          <InputBase className={styles.inputField} placeholder="Address, City, State, Zip Code" />
          <div className={styles.buttonBackground}>
            <IconButton className={styles.IconButton} type="submit">
              <SearchIcon className={styles.searchIcon} />
            </IconButton>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Hero;
