
// async function onSearch() {
//     var x = document.getElementById("handle").elements.item(0).value;
//     const API_ENDPOINT = 'https://codeforces.com/api/user.info';
//     const response = await fetch(`${API_ENDPOINT}?handles=${x}`);
//     const data = await response.json();
//     document.querySelector("#hname").innerHTML=data.result[0].handle;
// }

function onSearch() {
    const API_ENDPOINT = 'https://codeforces.com/api/user.info';

async function getHandleData(handle) {
  const response = await fetch(`${API_ENDPOINT}?handles=${handle}`);
  const data = await response.json();
  return data;
}

// var handle = document.getElementById('handle').elements.value;
var handle=document.getElementById('handle').value;
getHandleData(handle).then(data => {
  const handleName = data.result[0].handle;
  document.getElementById('hname').innerHTML = handleName;
  document.getElementById('rank').innerHTML =  data.result[0].rank;
  document.getElementById('ratings').innerHTML = "Rating: "+ data.result[0].rating+ "  (Max: "+data.result[0].maxRating+")";
});
}
// const API_ENDPOINT = 'https://codeforces.com/api/user.info';

// async function getHandleData(handle) {
//   const response = await fetch(`${API_ENDPOINT}?handles=${handle}`);
//   const data = await response.json();
//   return data;
// }

// const handle = document.getElementById('handle').elements[0].value;
// getHandleData(handle).then(data => {
//   const handleName = data.result[0].handle;
//   document.getElementById('hname').innerHTML = handleName;
// });