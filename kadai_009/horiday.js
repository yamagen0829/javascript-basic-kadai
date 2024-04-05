//休日の種類 
var holiDays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// for文
for (var i = 0; i <holiDays.length; i ++){
  console.log(holiDays[i]);
}

// while文
while (holiDays[0] !== '正月'){
   holiDays = shuffleArray(holiDays);
}
console.log(holiDays);
