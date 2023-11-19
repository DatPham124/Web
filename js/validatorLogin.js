document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    validateFormLogin();
  });
 
  function validateFormLogin() {
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    
    var usernameRegex = /^[A-Za-z0-9]+$/; 
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; 
  
    
    var errorMessage = '';
    var errorMessage1 = '';
  
    if (!username.match(usernameRegex)) {
      errorMessage = 'Tên đăng nhập không hợp lệ.';
    }
  
    if (!password.match(passwordRegex)) {
      errorMessage1 = 'Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 6 ký tự, bao gồm ít nhất một chữ thường, một chữ hoa và một chữ số.';
    }
  
    
    document.getElementById('errorMessage').textContent = errorMessage;
    document.getElementById('errorMessage1').textContent = errorMessage1;
  
    document.getElementById('errorMessage').hidden = (errorMessage === '');
    document.getElementById('errorMessage1').hidden = (errorMessage1 === '');
  
    
    if (errorMessage !== '' || errorMessage1 !== '') {
      return false;
    }

    alert('Đăng nhập thành công!');
  } 