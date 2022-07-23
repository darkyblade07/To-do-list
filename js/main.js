
window.onload = function () {

    const saveBtn = document.getElementById('submitBtn');
    const ul = document.getElementById('ulIn');
    const input = document.getElementById('inputIn');
    const clear = document.getElementById('clearBtn');
    const text = document.getElementById('congratsText');

    let myToDo = []

    saveBtn.addEventListener("click", save);
    clear.addEventListener("click", clearLi);


    function save() {
        if (input.value === "") {

        } else {
            myToDo.push(input.value)
            render()
            input.value = ""
        }

    }

    function render() {
        let list = ""
        ul.innerHTML = ""
        myToDo.forEach(element => {
            list += `<li>
        ${element}
        </li>`
        });

        ul.innerHTML = list

    }

    function clearLi() {

        ul.innerHTML = ""
        text.innerHTML = `Congrats for finishing your day! Keep it up`
    }

}