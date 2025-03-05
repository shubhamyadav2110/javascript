const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get height and weight values
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');

    // Validate height
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height: ${height}`;
    }
    // Validate weight
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight: ${weight}`;
    }
    // Calculate BMI
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
    }
});