function MyFunction01() {
  var obj = document.body;
  obj.style.backgroundColor = 'red';
}
function MyFunction02(){
  var obj = document.getElementById('ID01');
  obj.style.backgroundColor = 'yellow';
}
function MyFunction03(){
  var lines = document.getElementsByClassName('Class01');
  for( var i=0; i<lines.length; i++ ){
           lines[i].style.backgroundColor = 'green';
     }
 }
 function MyFunction04() {
  // pタグの把握（複数の情報が obj[0], obj[1] ,obj[2]・・に一括で入る）
  var obj = document.getElementsByTagName("p");

  // pタグの存在する数だけ処理をくりかえす
  for( var i=0; i<obj.length; i++ ) {
       //  i 番目の pタグ部分の背景を blue に
      obj[ i ].style.backgroundColor = "blue";
  }
}
function MyFunction05( col ){
  var obj = document.body;
  obj.style.backgroundColor = col;
}
//ランダムな16進6桁のカラーコードを生成（汎用性のある関数）
function RandomColor(){
    var col = Math.floor( Math.random() * 0xFFFFFF ).toString(16);
    for( var i = col.length; i<6; i++ ) { col = '0' + col; }
    return '#' + col;
}
// 背景色の変更
function MyFunction06( ){
  var obj = document.body;
  obj.style.backgroundColor = RandomColor();
}
// JavaScript Sample
