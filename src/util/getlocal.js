function getLocalStorage(key) {
  const getitem = JSON.parse(localStorage.getItem(`${key}`));
  if (getitem) {
    return getitem;
  } else {
    return [];
  }
}

export default getLocalStorage;
