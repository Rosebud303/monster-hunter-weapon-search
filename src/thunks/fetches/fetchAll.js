const fetchAll = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw Error(response.statusText);
  return response.statusText === 'No Content' ? null : await response.json();
}

export default fetchAll;