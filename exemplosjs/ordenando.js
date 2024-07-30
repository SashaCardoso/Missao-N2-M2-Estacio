//variables
const array = [];

//functions
const swap = (array, index1, index2) => {
    let temp = array[index1]; 
    array[index1] = array[index2];
    array[index2] = temp;
}

const shuffle = (array, iterations = 1) => {
    for (let i = 0; i < iterations; i++) {
        let currentIndex = array.length;

        while (currentIndex != 0) {

            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    }
}

const bubble_sort = (array) => {
    for (var i = 0; i < array.length; i++) {

        for (var j = 0; j < (array.length - i - 1); j++) {

            if (array[j] > array[j + 1]) {

                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}

const selection_sort = (array) => {
    let n = array.length; 
      
    let min; 
      
    let i , j; 
    
    for ( i = 0; i < n - 1; ++i ) { 
        min = i; 
        for(j = i + 1; j < n; j++) { 
            if(array[j] < array[min]) min = j; 
        } 
          
        if ( min != i ) 
        swap(array, min, i); 
    } 
}

const partition = (array, low, high) => { 
    let pivot = array[high]; 
    let i = low - 1; 
  
    for (let j = low; j <= high - 1; j++) { 
        if (array[j] < pivot) { 
            i++; 
            [array[i], array[j]] = [array[j], array[i]];  
        } 
    } 
    [array[i + 1], array[high]] = [array[high], array[i + 1]];  
    return i + 1;
} 

const quick_sort = (array, low, high) => {
    if (low >= high) return; 
    let pi = partition(array, low, high); 
  
    quick_sort(array, low, pi - 1); 
    quick_sort(array, pi + 1, high); 
}

const add = () => {
    array.push( Number( document.getElementById('value').value ) );
    displayValuesArray();
    console.log(array);
}

const displayValuesArray = () => {
    let listitemsHtml = "";
    array.forEach((val) => {
        listitemsHtml += `<li>${val}</li>`
    });
    document.getElementById('list').innerHTML = listitemsHtml;
}

const sort = () => {
    let method = document.getElementById('method').value;
    switch (method) {
        case 'bubble':
            bubble_sort(array);
        case 'selection':
            selection_sort(array);
        case 'quick':
            quick_sort(array, 0, array.length -1);
    }
    displayValuesArray();
}

const shuffleArray = () => {
    shuffle(array);
    displayValuesArray();
}
