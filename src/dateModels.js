export const getDayOfWeek = (day) => {
  const DAYS_IN_WEEK = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return DAYS_IN_WEEK[day];
};

export const getShortDayOfWeek = (day) => {
  const SHORT_NAME_DAYS_IN_WEEK = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  return SHORT_NAME_DAYS_IN_WEEK[day];
};

export const getMonthName = (month) => {
  const MONTHS_IN_YEAR = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return MONTHS_IN_YEAR[month];
};
