import getLocalStorage from "./getlocal";

function setItemLocal(key, book) {
  const getitem = getLocalStorage(key);
  const newlocal = [...getitem, book];

  localStorage.setItem(key, JSON.stringify(newlocal));
}

export default setItemLocal;
