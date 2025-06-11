const { writeFileSync } = require("fs");
const { studentsData } = require("../students-list");
const { getSpecialGrades } = require("../students-data");

const dataset:any = {};

Object.keys(studentsData).forEach((id) => {
    dataset[id] = getSpecialGrades(id);
});

// Prepare the output as a hardcoded TS file content
const fileContent = `// Hardcoded dataset generated on ${new Date().toLocaleString()}
export const gradesData = ${JSON.stringify(dataset, null, 2)};
`;

writeFileSync("hardcoded-grades.ts", fileContent, { encoding: "utf-8" });
console.log("Hardcoded grades dataset generated in hardcoded-grades.ts");