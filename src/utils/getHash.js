const getHash = () => {
    
    if (location.hash) {
      let hash = location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
    
      return hash;
    } else if (location.search) {
      
      let hash = location.search.slice(1).toLocaleLowerCase() || "/";
      return hash;
    }

    

  };
export default getHash;