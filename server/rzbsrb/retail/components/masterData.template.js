exports.template = (data) => {
  return `<div class="master-inner">
  <div>Name: ${data.name}</div>
  <div>Surname: ${data.surname}</div>
  <div>Country: ${data.country}</div>
  <div>City: ${data.city}</div>
  <div>Amount: ${data.amount}</div>
  </div>`
};