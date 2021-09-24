const AWSAppSync = require('aws-appsync')
const gql = require('graphql-tag')
require('cross-fetch/polyfill')

const config = {
    url: process.env.API_CLOTHINGFORMEJFL_GRAPHQLAPIENDPOINTOUTPUT,
    region: process.env.AWS_REGION,
    auth: {
      type: 'AWS_IAM',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        sessionToken: process.env.AWS_SESSION_TOKEN,
      },
    },
    disableOffline: true,
  }
  
  const API = new AWSAppSync.AWSAppSyncClient(config)

const PredictionFunctions = {

}

// console.log("running scraper");
// console.log("STEPS", StepsToRun);
FunctionsToRun = StepsToRun;
// FunctionResults = {};
RunSuccess = "";
LastFunctionRan = "";
for (let x = 0; x < FunctionsToRun.length; x++) {
  let currentFunction = FunctionsToRun[x].Function;
  let givenVariables = FunctionsToRun[x].Variables;
  let additionalVariables = FunctionsToRun[x].AdditionalVariables;
  let PreviousFunction = FunctionsToRun[x].PreviousFunction;
  let DynamicVariables = FunctionResults[PreviousFunction];
  let CurrentVariables;
  if (givenVariables) {
    // console.log("GOT GIVEN VARIABLES");
    CurrentVariables = { ...givenVariables, ...additionalVariables };
  } else if (DynamicVariables) {
    CurrentVariables = { ...DynamicVariables, ...additionalVariables };
  } else {
    CurrentVariables = { ...additionalVariables };

    if (!CurrentVariables) {
      prompt("Please Get Needed Variables Before Running: " + currentFunction);
      break;
    }
  }
  if (CurrentVariables) {
    // console.log("GOT CURRENT VARIABLES");
    // console.log(CurrentVariables);
    console.log(currentFunction);
    var result = ScrapeFunctions[currentFunction](CurrentVariables);
    if (!result.Passed) {
      RunSuccess = false;
      LastFunctionRan = currentFunction;
      break;
    }
    FunctionResults[currentFunction] = {
      ...result,
    };
    // console.log("ReSULTS RUN", { ...result });
  }
  RunSuccess = true;
  LastFunctionRan = currentFunction;
  chrome.storage.local.set({ ...FunctionResults, LastFunctionRan, RunSuccess });
}

console.log("Finished Sraper Functions");
console.log(FunctionResults);
