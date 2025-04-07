export const fetchCenters = async (page: number) => {
  const response = await fetch('/Risloo-Center-Sample.json');
  const data = await response.json();
  const itemsPerPage = 10;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return data.slice(start, end);
};