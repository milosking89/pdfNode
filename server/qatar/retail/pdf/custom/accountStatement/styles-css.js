const styles = `

.container {
  justify-content: center;
  align-items: center;
}

.details {
  margin: auto;
}

.header {
  width: 100%;
  text-align: right;
  margin-bottom: 50px;
}

.master {
  margin-bottom: 50px;
}

.master-wrapper {
  display: block;
  padding: 10px;
  border: 1px solid #ccc;
}

/* First div with flex tables */
.inline-container {
  display: inline-table;
  width: 100%;
}

.inline-container table {
  display: inline-block; /* Make the tables inline-block */
  width: 44%; /* Set width to 44% to fit two tables side by side */
  vertical-align: top; /* Align tables to the top */
  margin-right: 5%; /* Add some space between the tables */
  border-collapse: collapse;
}

.flex-container table, .flex-container th, .flex-container td {
  border: 1px solid black;
  padding: 5px;
}

/* Second div with block table */
.block-container {
  display: block;
  margin-top: 20px;
}

.qrCode {
  width: 120px!important;
  height: 120px!important;
  float: right;
  position: relative;
}

.qrCode img{
  position: relative;
  width: 100%;
  height: 100%;
}

.emptyArea {
  height: 50px;
}

.textRed {
  text-align: center;
  color: red;
}

`

module.exports = styles;