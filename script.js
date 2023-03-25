let addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
  let element = document.createElement("li");
    addBtn.className = "item";
    li.append(addBtn);
});


let block = document.querySelector('#block');
block.addEventListener('click', function () {
    let div = document.createElement('div');
    div.append(addBtn);
    div.className = 'item__btns';
})