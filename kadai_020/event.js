// textというidを持つHTML要素を取得し、定数に代入する
const  changeText = document.getElementById('text');
// btnというidを持つHTML要素を取得し、定数に代入する
const  Btn = document.getElementById('btn');

// textの文字を変える
Btn.addEventListener('click', () => {
   changeText.textContent = 'ボタンをクリックしました';
});
