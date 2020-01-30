const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const ibmNLU = new NaturalLanguageUnderstandingV1({
  version: app_config.NLU_IBM.version,
  authenticator: new IamAuthenticator({
    apikey: app_config.IBM_API_KEY,
  }),
  url: 'https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com/instances/f5731741-9a42-4d0d-b68f-a64df4c03741',
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
});

/*
 Docs: https://cloud.ibm.com/apidocs/natural-language-understanding/natural-language-understanding?code=node#analyze-text
 About Secuirty of Data: https://cloud.ibm.com/apidocs/natural-language-understanding/natural-language-understanding#data-collection
 */
async function analyzeWithIBM(text, callback){
    var params = {
        text: text,
        features: {
          concepts: {},
          keywords: {},
          emotion: {},
          entities: {},
          sentiment: {},
          categories: {},
          relations: {}

        }
      }
    try{
        var output = await ibmNLU.analyze(params);
        if(output.status == 200){
            callback("", output.result);
        }else{
            callback(output.result, "");
        }
    }catch(err){
        callback(err, "")
    }
}

async function kEIBM(text, keywords_limit, callback){
    var params = {
        text: text,
        features: {
          concepts: {},
          keywords: {
              limit: keywords_limit
          }
        }
    }
    try{
        var output = await ibmNLU.analyze(params);
        if(output.status == 200){
            callback("", output.result);
        }else{
            callback(output.result, "");
        }
    }catch(err){
        callback(err, "")
    }
}

exports.analyzeWithIBM = analyzeWithIBM;
exports.kEIBM = kEIBM;
