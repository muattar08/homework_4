let month = parseInt(prompt("Введите номер месяца (1-12):"));
let year = parseInt(prompt("Введите год:"));

if (isNaN(month) || month < 1 || month > 12) {
  alert("Ошибка: номер месяца должен быть от 1 до 12");
} else if (isNaN(year) || year < 1) {
  alert("Ошибка: введите корректный год");
} else {
  let isLeap = false;

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeap = true;
  }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert("31 день");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert("30 дней");
      break;
    case 2:
      if (isLeap) {
        alert("29 дней (високосный год)");
      } else {
        alert("28 дней");
      }
      break;
  }
}
