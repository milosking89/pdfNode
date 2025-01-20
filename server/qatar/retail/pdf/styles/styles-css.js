
const styles = `


* { margin: 0; padding: 0; box-sizing: border-box; }

    body, html {
    margin: 0;
    padding: 0;
    font-size: 12px;
    }

    .page {
        width: 100%;
        margin: auto;
    }

    .contentWrapper {
        height: auto;
    }

    .page-break {
        page-break-after: always;
    }
    table {
            width: 100%;
            border-collapse: collapse;
            page-break-inside: auto; /* Allow page breaks inside the table */
        }
    td, th {
            height: 50px; /* Set height for every cell */
            border: 1px solid #ddd; /* Optional: Adds a border for better visibility */
            padding: 8px; /* Optional: Adds padding inside the cells */
            text-align: left; /* Optional: Aligns text to the left */
    }
    thead {
            display: table-header-group; /* This ensures the thead is repeated on every page */
            background: #f2f2f2
        }
    tbody {
            display: table-row-group;
        }
    
    tr:nth-child(even) {
            background-color: #f2f2f2; /* Alternate row colors for better readability */
        }

/* Apply styles for screens higher than 1540px (laptops) */

@media screen and (min-width: 1540px) {
}

/* Apply styles for screens between 1200px and 1539px (laptops) */
@media (min-width: 1200px) and (max-width: 1539px) {

}

/* Apply styles for screens between 768px and 1199px (tablets) */
@media (min-width: 768px) and (max-width: 1199px) {
}

/* Apply styles for screens smaller than 768px (phones) */
@media (max-width: 767px) {
}

`;


module.exports = styles;

