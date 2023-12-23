const formatDate = (inputDate) => {
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const date = new Date(inputDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${day < 10 ? "0" + day : day} ${months[monthIndex]} ${year}`;
  return formattedDate;
};

export { formatDate };
