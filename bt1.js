//email.password
var login = document.querySelectorAll("button");
var nhap1 = document.getElementById("input1");
var nhap2 = document.getElementById("input2");
function out(){
    if (nhap1.value === ""){
        alert("Người dùng không được để trống email address.");
    }
    else if (nhap2.value === ""){
        alert("Người dùng không được để trống password.");
    }
    else if (nhap2.value.length < 8){
        alert("Người dùng nhập nhiều hơn 8 kí tự trong password.");
    }
    else{
        alert("Login thành công.");
    }
    nhap1.value = "";
    nhap2.value = "";
}

//ẩn hiện tích xanh
var check = document.querySelectorAll("i");
var kt = false;
check[0].classList.add("none1");
function squareout(){
    if (kt){
        check[0].classList.add("none1");
        kt = false;
    }
    else{
        check[0].classList.remove("none1")
        kt = true;
    }
}

