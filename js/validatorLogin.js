document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    validateFormLogin();
  });
 
  function validateFormLogin() {
      
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      
      
      var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      
     
      var errorMessage = '';
      var errorMessage1 = '';
    
      if (!email.match(emailRegex)) {
        errorMessage = 'Email không hợp lệ.';
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