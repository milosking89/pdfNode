exports.template = (data) => {
  return `<div class="master-inner">
  <div>IBAN: ${data.iBanAccountNumber}</div>
  <div>Client name: ${data.clientName}</div>
  <div>Currency code: ${data.currencyCode}</div>
  </div>`
};