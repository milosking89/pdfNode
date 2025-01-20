exports.template = (header, master, details) => {
    return `
    <div class="container">
    <div class="content">
        ${header}
        ${master}
        <div class="details">${details}</div>
    </div>
    </div>`
};