 

function toggleSignup() {
  document.getElementById("login-toggle").style.backgroundColor = "#000000";
  document.getElementById("login-toggle").style.color = "#fff";
  document.getElementById("signup-toggle").style.backgroundColor = "#fff3f3";
  document.getElementById("signup-toggle").style.color = "#000000";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

function toggleLogin() {
  document.getElementById("login-toggle").style.backgroundColor = "#fff3f3";
  document.getElementById("login-toggle").style.color = "#000000";
  document.getElementById("signup-toggle").style.backgroundColor = "#000000";
  document.getElementById("signup-toggle").style.color = "#fff";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

function saveData() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let button = document.getElementById("signupBtn");
  
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alertify.error("Duplicate data");

  } else {
    user_records.push({
      username: username,
      email: email,
      password: password,
    });

    localStorage.setItem("users", JSON.stringify(user_records));

    alertify.success("Register success, please login ");
  }
}









 
