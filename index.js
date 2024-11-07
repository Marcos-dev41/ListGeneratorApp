let inputItem = document.getElementById("newItems");
let write = document.getElementById("list1");
let list;
let listWrite;
const storagekey ="newItems"

function condition() {
  if (inputItem.value === "") {
    alert("Input box is empty");
  } else {
    let NT = inputItem.value;
    list = document.createElement("ul");
    listWrite = document.createElement("li");
    listWrite.textContent = NT;
    list.append(listWrite);
    write.appendChild(list);
    console.log(inputItem.value);
    inputItem.value = "";
  }
}

function removeItems() {
  let p = document.querySelector("ul");
  let q = document.querySelector("li:last-child");
  p.remove(q);
}

function saveItems(){
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storagekey,stringItems)

}
function loadItems(){
  const oldItems = localStorage.getItem(storagekey)
  if(oldItems) items = JSON.parse(oldItems)
  condition()

}
