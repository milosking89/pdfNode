import React, { useState } from 'react';

const Header = () => {

    const styles = {
        wrapper: {
          backgroundColor: "#ff5240",
          width: "100%",
          position: "fixed",
          top: "0px",
          height: "50px",
          textAlign: "center"
        },
        element: {
          fontWeight: "bold",
          color: "#fff",
          fontSize: "32px"
        }
      };

  return (
    <div style={styles.wrapper}>
        <div style={styles.element}>PDF EDITOR</div>
    </div>
  );
};

export default Header;