import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Future Security Technician</title>
        <meta property="og:title" content="Future Security Technician" />
      </Helmet>
    </div>
  )
}

export default Home
