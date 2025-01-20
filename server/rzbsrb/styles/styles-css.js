
const styles = `

body {
    font-family: Arial, sans-serif; 
    background-color: blue;
    margin: 0; /* Removes default margin */
    padding: 0; /* Removes default padding */
}

.logo {
    width: 4cm;
    height: 2cm;
    background: yellow;
}
.clear {
    clear: both;
}

.container { 
    position: relative;
    width: 21cm;
    background-color: gray;
    height: 28.685cm;
    page-break-after: always;
 }; 

.header {  
    height: 2cm;  
    width: 80%;
    background-color: orange;
    text-align: left;
}

.master {
    height: 4cm;  
    background-color: green;
    color: #fff;
    text-align: center;
}

.details {
    background-color: silver;
    color: black;
    text-align: center;
}

.tableItem {
    width: 125px;
    border: 1px solid black;
}

.footer {
    background-color: yellow;
    color: black;
    text-align: center;
    bottom: 0px;
}

.emptyMaster {
    height: 0px!importatant;
}

.master-inner {
    float: left;
}

`;


module.exports = styles;

