let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ");
let wordCount = words.length;

let lower = feedback.toLowerCase();
let negative = lower.includes("bad") || lower.includes("poor");

console.log("Word Count:", wordCount);
console.log(negative ? "Needs Improvement" : "Positive Feedback");
