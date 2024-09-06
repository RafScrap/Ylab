const _ = require("lodash");

const arrData = [
  {
    login: "alex@mail.ru",
    password: "1"
  },
  {
    login: "max@mail.ru",
    password: "1"
  } 
];

export function get(data) {
    const delay = Math.floor(Math.random() * 1000) + 500;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
/*        if (!arrData.includes(data)) {
          reject(
            `Неправильный логин или пароль.`
          );
        };*/
        const response = { status: 200, data: (_.findIndex(arrData, data, 0) != -1)};
        resolve(response);
      }, delay);
    });
}