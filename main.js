const convertBtn = document.getElementById("convert-btn");
const inputConvert = document.getElementById("input-convert");
let meterFeet = document.getElementById("meter_feet");
let vol = document.getElementById("vol");
let mass = document.getElementById("mass")





convertBtn.addEventListener('click', function() {

    // FOR METER AND FEET CONVERSION (LENGTH)
    const meter = (inputConvert.value * 3.281 * 100) / 100;
    const feet = (inputConvert.value / 3.281 * 100) /100;
   meterFeet.innerHTML = `${inputConvert.value} meters = ${meter.toFixed(3)} feet | ${inputConvert.value} feet = ${feet.toFixed(3)} meters`;

    // FOR LITERS AND GALLONS CONVERSION (VOLUME)
    const liter = (inputConvert.value * 0.264 * 100) / 100;
    const gallon = (inputConvert.value / 0.264 * 100) /100;
    vol.innerHTML = `${inputConvert.value} liters = ${liter.toFixed(3)} gallons | ${inputConvert.value} gallons = ${gallon.toFixed(3)} liters`;

    // FOR KILOGRAMS AND POUND (MASS)
    const kilogram = (inputConvert.value * 2.204 * 100) / 100;
    const pounds = (inputConvert.value / 2.204 * 100) /100;
    mass.innerHTML = `${inputConvert.value} kilograms = ${kilogram.toFixed(3)} pounds | ${inputConvert.value} pounds = ${pounds.toFixed(3)} kilograms`;
})



