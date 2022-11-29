document.addEventListener("DOMContentLoaded", function(){

  let form = document.querySelector("form")
  form.addEventListener("submit", function(e){
    e.preventDefault();
    doList(e.target.new.value)
    form.reset()
  })


})

function doList(list) {
let li = document.createElement("li")
let btn = document.createElement("button")
li.textContent = `${list}`
btn.textContent = "X"
document.querySelector("#tasks").appendChild(li)
li.appendChild(btn)
btn.addEventListener("click", deletebtn)
}

function deletebtn(e) {
  e.target.parentNode.remove()
}