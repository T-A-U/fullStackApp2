var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");

Array.from(thumbUp).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp': thumbUp
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'msg': msg
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

Array.from(thumbDown).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbDown': thumbDown
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

//make it so user takes year 


// let elementButton = document.querySelector("#year");
// button
document.getElementById("submitWish").addEventListener('click', (e)=> {
  e.preventDefault()
  
const input = document.getElementById("wish").value
sendWishesToDataBase(input)})
//jsutin helped with logic
function sendWishesToDataBase(input) {
  
  console.log('sendWishesToDataB function works')

  //fetch from other project, edit to needs
  fetch('profile', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // 'name': name,
      // 'msg': msg,
      // 'thumbDown': thumbDown
      // 'owner': owner,
      // "comment" : comment,
      // "game" : game
      'input' : input
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data,"done")
      // window.location.reload(true)
    })
  // fetch(`/getWishes/${input}`)
  //   .then(response => response.text()) 
  //   .then(data => {
  //     document.getElementById('game').innerText = `${data}`
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
  
}
//edit get zeldagames function to do something with wishlist



//Make/edit this project  to be a wishlist, the user creates the database/items in the database, user able to upload, edit, delete by title