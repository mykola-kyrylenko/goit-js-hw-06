import users from "./users.js";
// Получить массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
const getSortedUniqueSkills = (users) => {
  const usersSkills = users.reduce((usersSkills, user) => {
    return usersSkills.concat(user.skills);
  }, []);
  return usersSkills
    .filter((skill, i) => usersSkills.indexOf(skill) === i)
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
