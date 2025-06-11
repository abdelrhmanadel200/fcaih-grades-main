import { studentsData } from "./students-list"

export { studentsData }

// تعديل قائمة المواد الدراسية
export const subjects = [
  "Software Engineering 1",
  "Signals",
  "Computer Networks 1",
  "Operations Research",
  "Algorithms",
  "Operating Systems 1",
]

// Function to generate random grades for a student
function generateRandomGrades(): Array<{ subject: string; grade: number }> {
  return subjects.map((subject) => ({
    subject,
    grade: Math.floor(Math.random() * 51) + 50, // Random grade between 50-100
  }))
}

// Special grades for specific students
export function getSpecialGrades(studentId: string): Array<{ subject: string; grade: number }> {
  // Special cases for specific students
  if (studentId === "20230374") {
    // عمر عاطف احمد هاشم
    return [
      { subject: "Software Engineering 1", grade: 95 },
      { subject: "Signals", grade: 92 },
      { subject: "Computer Networks 1", grade: 88 },
      { subject: "Operations Research", grade: 90 },
      { subject: "Algorithms", grade: 94 },
      { subject: "Operating Systems 1", grade: 87 },
    ]
  }

  if (studentId === "20230381") {
    // عمر وائل محمد عكاشة محمود
    return [
      { subject: "Software Engineering 1", grade: 97 },
      { subject: "Signals", grade: 95 },
      { subject: "Computer Networks 1", grade: 91 },
      { subject: "Operations Research", grade: 93 },
      { subject: "Algorithms", grade: 96 },
      { subject: "Operating Systems 1", grade: 89 },
    ]
  }

  // Special case for 20230251 and 20230313 - replace Signals with Math 2
  if (studentId === "20230251" || studentId === "20230313") {
    return [
      { subject: "Software Engineering 1", grade: Math.floor(Math.random() * 51) + 50 },
      { subject: "Math 2", grade: Math.floor(Math.random() * 51) + 50 },
      { subject: "Computer Networks 1", grade: Math.floor(Math.random() * 51) + 50 },
      { subject: "Operations Research", grade: Math.floor(Math.random() * 51) + 50 },
      { subject: "Algorithms", grade: Math.floor(Math.random() * 51) + 50 },
      { subject: "Operating Systems 1", grade: Math.floor(Math.random() * 51) + 50 },
    ]
  }

  // Special case for 20230316 - all grades low but above 50, Signals is 48
  if (studentId === "20230316") {
    return [
      { subject: "Software Engineering 1", grade: 87 },
      { subject: "Signals", grade: 48 },
      { subject: "Computer Networks 1",grade: 89 },
      { subject: "Operations Research",grade: 83 },
      { subject: "Algorithms", grade: 62 },
      { subject: "Operating Systems 1", grade: 74 },
    ]
  }

  // Special case for 20230335 - all grades low but above 50, Signals is 40
  if (studentId === "20230335") {
    return [
      { subject: "Software Engineering 1",grade: 80 },
      { subject: "Signals", grade: 40 },
      { subject: "Computer Networks 1", grade: 92 },
      { subject: "Operations Research", grade: 58 },
      { subject: "Algorithms", grade: 73},
      { subject: "Operating Systems 1", grade: 70 },
    ]
  }

  // For all other students, generate random grades
  return generateRandomGrades()
}
