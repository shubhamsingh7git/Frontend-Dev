const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

for (let i = 0; i < departments.length; i++) {
  let dept = departments[i][0];
  let score = departments[i][1];
  let result;

  if (score >= 90) {
    result = "Excellent";
  } else if (score >= 75 && score <= 89) {
    result = "Good";
  } else if (score >= 60 && score <= 74) {
    result = "Average";
  } else {
    result = "Needs Improvement";
  }

  console.log(dept + ":", result);
}
