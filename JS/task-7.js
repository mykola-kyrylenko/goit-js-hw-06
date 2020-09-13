import users from "./users.js";
// Получить общую сумму баланса(поле balance) всех пользователей.

const calculateTotalBalance = (users) => {
  // твой код
  return users.reduce((accumulator, user) => accumulator + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
