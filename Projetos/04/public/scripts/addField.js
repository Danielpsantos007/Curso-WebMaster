// Procurar o botão
document.querySelector("#add_time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField () {
    // Duplicar os Campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function (field) {
        field.value = ""
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}