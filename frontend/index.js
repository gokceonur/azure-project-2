function getWeather() {
  var input = document.getElementById("input").value;
  var url = "http://localhost:3000/vision?imageUrl=" + input;
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var output = document.getElementById("output");
      output.innerHTML = data.result[0].text;
    } else {
      alert("Error getting vision data: " + xhr.status);
    }
  };
  xhr.send();
}
