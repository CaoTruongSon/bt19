window.onscroll = function(){
    out();
}
var button = document.querySelectorAll("button");
button[0].style.opacity = "0";
function out(){
    if (document.documentElement.scrollTop > 350){
        button[0].style.opacity = "1";
    }
    else{
        button[0].style.opacity = "0";
    }
}
// function out1(){
//     document.documentElement.scrollTop = 0;
// }
function out1() {
    // Sử dụng phương thức scrollTo với hiệu ứng trơn tru
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Sử dụng "smooth" để có hiệu ứng trơn tru
    });
}