/* Задание 6 */
const Arr = [13, 13, 20, 45, 66, 20, 18, 15, 20];
let uniqleArr = new Set (Arr);
if (Arr.length === uniqleArr.length) {
  console.log(true);
} else {
  console.log(false);
}

 function areSame(Arr)
    {
        let first = Arr[0];
       for (let i=1; i<Arr.length; i++)
           if (Arr[i] != first)
                return false;
       return true;
    }

    if (areSame(Arr))
        console.log("Все числа одинаковые");
    else
        console.log("Все числа разные");