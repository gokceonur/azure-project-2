const axios = require('axios')

let translator = async (text) => {

    let keys = {
        "subscriptionKey": '829793b84d084464aa3d5df9ca691026',
        "endpoint": 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=tr',
        "region": 'westeurope'
    }

    let data = JSON.stringify([
      {
        "text": text
      }
    ]);
    
    let config = {
      url: keys.endpoint,
      headers: { 
        'Ocp-Apim-Subscription-Key': keys.subscriptionKey, 
        'Ocp-Apim-Subscription-Region': keys.region, 
        'Content-type': 'application/json'
      },
      data : data
    };

    const res = await axios.post(keys.endpoint, data, config);
    console.log(JSON.stringify(res.data));
    return(res.data[0].translations[0].text);
    
}

exports.translator = translator