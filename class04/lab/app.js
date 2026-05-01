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

// =======================

const courses = [
  { code: "WIP2", title: "Web Interface Programming 2" },
  { code: "AWP", title: "Advanced Programming" },
  { code: "DB2", title: "Database Management Systems 2" },
];

function getCourseData() {
  const promise = new Promise((resolve, reject) => {
    if (courses) {
      setTimeout(() => {
        resolve(renderCourses(courses));
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Courses data not found.");
      }, 2000);
    }
  });
  return promise;
}

function renderCourses(courses) {
  const container = document.getElementById("courses-container");
  const title = document.createElement("h2");
  title.textContent = "Courses Data";
  const ulWrap = document.createElement("ul");

  let i = 1;
  for (const course of courses) {
    const keys = Object.keys(course);
    const liInner = document.createElement("li");
    const ulInner = document.createElement("ul");
    liInner.textContent = `Course ${i}`;
    ulWrap.append(liInner);
    liInner.append(ulInner);

    for (const key of keys) {
      const li = document.createElement("li");
      li.textContent = `${key.toUpperCase()} : ${course[key]}`;
      ulInner.append(li);
    }
    i++;
  }

  container.append(title, ulWrap);
}

renderCourses(courses);
