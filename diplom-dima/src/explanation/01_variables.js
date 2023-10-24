/**
 * Переменная объявляется в js с помощью ключевых слов let или const
 * 
 */


// При объявлении переменной через let, мы можем в дальшейшем перезаписать данные
let timeoutDuration;

timeoutDuration = 100;

console.log(timeoutDuration); // выведет 100



// При объявлении переменной через const необходимо сразу её проинициализировать, в дальшейшем перезаписать мы её не можем
const itemsPerPage = 10;

itemsPerPage = 100;
//           ^ Вызовет ошибку

