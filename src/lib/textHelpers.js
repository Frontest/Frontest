String.prototype.latin2Persian = function () {
  const latinNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let result = "";

  for (let i = 0; i < this.length; i++) {
    const char = this.charAt(i);
    const index = latinNumbers.indexOf(char);

    if (index !== -1) {
      result += persianNumbers[index];
    } else {
      result += char;
    }
  }

  return result;
};

String.prototype.persian2Latin = function () {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const latinNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = "";

  for (let i = 0; i < this.length; i++) {
    const char = this.charAt(i);
    const index = persianNumbers.indexOf(char);

    if (index !== -1) {
      result += latinNumbers[index];
    } else {
      result += char;
    }
  }

  return result;
};
