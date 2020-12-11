function ex_01 () {
    let el = [1, 2, 3, 4, 5],
    j = 0;
    for (let i = 0; i < 5; i++, j++) {
        document.write(el[j] + '<br/>')
    }
}

function ex_02 () {
    let m = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7],
    j = 0,
    i = m.length;
    for (; i != 0; i--, j++) {
        if (m[j] > -10 && m[j] < -3){document.write(m[j] + '<br/>')}
    }
}

function ex_03 () {
    let x = [],
    y = [],
    i = 23,
    j = 0,
    result = 0;
    for (; i < 57; i++, j++) {
        x[j] = i  + ' ';
        result += i;
    }
    i = 23;
    j = 0;
    while(i < 57){
        y[j] = i + ' ';
        i++;
        j++;
    }
    document.write('Массив через for: ' + x + '<br/>' + 'Массив через while: ' + y + '<br/>' + 'Result = ' + result);
}
function ex_04 () {
    let x = ['10', '20', '30', '50', '235', '3000'],
    i = length.x,
    j = 0;
    for (; i != 0; i--, j++) {
        if (x[j].substr(0, 1) == 1 || x[j].substr(0, 1) == 2 || x[j].substr(0, 1) == 5){
            document.write(x[j] + '<br/>')
        }
    }
}

function ex_05 () {
    let x = ['ПН', 'ВТ', 'CP', 'ЧТ', 'ПТ', 'СБ', 'ВСК'],
    i = 0;
    for (;i < 7; i++) {
        if ( i == 5 || i == 6){
            document.write('<strong>' + x[i] + '</strong>' + '  ')
        }
        else{document. write(x[i] + '  ')}
    }
}

function ex_06 () {
    let x = [1, 2 ,3 , 4, 5, 6, 7],
    y = prompt('введите элемент массива:'),
    i = x.length;
    x[i] = y;
    document.write('полученный массив:' + x + '<br/>' + 'Последний элемент массива: ' + x[i])
}

function ex_07 () {
    let x = [],
    i = 0;
    for (;;) {
       let y = prompt('введите элемент массива:');
       if (y == '') {
           document.write('введенный массив: ' + x);
            break;
        }
       else if (isNaN(y) || y == null){alert('введено недопустимое значение!!!')}
       else{
           for (; ; i++) {
            x.push(y)
            break;
           }
       }
    }
    x.sort(function (a, b) {return a - b});
    document.write('<br/>' + 'сортированный массив: ' + x);
}

 function ex_08 () {
    let a = [12, false, 'Текст', 4, 2, -5, 0],
    x = a.reverse();
    document.write(x);
 }

 function ex_09 () {
     let a = [5, 9, 21, , , 9, 78, , , , 6],
     j = 0;
     for (let i of a){
         if (i == null) {j++;}
     }
     alert(j);
 }

 function ex_10 () {
     let a = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
     b = [1,8,0,13,76,8,7,0,22,0,2,3,2];
     for ( let i of a) {
         if (i == '0') {

         }
     }
 }

 function ex_11 () {
    let i = 0, 
    j = 0,
    h = 5,
    space = "",
    s = "";
    
    while (i < h) {
        space = "";
        star = "";
        for (j = 0; j < h - i; j++) space += " ";
        for (j = 0; j < i + 1; j++) s += "^";
        console.log(space + s);
        i++;
    }
 }