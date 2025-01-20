exports.template = (data) => {
  return `<div class="master-inner">
  <div class="master-inner-flex">
    <div class="master-inner-left">
      <table>
        <thead>
          <th>Statement Summary</th>
        </thead>
        <tbody>
          <tr>
            <td><div class="font20">${data.clientName}</div></td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>
              <div class="qrCode"><img
              src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png" alt="Furry white cat sitting on a wall"></div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
    <div class="master-inner-right">
      <table>
        <thead>
          <th>Statement Summary</th>
        </thead>
        <tbody>
          <tr>
            <td>Account type</td>
            <td>${data.typeOfCustomerTransaction}</td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>${data.currencyCode}</td>
          </tr>
          <tr>
            <td>IBAN number</td>
            <td>${data.iBanAccountNumber}</td>
          </tr>
          <tr>
            <td>Account balance</td>
            <td>${data.balance}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="clear"></div>
    <div>
      <div class="red">This account is considered correct if no objection is received by us within 15 days from the date of this statement</div><br>
      <div>Statement date: ${data.iBanAccountNumber}</div>
      <div>Account number: ${data.clientName}</div>
      <div>Account name: ${data.currencyCode}</div>
    </div>
  </div>`
};