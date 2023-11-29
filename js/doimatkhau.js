function regvalidate(frm){

    if (frm.psw.value.length<8){
        alert("Mật khẩu tối thiểu có 8 kí tự");
        frm.psw.focus();
        return false;
    }

    if(frm.psw2.value.length<8){
        alert("Mật khẩu tối thiểu có 8 kí tự");
        frm.psw2.focus();
        return false;
    }

    if(frm.psw.value.length != frm.psw2.value.length){
        alert("MK không hợp lệ");
        frm.psw2.focus();
        return false;
    }
    alert("Đã gửi dữ liệu đăng ký");
    return true;
}