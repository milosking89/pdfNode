exports.template = (data, svg) => {
  return `
  <div class="wrapper">
    <div class="inline-container">
    <table class="table-left">
        <thead>
          <th>Statement Summary</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="font20">${data.clientName}</div>
            </td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>
              <div id="base64Image" class="qrCode">${svg}</div>
            </td>
          </tr>
          </tbody>
    </table>
    <table class="table-right">
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

      <div class="block-container">
        <div class="textRed">
          <div>يعتبر هذا الكشف صحيحاً إذا لم يصلنا اعتراض خطي منكم خلال ١٥ يوماً من تاريخه</div>
          <div>This account is considered correct if no objection is received by us within 15 days from the date of this statement</div>
        </div><br>
        <div><span>تاريخ كشف الحساب</span>/Statement date: ${data.iBanAccountNumber}</div>
        <div><span>إسم الحساب</span>/Account number: ${data.clientName}</div>
        <div><span>تاريخ كشف الحساب</span>/Account name: ${data.currencyCode}</div>
    </div>
  </div>`
};