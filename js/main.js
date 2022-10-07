var bookmarkName = document.getElementById('bookmark-name')
var websiteUrl = document.getElementById('website-url')
var submit = document.getElementById('submit')
var deleteBut = document.getElementById('delete-but')
var my_Websites = document.getElementById('myWebsites')
var myArray= []

if (localStorage.getItem('myWebsites')!=null) {
  myArray = JSON.parse( localStorage.getItem('myWebsites')) 
  retrieve()
}
function Add() {
  var website = {
    Name : bookmarkName.value,
    url : websiteUrl.value
  }
  myArray.push(website);
  localStorage.setItem('myWebsites' , JSON.stringify(myArray));
  retrieve();
  clear() 
}

function clear() {
  bookmarkName.value = ''
  websiteUrl.value = ''
}

function retrieve() {
  var trs =''
  for (var i = 0; i < myArray.length; i++) {
    trs += ` <div class="col-12 my-1 px-4 bg-grad">
    <div class="d-flex align-items-center pb-5 pt-4 my-1 ">
        <h4 class="w-25 pt-4">${myArray[i].Name}</h4> 
        <a href="${myArray[i].url}" target="_blank"><button class="btn btn-primary" >Visit</button></a>
        <button id="delete-but" onclick = "deleteWebsite(${i})" class="ms-2 btn text-white delete" >Delete</button>
    </div>
</div>`
  }
  my_Websites.innerHTML = trs
}

function deleteWebsite(indexeOfWebsite) {
    myArray.splice(indexeOfWebsite , 1)
    localStorage.setItem('myWebsites' , JSON.stringify(myArray));
    retrieve();
}