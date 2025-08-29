import React, { useState, useEffect, createContext } from "react";

export const Ecart = createContext();

function Context(props) {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [cart, setcart] = useState([]);
 const [dropdownOpen, setDropdownOpen] = useState(false);
   const [showSearch, setShowSearch] = useState(false);

  const url = "https://fakestoreapi.com/products/";

  const remove = (index) => {
    const update = cart.filter((value, id) => index !== id);
    setcart(update);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const searchTerm = search.toLowerCase();
    if (searchTerm === "") return true;
    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  });

  const handleclick = (item) => {
    setcart((prev) => [...prev, item]);
  };
  


const handleSearchToggle = () => {
  setShowSearch(!showSearch);
};
  
  
  const value = {
    data,
    search,
    setsearch,
    filteredData,
    cart,
    setcart,
    handleclick,
    remove,
    dropdownOpen, 
    setDropdownOpen,
    showSearch,
    setShowSearch,
    handleSearchToggle
  };

  return (
    <Ecart.Provider value={value}>
      {props.children}
    </Ecart.Provider>
  );
}

export default Context;
