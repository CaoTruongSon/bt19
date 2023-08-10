// hover chuột thực hiện hành động
// const button = document.querySelectorAll("button");
// button[0].addEventListener("mouseover", add);
// function add(){
//     console.log("hihi");
// }

// chuột rời mục tiêu thì hoạt động
// const button = document.querySelectorAll("button");
// button[0].addEventListener("mouseover", add);
// function add(){
//     div[0].style.display = "block";
// }
// var div = document.querySelectorAll("div");
// div[0].style.display = "none";
// button[0].addEventListener("mouseout", out);
// function out(){
//     div[0].style.display = "none";
// }

// mousedown nhấn chuột
// mouseup nhả chuột
// const button = document.querySelectorAll("button");
// button[0].addEventListener("mousedown", down);
// button[0].addEventListener("mouseup", up);
// function down(){
//     console.log("down");
// }
// function up(){
//     console.log("up");
// }

//mousemove di chuyển chuột
//để thẻ div thì di chuyển trong div sẽ hoạt động
// var div = document.querySelectorAll("div");
// div[0].addEventListener("mousemove", move);
// function move(){
//     console.log("hi");
// }

//contextmenu  nhấn chuột phải
//preventDefault ngăn event mặc định thực hiên, ví dụ ấn chuột phải tạo ra nhiều lựa chọn. sẽ tắt đi
// giá trị trong function là event thực hiện
// var div = document.querySelectorAll("div");
// div[0].addEventListener("contextmenu", menu);
// function menu(d){
//     console.log("hi");
//     d.preventDefault();
// }
// div[0].style.width = "100px";
// div[0].style.height = "100px";
// div[0].style.background = "red";

//bt
//stopPropagation loại bỏ hành vi event của thằng cha, tức loại bỏ cẩ function thằng cha ko cho hoạt động
// var div = document.querySelectorAll("div");
// div[0].addEventListener("contextmenu", menu);
// div[0].style.width = "100px";
// div[0].style.height = "100px";
// div[0].style.background = "red";
// function menu(d){
//     console.log("hi");
//     d.preventDefault();
// }
// var button = document.querySelectorAll("button");
// button[0].addEventListener("contextmenu", hii);
// function hii(r){
//     console.log("hi");
//     r.stopPropagation();
// }

//bt
//alert hiện ra bảng thông báo 
//thêm event vào onclick = "div22(event)" để thực hiện 2. ngăn chặn 1 nhờ propagation
// function div22(e){
//     alert("div2");
//     e.stopPropagation();
// }
// function div11(){
//     alert("div1");
// }

//window tương tác với trình duyệt
//innerWidth chiều rông brower
//innerHeight chiều cao brower
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// var div = document.querySelectorAll("div");
// // dấu ` ở cạnh nút 1
// div[0].innerHTML += `chiều rông là: ${window.innerWidth}`;
// div[0].innerHTML +="<br>";
// div[0].innerHTML += "chiều cao là: "+window.innerHeight;

//scrollTop khoảng cách scroll đến top

//keo thả
var div = document.querySelectorAll("div");
function mymy(){
    console.log("hi");
}
