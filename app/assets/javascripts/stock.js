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

  $('#pcs').change(function() { //フォーム内id="pcs"の数値を入力し終わった時に変化するchangeイベントを使用
    let pcs      = $("#pcs").val(); //変数に.val()メソッドで代入するのちにそれをInteger型に変更する
    let pcsDaily = $("#pcs_daily").val();
    let price    = $("#price").val();
    pcs = parseInt(pcs); //Integer型に変更 //上記letにより再代入可能にしている
    pcsDaily = parseInt(pcsDaily);
    price = parseInt(price);

    const pricePerDay = price * pcsDaily / pcs; //先ほど代入したものの変数をそのまま計算する

    $("#price_1day").val(pricePerDay);  //計算結果の上記変数pricePerDayを.val()内に代入する
  });

  $('#pcs_daily').change(function() { //フォーム内id="pcs_daily"の数値を入力し終わった時に変化するchangeイベントを使用
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