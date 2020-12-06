const dateFormatter = dateString => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;

  return `${year}-${month}-${day}`;
} 

export default dateFormatter;