
$(".numeros").click((e) => {
    console.log(e.target.innerText)
    e = $("#display")[0].value += e.target.innerText
    document.getElementById('display').style.backgroundColor = 'yellow'


})


$(".ce").click((e) => {
    $("#display")[0].value = ""
    document.getElementById('display').style.backgroundColor = 'white'
})

$(".operadoresSuma").click((e) => {
    e = $("#display")[0].value += e.target.innerText
    if (e.includes("+")) {
        document.getElementById('display').style.backgroundColor = 'yellow'
    }

    if (e = e.includes("++")) {
        document.getElementById('display').style.backgroundColor = 'red'
    }



})

$(".operadores").click((e) => {
    e = $("#display")[0].value += e.target.innerText
    if (e.includes("-")) {
        document.getElementById('display').style.backgroundColor = 'yellow'
    }
    if (e = e.includes("--")) {
        document.getElementById('display').style.backgroundColor = 'red'

    }

})

$(".simbolos").click(() => {
    var resultado = eval($("#display")[0].value)

    if (!isNaN(resultado)) {

        $("#display")[0].value = resultado;
        document.getElementById('display').style.backgroundColor = 'green'
    } else {
        document.getElementById('display').style.backgroundColor = 'red'
        alert("Numero Invalido")
    }

})




