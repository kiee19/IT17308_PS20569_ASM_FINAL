function thayDoiTT(x) {
  var tr = x.parentElement.parentElement;
  var sl = tr.children[3].children[0];
  var tt = tr.children[4].children[0];
  var dg = tr.children[2].innerText;
  var td = tr.children[0].children[0];

  if (sl.value == "") {
    sl.value = "1";
    tt.innerText = dg;
  } else {
    sl.value = "";
    tt.innerText = "";
  }
  tinhTong();
}

function tinhTT(x) {
  var tr = x.parentElement.parentElement;
  var dg = tr.children[2].innerText;
  var sl = x.value;
  tr.children[4].children[0].innerText = Number(dg) * Number(sl);
  tinhTong();
}

function thaydoimucgia() {
  var arrPrice = document.getElementsByName(`price`);
  var priceChoice = document.getElementById("mucgia").value;
  for (let i = 0; i < arrPrice.length; i++) {
    var price = arrPrice[i].innerText;
    if (Number(price) < priceChoice || priceChoice == "Mức giá") {
      arrPrice[i].parentNode.style.display = "";
    } else {
      arrPrice[i].parentNode.style.display = "none";
    }
  }
  tinhTong();
}

function tinhTong() {
  // hien tong
  var tongtt = 0;
  var arrMoney = document.getElementsByName("thanhtien");
  // console.log(arrMoney);
  for (var i = 0; i < arrMoney.length; i++) {
    if ((arrMoney[i].parentNode.style.display = " ")) {
      var totalcount = arrMoney[i].innerText;
      var money = Number(totalcount);
      tongtt += money;
      // console.log(tongtt);
    }
  }
  document.getElementById("tong").innerText = tongtt;
}
