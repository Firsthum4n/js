// class Person {
//     constructor(name, age, happieness){
//         this.name = name;
//         this.age = age;
//         this.happieness = happieness;
//     }

//     info() {
//         console.log("Человек: " + this.name);
//     }
// }

// var alex = new Person('Alex', 45, true);
// var bob = new Person('Bob', 25, false)
// alex.info()











// var date = new Date();

// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// var arr = [8, 90, 23, 5, 7, 8, 9];
// var stroka = arr.reverse().join(', ');

// console.log(stroka.split(', '));

// console.log(arr.join(', '));
// console.log(arr.sort());
// console.log(arr.reverse());



















// setTimeout(function(){
//     console.log('timer is working')
// }, 2000)

// var count = 0;
// var id = setInterval(func, 1000);
// function func (){
//     count ++
//     console.log(count)
//     if( count == 3){
//         clearInterval(id)
//     }
// }

// setInterval(function(){
//     count++;
//     console.log('sec: ' + count)

// }, 1000);






// document.getElementById('main-form').addEventListener('submit');
// function checkForm(event) {
//     event.preventDefault();
//     var el = document.getElementById('main-form');

//     var name = el.name.value;
//     var pass = el.pass.value;
//     var repass = el.repass.value;
//     var state = el.state.value;

//     var fail = "";

//     if(name == "" || pass == "" || state == ""){
//         fail = "zapolnite vse polya";
//     } else if(name.lenght <= 1 || name.lenght >= 50){
//         fail = "Vvedite correcktnoe imya";
//     } else if(pass != repass) {
//         fail = "paroli dolzni sovpadat";
//     } else if(pass.split("&").lenght > 1)
//         fail = "nekkoretniy parrol";

//     if(fail !=""){
//         document.getElementById("error").innerHTML = fail
//         return false;
//     }else {
//         alert("все данные корректно заполнены")
//     }
// }
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge"
//     <title>Java script</title>
// </head>
// <body>
//     <form id="main-form" onsubmit="return checkForm(this)">
//         <label for="name">Имя:</label>
//         <input type="text" name="name" placeholder="Имя" id="name"><br><br>
//         <label for="pass">Пароль:</label>
//         <input type="password" name="pass" placeholder="Пароль" id="pass"><br><br>
//         <label for="repass">Проверка пароля:</label>
//         <input type="password" name="repass" placeholder="Проверка пароля" id="repass"><br><br>
//         <span>Пол:</span>
//         <input type="radio" name="state" id="male" value="Мужской">
//         <label for="male">Мужской</label>
//         <input type="radio" name="state" id="female" value="Женский">
//         <label for="female">Женский</label><br><br>
//         <div id="error" style="color: red"></div>
//         <input type="submit" name="submit" value="Готово">
//   </form>
//     <script src="js/main.js"></script>
// </body>
// </html>

























// var text = document.getElementById('text');
// text.title = 'new text';
// console.log(text.title);

// text.style.color = 'red;'
// text.style.backgroundColor = 'blue'

// text.innerHTML = "New<br>string"

// var spans = document.getElementsByTagName('span')

// for (var i = 0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML)
// }

















// var counter = 0;

// function onClickButton(el) {
//     counter++;
//     el.innerHTML = 'click' + counter
//     el.style.cssText = 'color: red'

//     console.log(el.name)
// }

// function onInput(el) {
//     if(el.value == 'hello') {
//         alert('HI')
//     }
//     console.log(el.value)
// }



// function summa(arr) {
//     var sum = 0;

//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// var array = [6, 8, 1];
// var res = summa(array);
// console.log(res)




// function info(word) {
//     console.log(word +'!');
// }
// function sum(a, b){
//     var res = a + b;
//     info(res)
// }
// sum(5, 7)

// alert('hi');


// var arr = [5, 7, 3, 8, 9, 'stroka'];
// for(var i = 0; i < arr.length; i++) {
//     console.log('element ' + (i + 1) + ': ' + arr[i])
// }

// for(var i = 10; i <= 20; i++) {
//     if(i % 2 == 0)
//         continue;
    
//     console.log(i)
// }

// for(var i = 10; i <= 20; i += 2) {
//     if(i > 15)
//         break;

//     console.log(i)
// }


// var x = 0;
// do {
//     console.log(x);
//     x++;
// } while(x < 10);

// var j = 1000;
// while(j >= 100) {
//     console.log(j);
//     j-=100;
// }

// var isHasCar = true;
// while(isHasCar) {
// }

// for (var i = 100; i > 5; i /=2) {
//     console.log(i)
// }


// var arr = [5, true, 'stroka', 5.7, 0, -100];
// arr[3] = 'word'
// console.log(arr);

// var matrix = 
//   [[4, 6, 8], ['stroka', 5.7], [0, -100]
// ];

// console.log(matrix[1][0])
// matrix[1][0] = 90
// console.log(matrix)



// var stroka = 'word';

// switch(stroka) {
//     case "4": 
//     console.log("value 4");
//     break;
//     default:
//         console.log('default');
// }

// switch(stroka) {
//     case "word": 
//     console.log("value 4");
//     break;
// }



// var number = 15;
// var isHasHouse = true

// if(number == 15 && isHasHouse == true) {
//     console.log('ok');
// } else if (number < 10) {
//     console.log('ok!');
// } else if (number ==7 ) {
//     console.log('7');
// } else if (number >=15) {
//     console.log('>=15');
// }else {
//     console.log('not ok');
// }