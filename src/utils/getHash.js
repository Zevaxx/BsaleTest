
const getHash = () => {
  if (location.hash) {
    const hash = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

    return hash;
  } else if (location.search) {
    const hash = location.search.slice(1).toLocaleLowerCase() || '/';
    return hash;
  }
};
export default getHash;
