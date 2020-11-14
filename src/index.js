const header = document.getElementById('changing-header')

const textValue = document.getElementById('textbox')
const colorOption = document.getElementById('selector')
let button = document.getElementById('submit')


button.addEventListener("click", function() {
    header.innerHTML = textValue.value
    header.style.color = colorOption.value
    console.log(textValue.value)
    console.log(colorOption.value)
})


/*

Next steps:
    - Set up driver environment
    - Write step defs
    - Implement step def fuctionality
    - Write article breaking it down

*/