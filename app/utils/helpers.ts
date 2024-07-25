export function calculateDuration(birthday: any) {
  const now = new Date();
  const birthDate = new Date(birthday);

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  const days = now.getDate() - birthDate.getDate();

  // If the month difference is negative or we're in the same month but the current day is earlier in the month,
  // we need to adjust the year and month values.
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    if (months < 0) {
      months += 12;
      years--;
    }
  }

  return { years, months };
}
