function add(a, b) {
    let toAdd = 0;
    let lengthOfA = a.length;
    let lengthOfB = b.length;
    let difference = 0;
    let sum = [];
    let sumString = "";

    let arrayOfA = Array.from(a);
    let arrayOfB = Array.from(b);

    if (lengthOfA < lengthOfB) {
        difference = lengthOfB - lengthOfA;
        for (let i = 0; i < difference; i++) {
            // inserts zeroes at the beginning of array difference times
            arrayOfA.unshift("0");
        }
    } else {
        difference = lengthOfA - lengthOfB;
        for (let i = 0; i < difference; i++) {
            arrayOfB.unshift("0");
        }
    }

    for (let j = arrayOfA.length - 1; j >= 0 ; j--) {
        if (parseInt(arrayOfA[j]) + parseInt(arrayOfB[j]) + toAdd <= 9) {
            sum.unshift((parseInt(arrayOfA[j]) + parseInt(arrayOfB[j]) + toAdd).toString());
            toAdd = 0;
        } else if (parseInt(arrayOfA[j]) + parseInt(arrayOfB[j]) + toAdd === 10) {
            sum.unshift("0");
            toAdd = 1;
        } else if (parseInt(arrayOfA[j]) + parseInt(arrayOfB[j]) + toAdd > 10) {
            sum.unshift((parseInt(arrayOfA[j]) + parseInt(arrayOfB[j]) + toAdd).toString()[1]);
            toAdd = 1;
        }
    }
    if (toAdd === 1) {
        sum.unshift("1");
    }
    for (let num of sum) {
        sumString += num;
    }
    return sumString;

}

