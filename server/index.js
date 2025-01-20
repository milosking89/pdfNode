const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const actionError = require('./common/error.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
  origin: 'http://localhost:3000',
  origin: '*'
}));

const fs = require('fs');

app.post('/api/rzbsrb/retail/:actionName', (req, res) => {
  const actionName = req.params.actionName;

  switch(actionName) {
    case 'accountTurnover':
      const action1 = require('./rzbsrb/retail/accountTurnover.js');
      action1.execute(req, res);
      break;
    case 'cardTurnover':
      const action2 = require('./rzbsrb/retail/cardTurnover.js');
      action2.execute(req.body, res);
      break;
      case 'nena':
        const action3 = require('./rzbsrb/retail/nena.js');
        action3.execute(req, res, req.body);
        break;
      case 'test2':
        const action4 = require('./rzbsrb/retail/test2.js');
        action4.execute(req, res, req.body);
      
        break;
    default:
      res.status(404).send('Action not found');
  }
});

app.post('/api/product/retail/:actionName', (req, res) => {
  const actionName = req.params.actionName;

  switch(actionName) {
    case 'accountTurnover':
      const action1 = require('./product/retail/accountTurnover.js');
      action1.execute(req, res);
      break;
    default:
      res.status(404).send('Action not found');
  }
});

app.post('/api/qatar/corporate/pdf/:actionName', (req, res) => {

  const actionName = req.params.actionName;

  try {
    const actionPath = require('./qatar/corporate/pdf/' + actionName + '.js');
    actionPath.execute(req, res);
  } 
  catch (error) {
    // Log the error to a file
    const errorMessage = `${new Date().toISOString()} - Error: ${error.message}\n`;
    fs.appendFileSync('error.log', errorMessage);

    actionError.execute(req, res, errorMessage);
  }
});

app.post('/api/qatar/retail/pdf/:actionName', (req, res) => {

  const actionName = req.params.actionName;

  if (isTaskRunning) {
    return res.status(429).send('Another task is currently running. Please wait.');
  } 

  isTaskRunning = true; // Set flag to indicate the task is running

  try {

    const actionPath = require('./qatar/retail/pdf/' + actionName + '.js');
    executeFnc(actionPath.execute(req, res), actionName);

  } 
  catch (error) {
    // Log the error to a file
    const errorMessage = `${new Date().toISOString()} - Error: ${error.message}\n`;
    fs.appendFileSync('error.log', errorMessage);

    actionError.execute(req, res, errorMessage);
  }
});

app.post('/api/qatar/corporate/xls/:actionName', (req, res) => {
  
  const actionName = req.params.actionName;

  try {
    const actionPath = require('./qatar/corporate/xls/' + actionName + '.js');
    actionPath.execute(req, res);
  } 
  catch (error) {
    // Log the error to a file
    const errorMessage = `${new Date().toISOString()} - Error: ${error.message}\n`;
    fs.appendFileSync('error.log', errorMessage);

    actionError.execute(req, res, errorMessage);
  }
});

app.get('/api/getConfig', (req, res) => {

  const action = require('./getConfig.js');
  action.execute(req, res);

});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});



let isTaskRunning = false; // Flag to track if the task is running

async function executeFnc(fnc, actionName) {

  const startProcess = `Starting task time: ` + new Date();
  // Simulate a long-running task
  await new Promise((resolve) => {
      setTimeout(() => {    
          const endProcess = `Finished task time: ` + new Date();
          isTaskRunning = false;
          resolve(fs.appendFileSync('execute.log', actionName + ": " + startProcess + "||" + endProcess));
      }, 2000); // Simulates a delay of 5 seconds
  });

}