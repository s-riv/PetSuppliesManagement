// $(function(){
//   function buildHTML(stock){
//     let html =
//       `<div class="Form">
//         <div class="Form__product">
//           ${stock.name}
//         </div>
//         <div class="Form__url">
//           ${stock.url}
//         </div>
//         <div class="Form__stocks">
//           ${stock.sets_register}
//           ${stock.sets_current}
//           ${stock.pcs}
//           ${stock.pcs_daily}
//         </div>
//         <div class="Form__price">
//           ${stock.price}
//           ${stock.price_1day}
//         </div>
//         <div class="Form__last_purchase">
//           ${stock.last_purchase}
//         </div>
//       </div>`
//     return html;
//   }
//   $('.Form').on('submit', function(e){
//     e.preventDefault();
//     // console.log("hoge")
//     let formData = new FormData(this);
//     let url = $(this).attr('action');
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       let html = buildHTML(data);
//       $('.Contents__stock').append(html);      
//       $('form')[0].reset();
//       $('.Contents__stock').animate({ scrollTop: $('.Contents__stock')[0].scrollHeight});
//       $('.Form__Submit').prop("disabled", false);
//     })
//     .fail(function(){
//       alert("在庫登録に失敗しました");
//       $('.Form__Submit').prop("disabled", false);
//     })
//   })
// });



// $('＃price').onChange = function() {
//   const p1 = $("input[ id='pcs' ]").val();
//   const p2 = $("input[ id='pcs_daily' ]").val();
//   const p3 = $("input[ id='price' ]").val();
//   const p11 = parseInt(p1);
//   const p22 = parseInt(p2);
//   const p33 = parseInt(p3);
      
//   const price_1day = p33 * p22 / p11
  
//   $('#price_1day').val(price_1day)
// };



// $("#price").addEventListener("change",function() {

//   console.log('状態が変化しました！');

//   const p1 = $("#pcs").val();
//   const p2 = $("#pcs_daily").val();
//   const p3 = $("#price").val();
//   const p11 = parseInt(p1);
//   const p22 = parseInt(p2);
//   const p33 = parseInt(p3);
      
//   const price_1day = p33 * p22 / p11
  
//   $("#price_1day").val(price_1day)
// });



// $('.Form').on('change','＃price',(function() {

//   const p1 = $("#pcs").val();
//   const p2 = $("#pcs_daily").val();
//   const p3 = $("#price").val();
//   const p11 = parseInt(p1);
//   const p22 = parseInt(p2);
//   const p33 = parseInt(p3);

//   const price_1day = p33 * p22 / p11

//   $("#price_1day").val(price_1day)
// }));



// $('＃price').on('change','input[type="text"]',(function() {

//   const p1 = $("#pcs").val();
//   const p2 = $("#pcs_daily").val();
//   const p3 = $("#price").val();
//   const p11 = parseInt(p1);
//   const p22 = parseInt(p2);
//   const p33 = parseInt(p3);

//   const price_1day = p33 * p22 / p11

//   $("#price_1day").val(price_1day)
// }));



// $('＃price').change(function() {

//   console.log('計算前');
  
//   const p1 = $(pcs).val();
//   const p2 = $(pcs_daily).val();
//   const p3 = $(price).val();
//   const p11 = parseInt(p1);
//   const p22 = parseInt(p2);
//   const p33 = parseInt(p3);

//   const price_1day = p33 * p22 / p11
  
//   $('#price_1day').val(price_1day)
// });



// 画面がリロードされた時
// $(function() { });

$(function() {

  $('#price').change(function() { //フォーム内id="price"の数値を入力し終わった時に変化するchangeイベントを使用
    let pcs      = $("#pcs").val(); //変数に.val()メソッドで代入するのちにそれをInteger型に変更する
    let pcsDaily = $("#pcs_daily").val();
    let price    = $("#price").val();
    pcs = parseInt(pcs); //Integer型に変更 //上記letにより再代入可能にしている
    pcsDaily = parseInt(pcsDaily);
    price = parseInt(price);

    const pricePerDay = price * pcsDaily / pcs; //先ほど代入したものの変数をそのまま計算する

    $("#price_1day").val(pricePerDay);  //計算結果の上記変数pricePerDayを.val()内に代入する
  });

  $('#last_purchase').change(function() {
    console.log('計算前');

    let setsCurrent = $("#sets_current").val();
    let pcs = $("#pcs").val();
    let pcsDaily = $("#pcs_daily").val();
    setsCurrent = parseInt(setsCurrent);
    pcs = parseInt(pcs);
    pcsDaily = parseInt(pcsDaily);

    const how_many_stock = setsCurrent * pcs / pcsDaily;

    let stringLastPurchase = $("#last_purchase").val(); // "2020-09-01"
    let arrayLastPurchase  = stringLastPurchase.split("-"); // ["2020", "09", "01"] "-"で分割して配列に
    let dateLastPurchase = new Date(arrayLastPurchase[0], parseInt(arrayLastPurchase[1]) - 1, arrayLastPurchase[2]) //上記配列から取得した年月日を指定 //"月"は0からカウントされるため"−1"

    dateLastPurchase.setDate(dateLastPurchase.getDate() + how_many_stock-1) //"日"を1~31の整数で設定し、"在庫あと何日"-1(当日起算)を加算

    $("#out_stock").val(dateToString(dateLastPurchase)); //"在庫がなくなる日"に上記を代入
  });

});

function dateToString(dt){ //現在日付をYYYY/MM/DD形式の文字列で取得
  let y = dt.getFullYear();
  let m = ("00" + (dt.getMonth()+1)).slice(-2);
  let d = ("00" + dt.getDate()).slice(-2);
  const result = y + "-" + m + "-" + d;
  return result;
}


// $(function() {

//   console.log('計算前');

//   let setsCurrent = $("#sets_current").val();
//   let pcs = $("#pcs").val();
//   let pcsDaily = $("#pcs_daily").val();
//   setsCurrent = parseInt(setsCurrent);
//   pcs = parseInt(pcs);
//   pcsDaily = parseInt(pcsDaily);

//   const dt_str = "＃last_purchase";
//   const dt = new Date(dt_str);
  
//   dt.setDate(dt.getDate() + setsCurrent * pcs / pcsDaily);

//   console.log(dt); // Tue Aug 06 2019 09:00:00 GMT+0900 (日本標準時)

// });



// const dt_str = "＃last_purchase";
// const dt = new Date(dt_str);
// dt.setDate(dt.getDate() + "#how_many_stock");

// console.log(dt); // Tue Aug 06 2019 09:00:00 GMT+0900 (日本標準時)



// $(function() {
//   console.log($(".Form"));
// });



// console.log('計算前');



//   console.log(this);




// <input type="text" id="a" size="4">
// －
// <input type="text" id="b" size="4">
// <input type="button" value="=" onClick="
// var a = document.getElementById('a').value;
// var b = document.getElementById('b').value;
// var c = parseInt(a) - parseInt(b);
// document.getElementById('c').value = c;
// ">
// <input type="text" id="c" size="4"></input>