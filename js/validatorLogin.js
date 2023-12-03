document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();


  validateFormLogin();
});

function validateFormLogin() {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var passwordRegex = /^.{8,}$/;

  var errorMessage = '';
  var errorMessage1 = '';

  if (!email.match(emailRegex)) {
    errorMessage = 'Email không hợp lệ.';
  }
  if (!password.match(passwordRegex)) {
    errorMessage1 = 'Mật khẩu không hợp lệ. Mật khẩu tối thiểu 8 ký tự.';
  }

  document.getElementById('errorMessage').textContent = errorMessage;
  document.getElementById('errorMessage1').textContent = errorMessage1;

  document.getElementById('errorMessage').hidden = (errorMessage === '');
  document.getElementById('errorMessage1').hidden = (errorMessage1 === '');

  if (errorMessage !== '' || errorMessage1 !== '') {
    return false;
  }

}



var usersDatabase = {
  "users": [
    {
      "username": "student1@gmail.com",
      "password": "12345678"
    },
    {
      "username": "student2@gmail.com",
      "password": "12345678"
    }
  ]
};

var sumbit = document.querySelector(".login-btn");
sumbit.addEventListener('click', function () {
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  checkLogin(username, password);
});

function checkLogin(username, password) {
  for (var i = 0; i < usersDatabase.users.length; i++) {
    if (username === usersDatabase.users[i].username && password === usersDatabase.users[i].password) {
      window.location.href = "thongtinuser.html"; // Đăng nhập thành công chuyển qua trang user
      return;
    }
  }
  alert("Thông tin đăng nhập không chính xác"); //Đăng nhập không thành công 
}

