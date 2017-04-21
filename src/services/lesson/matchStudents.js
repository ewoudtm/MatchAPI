'use strict'

module.exports = function matchStudents(lesson, students) {
  let studentsArray = students.studentIds;
  let matchedStudents = [];
  const studentA = studentsArray[0];
  studentsArray = studentsArray.splice(0,1);
  const studentRotate = studentsArray[0];
  studentsArray = studentsArray.splice(0,1);
  studentsArray = studentsArray.push(studentRotate);
  studentsArray = studentsArray.unshift(studentA);
  const numberStudents = studentsArray.length;
  let i = 0;
  do {
    let match = [].push(studentsArray[i]);
    i += 1;
    if !!(i === numberStudents) {
      matchedStudents = matchedStudents.push(match);
      break;
    };
    match = match.push(studentsArray[i]);
    matchedStudents = matchedStudents.push(match);
    i += 1;
  } while i < numberStudents;
  return matchedStudents;
}
