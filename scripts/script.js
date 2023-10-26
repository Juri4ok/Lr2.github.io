let first = document.getElementById('1');
let second = document.getElementById('2');
let thirth = document.getElementById('3');
let fourth = document.getElementById('4');
first.addEventListener("click", function(){
	let myDate = new Date();

	// Встановіть рік, місяць, день, години та хвилини
	myDate.setFullYear(2021, 1, 20); // Місяць 1 відповідає лютому (місяці в JavaScript нумеруються з 0)
	myDate.setHours(3, 12, 0, 0); // 3:12 ранку

	// Тепер виведіть дату у документ
	document.write("Завдання №1 <br>" + myDate);


	}
)
second.addEventListener("click", function(){
	function getValidDateInput() {
	  let inputDate;
  do {
    inputDate = prompt('Введіть дату (рррр-мм-дд):');
  } while (!isValidDate(inputDate));
  return new Date(inputDate);
}
	function isValidDate(dateString) {
	  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
	  if (!dateRegex.test(dateString)) {
	    alert('Невірний формат дати. Будь ласка, використовуйте рррр-мм-дд.');
	    return false;
	  }
	  const date = new Date(dateString);
	  if (isNaN(date.getTime())) {
	    alert('Невірна дата. Будь ласка, введіть коректну дату.');
	    return false;
	  }
	  return true;
	}
	let myDate = getValidDateInput(); // Припустимо, що ця дата - це неділя
	let weekDay = getWeekDay(myDate); // Отримаємо "НД"
	document.write("Завдання №2 <br>" + weekDay);;
})
function getWeekDay(date) {
  const daysOfWeek = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}
thirth.addEventListener("click",function() {
	function getLastDayOfMonth(year, month) {
		const date = new Date(year, month + 1, 0);
		return date.getDate();
	}

	// Приклади використання:
	document.write("Завдання №3<br>")
	document.write("Рік 2020 Місяць 1 кількість місяців=" +getLastDayOfMonth(2020, 1)+"<br>");
	document.write("Рік 2023 Місяць 1 кількість місяців=" +getLastDayOfMonth(2023, 1)+"<br>");
	document.write("Рік 2023 Місяць 11 кількість місяців=" +getLastDayOfMonth(2023, 11)+"<br>");
})
fourth.addEventListener("click",function() {
	const currentDate = new Date();
	const oneSecondAgo = new Date(currentDate - 1000);
	const oneMinuteAgo = new Date(currentDate - 60000);
	const oneHourAgo = new Date(currentDate - 3600000);
	const customDate = new Date(2023, 0, 15, 10, 30);
	document.write("Завдання №4<br>")
	document.write(formatDate(currentDate)+"<br>"); // "прямо зараз"
	document.write(formatDate(oneSecondAgo)+"<br>"); // "1 сек. назад"
	document.write(formatDate(oneMinuteAgo)+"<br>"); // "1 хв. назад"
	document.write(formatDate(oneHourAgo)+"<br>"); // "1 хв. назад"
	document.write(formatDate(customDate)+"<br>"); // "15.01.23 10:30"
})
function formatDate(date) {
  const now = new Date();
  const diff = now - date;

  if (diff < 1000) {
    return "прямо зараз";
  } else if (diff < 60000) {
    const seconds = Math.floor(diff / 1000);
    return `${seconds} сек. назад`;
  } else if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} хв. назад`;
  } else {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}