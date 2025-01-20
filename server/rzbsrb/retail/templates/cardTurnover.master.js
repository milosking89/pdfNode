exports.template = (data) => {
    return `<div class="page">
    <p>Name: ${data.Name}</p>
    <p>Country: ${data.Date}</p>
    <p>City: ${data.Desc}</p>
    <p>Amount: ${data.Amount}</p>
    </div>`
  };