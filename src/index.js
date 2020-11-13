const header = document.getElementById('changing-header')

const textValue = document.getElementById('textbox')
const colorOption = document.getElementById('selector')
let button = document.getElementById('submit')


button.addEventListener("click", function() {
    console.log(textValue.value)
    console.log(colorOption.value)
})