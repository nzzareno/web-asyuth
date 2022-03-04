 

function logData() {
  let email = document.getElementById("mail").value;
  let password = document.getElementById("pass").value;
  let button = document.getElementById("signupBtn");
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

 

  if (
    user_records.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {alertify.success("Successful login")
    window.location.href = "../reset.html";
  } else {
    alertify.error("We couldn't find any accounts that exactly match the information you entered");
  }
}

 
   
