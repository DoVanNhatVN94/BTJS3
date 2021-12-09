/**
 * Xắp xếp thứ tự tăng dần
 * 
 * Khối 1: 
 * số 1 (a)
 * số 2 (b)
 * số 3 (c)
 * 
 * Khối 2:
 * b1: tạo biến đệm: x1 x2 x3
 * b2:Lập điều kiện 
 *  if (a <= b && b <= c) x1 = a; x2 = b; x3 = c;
 *  if (a <= b && b >= c) { if (a < c) { x1 = a; x2 = c; x3 = b } else { x1 = c; x2 = a; x3 = b } 
 *  if (a >= b && b <= c) { if (a <= c) { x1 = b; x2 = a; x3 = c } else { x1 = b; x2 = c; x3 = a } }
 *   if (a >= b && b >= c) { x1 = c; x2 = b; x3 = a; }
 *  b3: xuất ra màn hình: document.getElementById("txtContent1").innerHTML = x1 + "<" + x2 + "<" + x3;
 * Khối 3: 
 * nhập vào 2 3 1 
 * => 1<2<3
 */



function tangDan() {
    var a = Number(document.getElementById("inpNum1").value);
    var b = Number(document.getElementById("inpNum2").value);
    var c = Number(document.getElementById("inpNum3").value);
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;

    if (a <= b && b <= c) {
        x1 = a; x2 = b; x3 = c;
    } else if (a <= b && b >= c) { if (a < c) { x1 = a; x2 = c; x3 = b } else { x1 = c; x2 = a; x3 = b } }
    else { if (a >= b && b <= c) { if (a <= c) { x1 = b; x2 = a; x3 = c } else { x1 = b; x2 = c; x3 = a } } }
    if (a >= b && b >= c) { x1 = c; x2 = b; x3 = a; }
    document.getElementById("txtContent1").innerHTML = x1 + "<" + x2 + "<" + x3;
}

/**
 * Bài 2 Chào hỏi
 * 
 * khối 1
 * lấy giá trị từ bộ select (fa)
 * 
 * Khối 2
 * b1: lập điều kiện
 * if (fa == 1) { t.innerHTML = "Xin chào Bố!" }
 * if (fa == 2) { t.innerHTML = "Xin chào Mẹ!" }
 * if (fa == 3) { t.innerHTML = "Xin chào Anh Trai!" }
 * if (fa == 4) { t.innerHTML = "Xin chào Em gái!" }
    else { t.innerHTML = "Xin chào Người lạ ơi!" }
 * b2: xuất ra màn hình document.getElementById("txtFamily").innerHTML ;

 * Khối 3:
 * click chọn chào mẹ => Xin chào Mẹ!
 */


function chaoHoi() {
    var fa = document.getElementById("inpFamily").value;
    var t = document.getElementById("txtFamily");
    if (fa == 1) { t.innerHTML = "Xin chào Bố!" }
    else if (fa == 2) { t.innerHTML = "Xin chào Mẹ!" }
    else if (fa == 3) { t.innerHTML = "Xin chào Anh Trai!" }
    else if (fa == 4) { t.innerHTML = "Xin chào Em gái!" }
    else { t.innerHTML = "Xin chào Người lạ ơi!" }
}

/**
 * bai 3 Đếm số chẵn lẽ
 * 
 * Khối 1:
 * số 1 (num1)
 * số 2 (num2)
 * số 3 (num3)
 * 
 * Khối 2:
 * 
 * b1: tạo biến đệm: đếm lẽ(countL), đếm chẵn (countC)
 * b2: Lập điều kiện
    if (num1 < 0 || num2 < 0 || num3 < 0 || num1 == "" || num2 == "" || num3 == "") {alert("Nhập lại");}
 *  if (num1 % 2 == 0)
        countC++;
 * else
        countL++;
    if (num2 % 2 == 0)
        countC++;
    else
        countL++;
    if (num3 % 2 == 0)
        countC++;
    else
        countL++;
 * b3: xuất ra màn hình
        document.getElementById("txtDemSo").innerHTML = "Có " + countC + " số chẵn, " + countL + " số lẻ";
 * 
 * Khối 3
 * nhập vào 1 2 3
 * => Có 1 số chẵn,2 số lẻ
 * 
 * 
 */

function demSo() {
    var num1 = Number(document.getElementById("inNum1").value);
    var num2 = Number(document.getElementById("inNum2").value);
    var num3 = Number(document.getElementById("inNum3").value);
    var countL = 0;
    var countC = 0;

    if (num1 < 0 || num2 < 0 || num3 < 0 || num1 == "" || num2 == "" || num3 == "") {alert("Nhập lại");}
    if (num1 % 2 == 0)
        countC++;
    else
        countL++;
    if (num2 % 2 == 0)
        countC++;
    else
        countL++;
    if (num3 % 2 == 0)
        countC++;
    else
        countL++;

    document.getElementById("txtDemSo").innerHTML = "Có " + countC + " số chẵn, " + countL + " số lẻ";
}

/**
 * Bai 4: kiểm tra tam giác
 * 
 * Khối 1
 * canh 1 (c1)
 * canh 2 (c2)
 * canh 3 (c3)
 * 
 * Khối 2:
 * b1: khai báo giá trị:
 * (Để xét tam giác vuông)
 * var a1 = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2)); 
 * var a2 = Math.sqrt(Math.pow(c1, 2) + Math.pow(c3, 2));
 * var a3 = Math.sqrt(Math.pow(c2, 2) + Math.pow(c3, 2));
 * 
 * b2: Lập điều kiện
 * if (c1 <= 0 || c2 <= 0 || c3 <= 0) (trường hợp ko nhập hoặc nhập cạnh nhỏ hơn ko sex ko xuất hiện tam giác)
        alert("Nhập lại");
    else {
        if (c1 == c2 && c2 == c3)
            document.getElementById("txtTamGiac").innerHTML = "Hình tam giác đều";
        else {
            if (c1 == c2 || c2 == c3 || c1 == c3)
                document.getElementById("txtTamGiac").innerHTML = "Hình tam giác cân";
            else {
                if (a1 == c3 || a2 == c2 || a3 == c1)
                    document.getElementById("txtTamGiac").innerHTML = "Hình tam giác vuông";
                else
                    document.getElementById("txtTamGiac").innerHTML = "Một loại tam giác nào đó";
 * 
 * b3: xuất ra màn hình
 * document.getElementById("txtTamGiac").innerHTML = ..... 
 * 
 * Khối 3:
 * 
 * nhập vào 3 4 5
 * => Hình tam giác vuông
 * 
 */

function ktTamGiac() {
    var c1 = Number(document.getElementById("inpC1").value);
    var c2 = Number(document.getElementById("inpC2").value);
    var c3 = Number(document.getElementById("inpC3").value);
    var a1 = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
    var a2 = Math.sqrt(Math.pow(c1, 2) + Math.pow(c3, 2));
    var a3 = Math.sqrt(Math.pow(c2, 2) + Math.pow(c3, 2));
    
    if (c1 <= 0 || c2 <= 0 || c3 <= 0)
        alert("Nhập lại");
    else {
        if (c1 == c2 && c2 == c3)
            document.getElementById("txtTamGiac").innerHTML = "Hình tam giác đều";
        else {
            if (c1 == c2 || c2 == c3 || c1 == c3)
                document.getElementById("txtTamGiac").innerHTML = "Hình tam giác cân";
            else {
                if (a1 == c3 || a2 == c2 || a3 == c1)
                    document.getElementById("txtTamGiac").innerHTML = "Hình tam giác vuông";
                else
                    document.getElementById("txtTamGiac").innerHTML = "Một loại tam giác nào đó";
            }
        }
    }
}

//chức năng button

function bai1(){
    document.getElementById("form__1").style.display= "block";
    document.getElementById("form__2").style.display= "none";
    document.getElementById("form__3").style.display= "none";
    document.getElementById("form__4").style.display= "none";

}
function bai2(){
    document.getElementById("form__1").style.display= "none";
    document.getElementById("form__2").style.display= "block";
    document.getElementById("form__3").style.display= "none";
    document.getElementById("form__4").style.display= "none";
}
function bai3(){
    document.getElementById("form__1").style.display= "none";
    document.getElementById("form__2").style.display= "none";
    document.getElementById("form__3").style.display= "block";
    document.getElementById("form__4").style.display= "none";
}
function bai4(){
    document.getElementById("form__1").style.display= "none";
    document.getElementById("form__2").style.display= "none";
    document.getElementById("form__3").style.display= "none";
    document.getElementById("form__4").style.display= "block";
}

