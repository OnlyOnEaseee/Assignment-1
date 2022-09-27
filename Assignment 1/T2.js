// T.2

let height = prompt('Height (cm): ');

let weight = prompt('Weight (kg): ');

let BMI = weight * 10000 / Math.pow(height, 2);

let bodyShape;

if(BMI < 10) {
	bodyShape = null;
} else if(BMI <= 18) {
	bodyShape = 'UnderWeight';
} else if(BMI <= 25) {
	bodyShape = 'Normal Range';
} else if(BMI <= 29) {
	bodyShape = 'Overweight';
} else if(BMI <= 64) {
	bodyShape = 'Obese';
} else {
	bodyShape = 'Unknown Body Shape';
    BMI = 'Unknown';
};


alert(`${bodyShape}, BMI: ${BMI}`);