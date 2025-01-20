
const styles = `

body {
    font-family: Arial, sans-serif; 
    margin: 0; /* Removes default margin */
    padding: 0; /* Removes default padding */
}

.logo {
    width: 4cm;
    height: 2cm;
}

.logo-inner {
    width: 100%;
    height: 100%;
    background-image: url("http://10.1.133.25/PRODUCT/Retail/Retail/Themes/ProductPremium/images/logo/logo.png");
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
}

.clear {
    clear: both;
}

.container { 
    position: relative;
    width: 21cm;
    height: 28.685cm;
    page-break-after: always;
 }; 

.header {  
    height: 2cm;  
    width: 80%;
    background-color: orange;
    text-align: center;
}

.header-inner {
    font-size: 24px;
}

.master {
    height: 4cm;  
    background-color: #3639A4;
    color: #fff;
    text-align: center;
}

.details {
    background-color: #EBF0F5;
    color: black;
    text-align: center;
}

.table {
    width: 100%
}

.tableItem {
    width: 125px;
    border: 1px solid black;
}

.footer {
    background-color: #3639A4;
    color: #fff;
    text-align: center;
    width: 100%;
}

.emptyMaster {
    height: 0px!importatant;
}

.master-inner {
    text-align: left;
    padding: 1cm;
}

`;


module.exports = styles;

