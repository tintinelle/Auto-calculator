"use strict";

const carModels = document.querySelectorAll('option[name="carModel"]');
// console.log(carModels);

const engines = document.querySelectorAll('input[name="engine"]');
// console.log(engines);

const driveTypes = document.querySelectorAll('input[name="drive"]');
// console.log(driveTypes);

const carAge = document.querySelectorAll('option[name="age"]');
// console.log(carAge);

const mileage = document.querySelector('input[name="mileage"]');
// console.log(mileage);

const additionalElements = document.querySelectorAll('input[name="additional"]');
// console.log(additionalElements);

let totalPrice = 0;
const button = document.getElementById('calculate');


const countPrice = () => {
    // getCarModelValue();
    // getEngineValue();
    // getDriveTypelValue();
    // getMileageValue();
    // getCarAgeValue();
    // getAdditionalElementsValue();
    const mileageValue = mileage.value;
    console.log(mileageValue);

    for (let i = 0; i < carModels.length; i++) {
        if (carModels[i].selected == true) {
            totalPrice += +carModels[i].value;
        }
    }

    for (let i = 0; i < engines.length; i++) {
        if (engines[i].checked) {
            totalPrice += +engines[i].value;
        }
    }

    for (let i = 0; i < driveTypes.length; i++) {
        if (driveTypes[i].checked) {
            totalPrice += +driveTypes[i].value;
        }
    }

    for (let i = 0; i < carAge.length; i++) {
        if (carAge[i].selected == true) {
            totalPrice *= +carAge[i].value;
        }
    }

    if (+mileageValue >= 150000) {
        totalPrice *= 0.7;
    }
    else if (+mileageValue >= 100000 && +mileageValue < 150000) {
        totalPrice *= 0.8;
    }
    else if (+mileageValue >= 50000 && +mileageValue < 100000) {
        totalPrice *= 1;
    }
    else if (+mileageValue >= 30000 && +mileageValue < 50000) {
        totalPrice *= 1.1;
    }
    else {
        totalPrice *= 1.2;
    }

    for (let i = 0; i < additionalElements.length; i++) {
        if (additionalElements[i].checked == true) {
            totalPrice += +additionalElements[i].value;
        }
    }

    alert(totalPrice);
}


button.addEventListener('click', countPrice);
