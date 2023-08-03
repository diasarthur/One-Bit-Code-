const dayjs = require("dayjs")

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageYears = today.diff(birthday, 'years');
  const nextYears = birthday.add(ageYears + 1, 'year')
  const daysToNextBirthday = nextYears.diff(today, 'day')


  console.log(`Idade: ${ageYears}`);
  console.log(`Proximo aniversário é em: ${nextYears.format("DD/MM/YYYY")}`);
  console.log(`Dias até completar ${ageYears + 1} anos: ${daysToNextBirthday}`)
};



birthday("2003-02-11")