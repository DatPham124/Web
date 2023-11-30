document.getElementById('form-1').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    validateFormRegister();
  });

  function validateFormRegister() {
      
      var fullname = document.getElementById('fullname').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var repassword = document.getElementById('repassword').value;
      
     
      var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      var passwordRegex = /^.{1,8}$/; 
     
      var errorMessage1 = '';
      var errorMessage2 = '';
      var errorMessage3 = '';
      var errorMessage4 = '';
    
      if (fullname.trim() === '') {
        errorMessage1 = 'Họ và tên không được để trống.';
      }
    
      if (!email.match(emailRegex)) {
        errorMessage2 = 'Email không hợp lệ.';
      }
    
      if (!password.match(passwordRegex)) {
        errorMessage3 = 'Mật khẩu không hợp lệ. Mật khẩu tối đa 8 ký tự.';
      }
    
      if (fullname.trim() === '') {
        errorMessage4 = 'Mật khẩu không được để trống.';
      }
      if (password !== repassword) {
        errorMessage4 = 'Mật khẩu không trùng khớp.';
      }
    
     
      document.getElementById('errorMessage1').textContent = errorMessage1;
      document.getElementById('errorMessage2').textContent = errorMessage2;
      document.getElementById('errorMessage3').textContent = errorMessage3;
      document.getElementById('errorMessage4').textContent = errorMessage4;
    
      document.getElementById('errorMessage1').hidden = (errorMessage1 === '');
      document.getElementById('errorMessage2').hidden = (errorMessage2 === '');
      document.getElementById('errorMessage3').hidden = (errorMessage3 === '');
      document.getElementById('errorMessage4').hidden = (errorMessage4 === '');
    
      
      if (errorMessage1 !== '' || errorMessage2 !== '' || errorMessage3 !== '' || errorMessage4 !== '') {
        return false;
      }
    
     
      alert('Đăng ký thành công!');
    
    }