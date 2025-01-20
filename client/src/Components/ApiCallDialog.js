import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import config from './web.config';

function ApiCallDialog(props) {
  const [open, setOpen] = useState(false);

  const [bankName, setBankName] = useState('');
  const [banks, setBanks] = useState([]);
  const [envoirment, setEnvoriment] = useState('');
  const [templateName, setTemplateName] = useState('');
  const [url, setUrl] = useState('');
  const [extension, setExtension] = React.useState('');

  const _props = props;
  let NUM_REQUESTS = 1;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetRadio = (event) => {
    setExtension(event.target.value);
  };

  const handleCreate = async (event) => {
    event.preventDefault();

    //var _url = (`${config.apiBaseUrl}` + bankName + '/' + envoirment + '/' + extension + '/' + templateName + '/');
    var _url = (`${config.apiBaseUrl}` + "Accounts" + '/'  + "getAccountStatement" + '/');
    if (!_props.jsonValue) {
      _props.setContent({Message: "Empty json!"});
      handleClose();
      return;
    }

    try {
      const response = await Axios.post(_url, _props.jsonValue, { } );

      _props.setContent(response.data);
      handleClose();
    }
    catch {
      _props.setContent({ Success: false });
      handleClose();
    }
  };

  const handleTest = async (event) => {
    event.preventDefault();

    if (!_props.jsonValue) {
      _props.setContent({Message: "Empty json!"});
      handleClose();
      return;
    }
    else {

      var name = prompt("Number of parallel calls")
      if (name  == null || name  == "") {
        name = "User cancelled the prompt.";
      } else {
        NUM_REQUESTS = name;
        handleClose();
        runLoadTest();
      }

    }
  };

  async function runLoadTest() {
    const requests = [];
  
    for (let i = 0; i < NUM_REQUESTS; i++) {
      requests.push(makeRequest());
    }
  
    await Promise.all(requests);
    console.log(`Completed ${NUM_REQUESTS} requests`);
  }

  async function makeRequest() {
    //var _url = (`${config.apiBaseUrl}` + bankName + '/' + envoirment + '/' + extension + '/' + templateName + '/');

    var _url = (`${config.apiBaseUrl}` + "Accounts" + '/'  + "getAccountStatement" + '/');

    try {
      const response = await Axios.post(_url, _props.jsonValue, { headers } );
      if(response.data.Content) {
        console.log(`Status: ${response.status}, Result: ${response.data.Success}`);
      }
      else {
        console.log(`Error: ${response.status}, Result: ${response.data.Content}`);
      }

    } catch (error) {
      console.error(`Error: ${error.response ? error.response.status : error.message}`);
    }
  }

  useEffect(() => {

    const url = (`${config.apiBaseUrl}` + 'getConfig/');

    try {
      Axios.get(url, { headers } ).then((response) => {
        setBanks(response.data);
      });
    }
    catch {
      _props.setContent({ Success: false });
      handleClose();
    }
  },[]);

  const handleChange = (event) => {
    setEnvoriment(event.target.value);
  };
  const handleChangeUrl = (event) => {
    setUrl(event.target.value);
  };

  return (
    <>
      <div>
        <Button className = 'btnShowDialog' onClick={handleClickOpen}>
          Create api call
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>API data</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <hr></hr>
        <InputLabel id="demo-simple-select-label">Bank name</InputLabel>
        <Select 
              value={bankName} 
              onChange={(event) => setBankName(event.target.value)}              
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="BankName"
        >
               {banks.map((item, index) => {
                // Extract the key and value dynamically from each object
                const key = Object.keys(item)[0];
                const value = item[key];
                return (<MenuItem key={index} value={value}>{key}</MenuItem>
        );
      })}
    </Select>
    <p></p>
    <InputLabel id="demo-simple-select-label">Retail/Corporate</InputLabel>
        <Select
              value={envoirment}
              onChange={handleChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Algorithm"
        >
          <MenuItem value={"retail"}>Retail</MenuItem>
          <MenuItem value={"corporate"}>Corporate</MenuItem>
        </Select>
        <RadioGroup
        id="radioGroup"
        aria-label="gender"
        name="gender1"
        value={extension}
        onChange={handleSetRadio}
      >
        <FormControlLabel value="pdf" control={<Radio />} label="PDF" />
        <FormControlLabel value="xls" control={<Radio />} label="XLS" />
      </RadioGroup>
             <TextField
              onChange={(event) => setTemplateName(event.target.value)}
              value={templateName}
              autoFocus
              margin="dense"
              id="templateName"
              label="TemplateName"
              type="name"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChangeUrl}
              value={ bankName !== '' ? 'http://localhost:5000/api/' + bankName + '/' + envoirment + '/' + extension + '/' + templateName + '/' : ''}
              autoFocus
              margin="dense"
              id="url"
              label="URL"
              type="name"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleCreate}>Create Call</Button>
            <Button onClick={handleTest}>Test API</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default ApiCallDialog;