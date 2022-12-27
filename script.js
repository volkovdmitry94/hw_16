const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];

// Functions for onclick event
function test1() {
    console.log('Task 1: Married persons');
    console.log(filterMarried(database)); // expected 3 persons - John, Jane, George
}

function test2() {
    console.log('Task 2: Sorted by age ASC');
    console.log(sortByAge(database));
}

function test3() {
    console.log('Task 3: Average age');
    console.log(averageAge(database)); // expected 29.5
}

function test4() {
    console.log('Task 4: Statistics by country');
    console.log(JSON.stringify(statisticsByCountry(database))); // expected Israel: 3, Belgium: 1, France: 2
}

function test5() {
    console.log('Task 5:');
    console.log('Married persons sorted ASC by name');
    console.log(sortByName(filterMarried(database))); // expected 3 persons - George, Jane, John
    console.log('Not married persons sorted DESC by age');
    console.log(sortByAgeDesc(filterNotMarried(database))); // expected 3 persons - Mary, Bill, Hanna
    console.log('Average age of married persons');
    console.log(averageAge(filterMarried(database))); // expected 129 / 3 = 43
}

function test6() {
    console.log('Task 6: Remove user by position');
    console.log('Array');
    console.log(database);
    console.log('Array after removing index 1');
    console.log(removeByPosition(database, 1));
}

// Function for implementation
function filterMarried(array) {
    return array.filter(function(item) {
        return item['isMarried'];
    });
}

function filterNotMarried(array) {
    return array.filter(function(item) {
        return !item['isMarried'];
    });
}

function sortByAge(array) {
    return array.sort(function(a,b) {
        return a['age'] - b['age'];
    });
}

function sortByAgeDesc(array) {
    return array.sort(function(a,b) {
        return b['age'] - a['age'];
    });
}

function sortByName(array) {
    return array.sort(function(a,b) {
        if (a['name'] > b['name']) return 1;
        if (a['name'] === b['name']) return 0;
        if (a['name'] < b['name']) return -1;
    });
}

function averageAge(array) {
    return array.reduce(function(age, item, index) {
        if (index === array.length - 1) {
            return (age + item['age']) / array.length;
        }
        return age + item['age'];
    }, 0);
}

function statisticsByCountry(array) {
    return array.reduce(function(accumObject, item) {
        if (!accumObject[item['country']]) {
            accumObject[item['country']] = 1;
        } else {
            accumObject[item['country']]++;
        }
        return accumObject;
    }, {});
}

function removeByPosition(array, index) {
    const newArray = array.slice();
    newArray.splice(index, 1);
    return newArray;
}

