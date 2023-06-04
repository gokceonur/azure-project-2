const db = require("./databaseFunctions");

const request = require("request");

let key = "95424e5c4fa249bd853d7a962572c09a";
let endpoint = "https://computer-vision-project2.cognitiveservices.azure.com/";

var uriBase = endpoint + "vision/v3.2/analyze";

let azureVision = (imageUrl, callback) => {
  //     const imageUrl =
  //   "https://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg";

  // Request parameters.
  const params = {
    visualFeatures: "Categories,Description,Color",
    details: "",
    language: "en",
  };

  const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": key,
    },
  };

  request.post(options, (error, response, body) => {
    if (error) {
      console.log("Error: ", error);
      return;
    }
    let jsonResponse = JSON.stringify(JSON.parse(body), null, "  ");
    console.log("JSON Response\n");
    console.log(jsonResponse);
    let captions = JSON.parse(jsonResponse).description.captions;
    callback(captions);
    db.writeData(imageUrl, captions[0].text, captions[0].confidence);
  });
};

module.exports = { azureVision: azureVision };

// azureVision(
//   "https://learn.microsoft.com/azure/cognitive-services/computer-vision/media/quickstarts/presentation.png"
// );
