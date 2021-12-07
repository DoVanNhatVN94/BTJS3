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

function chaoHoi() {
    var fa = document.getElementById("inpFamily").value;
    var t = document.getElementById("txtFamily");
    if (fa == 1) { t.innerHTML = "Xin chào Bố!" }
    else if (fa == 2) { t.innerHTML = "Xin chào Mẹ!" }
    else if (fa == 3) { t.innerHTML = "Xin chào Anh Trai!" }
    else if (fa == 4) { t.innerHTML = "Xin chào Em gái!" }
    else { t.innerHTML = "Xin chào Người lạ ơi!" }
}
function demSo() {
    var num1 = Number(document.getElementById("inNum1").value);
    var num2 = Number(document.getElementById("inNum2").value);
    var num3 = Number(document.getElementById("inNum3").value);
    var countL = 0;
    var countC = 0;

    if (num1 < 0 || num2 < 0 || num3 < 0 || num1 == "" || num2 == "" || num3 == "") {
        alert("Nhập lại");
    }
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