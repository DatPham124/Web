


document.getElementById('form-1').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    validateFormRegister();
  });

  function validateFormRegister() {
  
    var fullname = document.getElementById('fullname').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var sdt = document.getElementById('sdt').value;
    var email = document.getElementById('email').value;
  
    
    var nameRegex = /^[A-Za-z\s]+$/; 
    var usernameRegex = /^[A-Za-z0-9]+$/; 
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; 
    var sdtRegex = /^[0-9]{10}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  
    var errorMessage1 = '';
    var errorMessage2 = '';
    var errorMessage3 = '';
    var errorMessage4 = '';
    var errorMessage5 = '';
  
    if (!fullname.match(nameRegex)) {
      errorMessage1 = 'Họ và tên không hợp lệ.';
    }
  
    if (!username.match(usernameRegex)) {
      errorMessage2 = 'Tên đăng nhập không hợp lệ.';
    }
  
    if (!password.match(passwordRegex)) {
      errorMessage3 = 'Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 6 ký tự, bao gồm ít nhất một chữ thường, một chữ hoa và một chữ số.';
    }
  
    if (!sdt.match(sdtRegex)) {
      errorMessage4 = 'Số điện thoại không hợp lệ. Số điện thoại phải gồm 10 chữ số.';
    }
  
    if (!email.match(emailRegex)) {
      errorMessage5 = 'Email không hợp lệ.';
    }
  
    
    document.getElementById('errorMessage1').textContent = errorMessage1;
    document.getElementById('errorMessage2').textContent = errorMessage2;
    document.getElementById('errorMessage3').textContent = errorMessage3;
    document.getElementById('errorMessage4').textContent = errorMessage4;
    document.getElementById('errorMessage5').textContent = errorMessage5;
  
    document.getElementById('errorMessage1').hidden = (errorMessage1 === '');
    document.getElementById('errorMessage2').hidden = (errorMessage2 === '');
    document.getElementById('errorMessage3').hidden = (errorMessage3 === '');
    document.getElementById('errorMessage4').hidden = (errorMessage4 === '');
    document.getElementById('errorMessage5').hidden = (errorMessage5 === '');
  
    
    if (errorMessage1 !== '' || errorMessage2 !== '' || errorMessage3 !== '' || errorMessage4 !== '' || errorMessage5 !== '') {
      return false;
    }
  
    
    alert('Đăng kí thành công!');
  }