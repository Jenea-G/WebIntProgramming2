const student = {
  id: 1,
  name: "Kate",
  programm: "Web design",
  semester: 3,
  bio: "personal info",
};

function getStudentData(id) {
  const promise = new Promise(resolve, (reject) => {
    if (id) {
      resolve(student);
    } else {
      reject("Student data not found");
    }
  });
  return promise;
}
