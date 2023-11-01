const today = new Date();
const todayMonth = today.getMonth()+1;
const todayDate = today.getDate();
const todayYear = today.getFullYear();

result = todayYear+"年"+todayMonth+"月"+todayDate+"日";
console.log(result);