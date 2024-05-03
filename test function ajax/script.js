// function ajax
function getSetdata(methode, url, data) {
    let da
    let d
    xhr = new XMLHttpRequest();
    xhr.open(methode,url,true);
    if (methode == "POST") {
      xhr.setRequestHeader("content-type","application/json");
      d = JSON.stringify(data);
    }
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && (this.status >= 200 && this.status < 300)) {
        if (methode == "GET") {
           da = JSON.parse(this.responseText);
        } else {
          console.log("data envoie");
        }
      }
    };
    xhr.send(d);
  }
  
  let test = { val: "zak" };
  let url ="https://getpantry.cloud/apiv1/pantry/7cc2178f-af4a-4d0a-aef5-3eb69981b61a/basket/test";
  document.getElementById("test").addEventListener("click",()=>{
      getSetdata("GET",url);
  })