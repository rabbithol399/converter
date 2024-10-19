/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputData = document.getElementById("quantity")
let convertBtn = document.getElementById("convert-btn")
let lengthRes = document.getElementById("length-res")
let volumeRes = document.getElementById("volume-res")
let massRes = document.getElementById("mass-res")

convertBtn.addEventListener("click", function() {
    transferLength()
    transferVol()
    transferMass()
})

function transferLength () {
    let numberfied = Number(inputData.value);
    result = numberfied * 3.281
    versa = numberfied * 0.3048
    lengthRes.innerHTML = `${numberfied} Meters = ${result} feet |
         ${numberfied} feet = ${versa.toFixed(3)} meters`
    }
function transferVol () {
    let numberfied = Number(inputData.value);
    result = numberfied * 0.264
    versa = numberfied * 3.78
    volumeRes.innerHTML = `${numberfied} Liters = ${result.toFixed(3)} Gallons |
         ${numberfied} Gallons = ${versa.toFixed(3)} Liters`
}

function transferMass () {
    let numberfied = Number(inputData.value);
    result = numberfied * 2.204
    versa = numberfied * 0.453
    massRes.innerHTML = `${numberfied} Kilograms = ${result.toFixed(3)} Pounds |
         ${numberfied} Pounds = ${versa.toFixed(3)} Kilograms`
}