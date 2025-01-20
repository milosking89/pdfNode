exports.template = (data) => {
  return `<div class="master-inner">
  <div class="master-inner-flex">
    <div class="master-inner-left">
      <div class="master-inner-left-text">
        <div class="red">This account is considered correct if no objection is received by us within 15 days from the date of this statement</div>
        <div><b>STATEMENT DATE:</b></div>    
      </div>
    </div>
    <div class="master-inner-right">
      <table>
        <thead>
          <th>Statement Summary</th>
        </thead>
        <tbody>
          <tr>
            <td>Card Number</td>
            <td>${data.typeOfCustomerTransaction}</td>
          </tr>
          <tr>
            <td>Credit Limit</td>
            <td>${data.currencyCode}</td>
          </tr>
          <tr>
            <td>Available Credit Balance</td>
            <td>${data.iBanAccountNumber}</td>
          </tr>
          <tr>
            <td>Amount Due</td>
            <td>${data.balance}</td>
          </tr>
          <tr>
            <td>Payment Due Date</td>
            <td>${data.balance}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="clear"></div>
    <div class="master-inner-left-bottom">
      <table>
        <thead>
          <th>Opening Balance</th>
          <th>Purchases</th>
          <th>Cash Withdrawn</th>
          <th>Fee / Charges</th>
          <th>Payment Received</th>
          <th>Closinng Balance</th>
        </thead>
        <tbody>
          <tr>
            <td>Card Number</td>
            <td>Test 123</td>
            <td>Credit Limit</td>
            <td>1234</td>
            <td>Available Credit Balance</td>
            <td>AAAAAAAAAAAAA</td>
          </tr>
          </tbody>
        </table>
      </div>
  </div>`
};