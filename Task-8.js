const fruits = new Map ()
fruits.set('mandarine', 'orange');
fruits.set('banana', 'yellow');
fruits.set('plum', 'violet');
fruits.set('currant', 'red');

for (let [key, value] of fruits) {
  console.log(`Ключ - ${key}, значение - ${value}`);
}