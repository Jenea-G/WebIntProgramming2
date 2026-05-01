const student1 = {
  id: 1,
  name: "Kate",
  programm: "Web design",
  semester: 3,
  bio: "personal info",
};

function getStudentData() {
  const promise = new Promise((resolve, reject) => {
    if (student1) {
      setTimeout(() => {
        resolve(renderStudent(student1));
      }, 2000);
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

// Load student data on button click;

const sBtn = document.getElementById("load-student-btn");
const pStatus = document.getElementById("status");

sBtn.addEventListener("click", () => {
  pStatus.textContent = "Loading student data...";

  getStudentData()
    .then((result) => {
      result;
    })
    .then(() => {
      pStatus.textContent = "Student data is loaded.";
    })
    .catch((error) => {
      pStatus.textContent = error;
    });
});
