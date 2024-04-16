// longest word in a strong

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  strArr = str.split(" ");
  words = strArr.sort((a, b) => a.length - b.length);
  console.log(words);
};

console.log(findLongestWord("Ca Bananarr Applerrr Dogrrr rrr rr ssssssafdsa"));
