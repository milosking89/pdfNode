exports.template = (header, master, details) => {
    return `
    <div class="container">
    <div class="content">
        ${header}
        ${master}
        ${details}
    </div>
    </div>`
};