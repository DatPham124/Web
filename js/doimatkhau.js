function regvalidate(frm) {

    if (frm.oldPsw.value.length < 8) {
        alert("Mật khẩu cũ không đúng");
        frm.oldPsw.focus();
        return false;
    }

    if (frm.newPsw.value.length < 8) {
        alert("Mật khẩu mới tối thiểu cần có 8 ký tự");
        frm.newPsw.focus();
        return false;
    }

    if (frm.confirmPsw.value !== frm.newPsw.value) {
        alert("Mật khẩu nhập lại không khớp");
        frm.confirmPsw.focus();
        return false;
    }

    alert("Đã gửi dữ liệu đăng ký");
    return true;
}