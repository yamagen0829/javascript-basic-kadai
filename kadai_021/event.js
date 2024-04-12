// textというidを持つHTML要素を取得し、定数に代入する
const  changeText = document.getElementById('text');
// btnというidを持つHTML要素を取得し、定数に代入する
const  Btn = document.getElementById('btn');

// textの文字を2秒後に変える
Btn.addEventListener('click', () => {
   setTimeout(() => {
      changeText.textContent = 'ボタンをクリックしました';
}, 2000);});
