exports.template = (header, footer, master, details) => {
    return `
    <div class="container">
    <div class="logo"></div>
    <div class="header">${header}</div>
    ${master}
    <div class="details">${details}</div>
    <div class="footer">${footer}</div>
    </div>`
};