import React from 'react'
import styles from "./PageLayout.module.css";
import Header from '../Header';

const PageLayout = () => {
  return (
    <div className={styles.pgContainer}>
      <Header/>
    </div>
  )
}

export default PageLayout