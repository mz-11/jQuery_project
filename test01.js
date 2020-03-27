// 課題1.2

var answer = prompt('数字を入力してください');
if(answer % 2 == 0) {
  alert('正の数です');
} else if(answer % 2 == 1) {
  alert('負の数です');
} else {
  alert('数値を入力してください');
}

// 課題3
var animals = ['パンダ', 'ライオン', 'キリン'];

var i = 0;
while(i < animals.length) {
  alert(animals[i]);
  i++;

}

// 課題4,5
var animals = ['パンダ', 'ライオン', 'キリン'];

var i = 0;
var animal = prompt('パンダ、ライオン、キリンの中で好きな一番好きなのは？');

while (i < animals.length) {
if(animal != 'ライオン' ) {
  alert(animals[i]);
  i++;
   
} else {
  alert('ライオン');
  break;
}
}

// 課題6,7
var animals = [
  {'name': 'パンダ', 'weight': '80kg'},
  {'name': 'ライオン', 'weight': '200kg'}, 
  {'name': 'キリン', 'weight': '300kg'}
  ];
  
var answer = prompt('パンダ、ライオン、キリンの中から一種類選んでください。');
var result = animals.findIndex(({name}) => name === answer);
alert(animals[result].weight);

// 課題8
var r = prompt('半径は？');

function calc(r) {
  return r * r * 3.14;
}
alert(calc(r));