const student1 = {
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

function renderStudent(student) {
  const container = document.getElementById("student-container");
  const title = document.createElement("h2");
  title.textContent = "Student Data";
  const ul = document.createElement("ul");
  const keys = Object.keys(student);

  for (const key of keys) {
    const li = document.createElement("li");
    li.textContent = `${key.toUpperCase()} : ${student[key]}`;
    ul.append(li);
  }
  container.append(title, ul);
}

renderStudent(student1);
