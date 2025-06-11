// src/studentGrades.ts
import { studentsData } from './studentsData';

// 1) enumerate your subjects as a string union
export const subjects = [
  "Software Engineering 1",
  "Signals",
  "Computer Networks 1",
  "Operations Research",
  "Algorithms",
  "Operating Systems 1"
] as const;
export type Subject = typeof subjects[number];

// 2) define a grade-object type
export type Grades = Record<Subject, number>;

// 3) build the mapping ID → Grades
export const studentGrades: Record<string, Grades> = Object.fromEntries(
  Object.keys(studentsData).map(id => {
    // for each subject, pick 0–100
    const grades: Grades = subjects.reduce((acc, subj) => {
      acc[subj] = Math.floor(Math.random() * 101);
      return acc;
    }, {} as Grades);

    return [id, grades];
  })
) as Record<string, Grades>;
