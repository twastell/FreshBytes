import React from 'react';

const Product = ({ name, price, description }) => {
    return (
      <>
        <div style={styles.card}>
          <div style={styles.photoContainer}>
            <img src='https://picsum.photos/200/300' style={styles.image}/>
          </div>
          <div>
            <h3 style={styles.headerFont}>Seller</h3>
            <h2 style={styles.headerFont}>{name}</h2>
            <h1 style={styles.headerFont}>{price}</h1>
            <p style={styles.description}>{description}</p>
          </div>
        </div>
      </>
    )
  };

export default Product;

const styles = {
  headerFont: {
    color: '#444444',
    fontFamily: 'Open Sans'
  },
  photoContainer: {
    padding: '30px',
    width: '45%',
    textAlign: 'center',
    float: 'left',
  },
  image: {
    maxHeight: '240px',
  },
  card: {
    display: 'flex',
    width: '650px',
    height: '375px',
    background: 'white',
    margin: '0 auto',
    top: '50%',
    left: '50%',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
    overflow: 'auto'
  },
  description: {
    padding: '30px',
    float: 'left',
    width: '55%',
    borderLeft: '2px solid #efefef',
    color: '#838383',
    fontFamily: 'Open Sans',
  }
};
