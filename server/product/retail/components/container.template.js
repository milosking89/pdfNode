exports.template = (header, footer, logo, master, details) => {
    return `
    <div class="container">
    <div class="logo">${logo}</div>
    <div class="header">${header}</div>
    ${master}
    <div class="details">${details}</div>
    <div class="footer">${footer}</div>
    </div>`
};