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



$(function() {

  console.log('計算前');

  const p1 = $("#pcs").val();
  const p2 = $("#pcs_daily").val();
  const p3 = $("#price").val();
  const p11 = parseInt(p1);
  const p22 = parseInt(p2);
  const p33 = parseInt(p3);

  const price_1day = p33 * p22 / p11

  $("#price_1day").val(price_1day)
});



$(function() {

  console.log('計算前');

  const s1 = $("#sets_current").val();
  const p4 = $("#pcs").val();
  const p5 = $("#pcs_daily").val();
  const s11 = parseInt(s1);
  const p44 = parseInt(p4);
  const p55 = parseInt(p5);

  const howmany_stock = s11 * p44 / p55

  $("#howmany_stock").val(howmany_stock)
});



$(function() {

  console.log('計算前');

  const s1 = $("#sets_current").val();
  const p4 = $("#pcs").val();
  const p5 = $("#pcs_daily").val();
  const s11 = parseInt(s1);
  const p44 = parseInt(p4);
  const p55 = parseInt(p5);

  const dt_str = "＃last_purchase";
  const dt = new Date(dt_str);
  
  dt.setDate(dt.getDate() + s11 * p44 / p55);

  console.log(dt); // Tue Aug 06 2019 09:00:00 GMT+0900 (日本標準時)

});



// const dt_str = "＃last_purchase";
// const dt = new Date(dt_str);
// dt.setDate(dt.getDate() + "#howmany_stock");

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