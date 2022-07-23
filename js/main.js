const input = document.getElementById('inputIn');
const saveBtn = document.getElementById('submitBtn');
let myToDo = []

saveBtn.addEventListener("click", save());

function save() {
   console.log('working')
    myToDo.push(input.value)
    console.log('saving...')
    render()
    input.value = ""
}

function render() {
    const ul = document.createElement('ul')
    let list = ""
    myToDo.forEach(element => {
        list += `<li>
        ${element}
        </li>`
    });

    ul.innerHTML = list

}

