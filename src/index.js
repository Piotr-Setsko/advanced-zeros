module.exports = function getZerosCount(number, base) {
  // your implementation
    let primeArray=[];
    let divisionResultArray = [];
    let primeNumber=2;
    let divider = 0;
    let quantityPrimeNumber = 1;
    let privateAmount = 0;

    while (((base^0) === (base)) && (base != 1)) {
      if ((base/primeNumber^0) === (base/primeNumber)) {
        base=base/primeNumber;
        primeArray.push(primeNumber);
      } else {
        primeNumber+=1;
      }
    }

    let quantityAnotherNumber = 1;
    if ((primeArray[primeArray.length - 1]!=primeArray[primeArray.length - 2]) && (primeArray[primeArray.length - 2]==primeArray[primeArray.length - 3])) {
      primeArray.forEach(function(item, i, arr) {
        if(arr[i]==arr[i+1]) {
          quantityAnotherNumber++;
        }
      });
    }

    if (primeArray[primeArray.length - 1] <= quantityAnotherNumber) {
      divider =primeArray[primeArray.length - 2];
      y=primeArray[primeArray.length - 2];
    }  else {
      divider = primeArray[primeArray.length - 1];
      y=primeArray[primeArray.length - 1];
    }

    let firstDivider = divider;
    while (number >= divider) {
      divisionResultArray.push(Math.floor(number/divider));
      divider*= firstDivider;
    }

    for (let i=1; i<=(primeArray.length-1); i++) {
      if(primeArray[primeArray.length - i] == primeArray[primeArray.length - (i+1)]) {
        quantityPrimeNumber++;
        continue;
    }
      if(quantityPrimeNumber==1 && (primeArray[primeArray.length - 1] <= quantityAnotherNumber)) {
        quantityPrimeNumber++;
        i++;
       } else {
        break;
      }
    }

    divisionResultArray.forEach(function(item, i, arr) {
      privateAmount += item;
    });

    let zeros = privateAmount / quantityPrimeNumber;
    zeros = Math.floor(zeros);
    return(zeros);
  }