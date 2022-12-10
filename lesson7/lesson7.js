// 1 задание

//const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];



// 2 задание

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};

const memory = {
    arguments: [],
    result: []
};

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
    
  }; memory.arguments.push(sum)

   function memorize(sum, limit) {
    limit < 5;
     sum()
   }

  function compareArrays( arr1, arr2 ) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }

  console.log(compareArrays([8], [8, 9])); 
  console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
  console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
  console.log(compareArrays([1, 2, 3], [2, 3, 1]));
  console.log(compareArrays([8, 1, 2], [8, 1, 2]))



  const mSum = memorize(sum, 5);

  console.log(sum(3, 4, 6));
  console.log(sum(5, 7, 6));
  console.log(sum(2, 6, 6))
  console.log(mSum)