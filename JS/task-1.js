import users from "./users.js";

// Получить массив имен всех пользователей(поле name).

const getUserNames = users.map((user) => user.name);
// твой код

console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
