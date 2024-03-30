document.getElementById("btn-load").addEventListener("click", loadTxt);

function loadTxt() {
  let request = new XMLHttpRequest();

  request.open("GET", "text.json", true);

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let result = JSON.parse(request.response);
      ;
    }
  };

  request.send();
}
