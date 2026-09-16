let weight = 52;
let height = 164;

let bmi = weight / ((height / 100) * (height / 100));

console.log("Your BMI is: ");

console.log(
  bmi < 16
    ? "Severe Thinness"
    : bmi < 17 && bmi > 16
      ? "Moderate Thinness"
      : bmi > 17 && bmi < 18.5
        ? "Mild THinness"
        : bmi > 18.5 && bmi < 25
          ? "Normal"
          : bmi > 25 && bmi < 30
            ? "Overweight"
            : bmi > 30 && bmi < 35
              ? "Obsese class 1"
              : bmi > 35 && bmi < 40
                ? "Obsese class 2"
                : "Obsese class 3",
);

obj = { a: 1, b: 2 };
