import React, { useState, useEffect } from 'react';
import JSONForm from './JSONForm';
import Header from './Header';
import Footer from './Footer';
import ApiCallDialog from './ApiCallDialog';
import { Button } from '@mui/material';


const Controller = (props) => {

  const [jsonValue, setJsonValue] = useState("");

  const [jsonForm, setJsonForm] = useState(true);
  const [error, setError] = useState("");
  const [base64Content, setBase64Content] = useState("");
  const [htmlContent, setHtmlContent] = useState("");

  const [dialogOpen, setDialogOpen] = useState(true);

  const handleHtmlContent = (e) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const handleBack = (e) => {
    setError("");
    setJsonValue("")
    setJsonForm(true);
  };

const handleContent = (e) => {

  var _type = 'application/pdf';

  if (base64Content.startsWith("UEs")) {
    _type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  }

  const binaryData = atob(base64Content);

  // Create an array buffer from binary data
  const arrayBuffer = new ArrayBuffer(binaryData.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }

  // Create a Blob from array buffer
  const blob = new Blob([arrayBuffer], { type: _type });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Open the URL in a new tab
  window.open(url, '_blank');

};


const handleClose = () => {
  setDialogOpen(false);
};

const setContent = (data) => {
  if (data.Success) {
    setBase64Content(data.Content);
    setHtmlContent(data.Html);
    setJsonForm(false);
  }
  else {
    setJsonForm(true);
    if (data) {
      setError(data.Message);
    }
    else {
      setError("Error calling web api! Please check connection or server error.log");
    }
  }
};

const handleJSON = (data) => {
  setJsonValue(data);
};

  return (
    <div className='page'>
    <Header></Header>
    {!jsonForm && <button className="btnBack" onClick={handleBack}>back</button>}
    <div className='pageInner'>
       {dialogOpen && <ApiCallDialog handleClose={handleClose} setContent={setContent} jsonValue={jsonValue} />}
       {jsonForm && 
       <div className='formContainer'>
          <div className='formWrapper middle'>
          <div className='redText'>{error}</div>
          <JSONForm handleJSON={handleJSON}></JSONForm>
        </div>
      </div>}
      {!jsonForm && 
      <div className='formContainer'>
        <div className='formWrapper'>
            <div className='formInner'>
              <h2>BASE64</h2>
              <textarea value={base64Content}></textarea>
              <p><Button onClick={handleContent} >SHOW Content</Button></p>
            </div>
          </div>
          <div className='formWrapper'>
            <div className='formInner'>
              <h2>HTML</h2>
              <textarea value={htmlContent}></textarea>
              <p><Button onClick={handleHtmlContent} >SHOW HTML</Button></p>
            </div>

          </div>
          
      </div>}
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Controller;