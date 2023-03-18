/* Задание 1 */
let num = +prompt("Введите число");
if (isNaN(num)) {
  alert("Упс, кажется, вы ошиблись");
} else {
    if (num % 2 === 0)  {
	  alert('Число ' + num + ' четное!');
  } else 
	  alert('Число ' + num + ' нечетное!');
  } 