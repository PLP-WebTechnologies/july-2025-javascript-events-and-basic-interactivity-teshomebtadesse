// 🔍 Live Search Filter
document.getElementById("searchInput").addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  const rows = document.querySelectorAll("#studentTable tbody tr");
  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    row.style.display = name.includes(query) ? "" : "none";
  });
});

// Theme Toggle
function toggleTheme(){
    document.body.classList.toggle('dark-theme');
}

// Toggle Grades Section
document.getElementById("toggleGrades").addEventListener("click", function () {
  document.getElementById("grades").classList.toggle("hidden");
});

// Form Validation

// drop box for photo upload
const dropzone = document.getElementById("dropzone");
dropzone.addEventListener("dragover", function (e) {
  e.preventDefault();
  this.style.backgroundColor = "#e0e0e0";
});

dropzone.addEventListener("drop", function (e) {
  e.preventDefault();
  this.style.backgroundColor = "#fff";
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    alert(`File "${files[0].name}" uploaded successfully!`);
  }
});

 //validating email, password, studentID

function validateEmail(email) {
    let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return format.test(email);
}

function validatePassword(password) {
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    let format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return format.test(password);
}

  //validate student ID format
function validateStudentId(Student_ID) {
    let format = /^STU-2025-\d{4}$/;
    return format.test(Student_ID);
}

//validate registration 

document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault()
    let email = document.getElementById("email").value.trim();
    let studentId = document.getElementById("studentId").value.trim();
    let password = document.getElementById("password").value;
    
    let error = [];
    
    
    if(!email || !studentId || !password) {
        alert("All fields are required!");
        return false;
    }

    if(!validateEmail(email)) {
        alert("Invalid email format!");
        return false;  
    }
    if(!validateStudentId(studentId)) {
        alert("Student ID must follow STU-2025-XXXX format!");
        return false;  
    }
    if(!validatePassword(password)) {
        alert("Password must be at least 8 characters, include uppercase, lowercase, number, and special character!");
        return false;  
    }

    if(error.length > 0) {
        alert(error.join("\n"));
        return false;
    }
    else {
        alert("Student registered successfully!");
        this.reset();
    }
});