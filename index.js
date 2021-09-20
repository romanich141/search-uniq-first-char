// Import stylesheets
import './style.css';

const string = 'hello my name is Will';

const search = (str = '') => {
  str = [...str].join(',').replaceAll(' ', '');

  const map = new Map();

  for (const char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (const char of str) {
    if (map.get(char) === 1) {
      return char;
    }
  }

  retun - 1;
};

console.log(search(string));
