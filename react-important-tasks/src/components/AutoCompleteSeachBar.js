import React, { useEffect, useState } from 'react'

const AutoCompleteSeachBar = () => {
    const [data, setData] = useState([]); // Stores API data
    const [name, setName] = useState(""); // Stores user input
    const [suggestion, setSuggestion] = useState([]); // Stores filtered results
  
    // Fetch user data from API
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        setData(json);
      };
      fetchData();
    }, []);
  
    // Handle input change
    const handleChange = (e) => {
      setName(e.target.value);
    };
  
    // Debounced Filtering Logic
    useEffect(() => {
      const debounce = setTimeout(() => {
        if (name.trim() === "") {
          if (suggestion.length > 0) setSuggestion([]); // Prevent unnecessary re-renders
          return;
        }
  
        setSuggestion(
          data.filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase())
          )
        );
      }, 500);
  
      return () => clearTimeout(debounce); // Cleanup timeout
    }, [name, data]); // ✅ Only runs when `name` changes
  
    return (
      <div>
        <h1>Hello Bhawani...</h1>
        <h4>------------------------ AutoComplete Search Bar ---------------------</h4>
        <input
          type="text"
          placeholder="Search here"
          value={name}
          onChange={handleChange}
        />
        {suggestion.length > 0 &&
          suggestion.map((item) => <p key={item.id}>{item.name}</p>)}
      </div>
    );
  }  

export default AutoCompleteSeachBar
