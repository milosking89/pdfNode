import React, { useState } from 'react';

const Footer = () => {

    const styles = {
        wrapper: {
          backgroundColor: "#ff5240",
          width: "100%",
          position: "fixed",
          bottom: "0px",
          height: "50px"
        },
        element: {
          padding: "10px",
          color: "#fff",
          fontSize: "20px",
          textAlign: "center"
        },
      };

  return (
    <div style={styles.wrapper}>
        <div style={styles.element}>New Frontier Innova</div>
    </div>
  );
};

export default Footer;