
import { Button } from '@mui/material';
import React, { useState } from 'react';

const JSONForm = (props) => {

  const _props = props;
  const [formattedJson, setFormattedJson] = useState('');

  const employees = [
    [
      {clientName: 'Test', balance: '100.00', iBanAccountNumber: '25000000000001', typeOfCustomerTransaction: 'Decription 123 Decription 123 Decription 123', currencyCode:'EUR'} 
    ],
    [
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123 Decription 123 Decription Decription 123 Decription 123 Decription 123Decription 123 Decription 123 Decription 123123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123 Decription 123 Decription Decription 123 Decription 123 Decription 123Decription 123 Decription 123 Decription 123123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '1000.00', creditAmount: '20000.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '20012343.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription Decription 123 Decription 123 Decription 123Decription 123 Decription 123 Decription 123123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123 Decription 123 Decription Decription 123 Decription 123 Decription 123Decription 123 Decription 123 Decription 123123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123 Decription 123 Decription Decription 123 Decription 123 Decription 123Decription 123 Decription 123 Decription 123123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123 Decription 123 Decription Decription 123 Decription 123 Decription 123Decription 123 Decription 123 Decription 123123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123 Decription 123 Decription Decription 123 Decription 123 Decription 123Decription 123 Decription 123 Decription 123123 Decription 123 Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    {processingDate: '20.10.2020', reference: '1234567890', orderingBeneficiaryAccountName: '25000000000001', transactionDesc: 'Decription 123 Decription 123 Decription 123', debitAmount: '100.00', creditAmount: '200.00'},
    ]
  ];

  const test = () => {
    const inputJson = employees;
    _props.handleJSON(employees);
    var prettyJson = JSON.stringify(inputJson);
    setFormattedJson(prettyJson);
  }

  const handleChange  = (event) => {
    const inputJson = event.target.value;

    _props.handleJSON(inputJson);

    try {
      setFormattedJson(inputJson);

    } catch (error) {
      // JSON parsing failed, keep the original input string
      setFormattedJson({"Error" : 0});
    }
  };

  const pretty = () => {
    const inputJson = formattedJson;

    try {
      const parsedJson = JSON.parse(inputJson);
      _props.handleJSON(parsedJson);
      
      const prettyJson = JSON.stringify(parsedJson, null, 2);
      setFormattedJson(prettyJson);

    } catch (error) {
      // JSON parsing failed, keep the original input string
      setFormattedJson(inputJson);
    }

  };

  return (
    <div className='formInner'>
      <h2>JSON FORM</h2>
      <Button onClick={test}>RANDOM JSON</Button>
      <textarea rows={10} cols={50} value={formattedJson} onChange={handleChange}></textarea>
      <Button onClick={pretty}>PRETTY JSON</Button>
    </div>
  );
};

export default JSONForm;
