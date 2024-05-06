import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const fname = useRef();
  const lname = useRef();
  const age = useRef();

  const [result, setresult] = useState([]);
  const [view, setview] = useState({});

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("data")) || [];
    setresult([...arr]);
  }, []);

  const handleSave = () => {
    const data = {
      fname: fname.current.value,
      lname: lname.current.value,
      age: age.current.value,
    };

    const updatedResult = [...result, data];

    localStorage.setItem("data", JSON.stringify(updatedResult));
    setresult(updatedResult);
  };

  const handleDelete = (index) => {
    const updatedResult = [...result];
    updatedResult.splice(index, 1);

    localStorage.setItem("data", JSON.stringify(updatedResult));
    setresult(updatedResult);
  };

  const handleView = (val, ind) => {
    setview(val);
  };

  const handleUpdate = () => {
  };

  return (
    <div className="container">
      <div className="input-section">
        <input
          type="text"
          name="fname"
          value={view.fname || ""}
          onChange={(e) => setview({ ...view, [e.target.name]: e.target.value })}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lname"
          value={view.lname || ""}
          onChange={(e) => setview({ ...view, [e.target.name]: e.target.value })}
          placeholder="Last Name"
        />
        <input
          type="number"
          name="age"
          value={view.age || ""}
          onChange={(e) => setview({ ...view, [e.target.name]: e.target.value })}
          placeholder="Age"
        />
        <button className="update-btn" onClick={handleUpdate}>Update</button>
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>

      <div className="result-section">
        {result.map((val, ind) => (
          <div key={ind} className="result-item">
            <h1>{val.fname}</h1>
            <button className="delete-btn" onClick={() => handleDelete(ind)}>Delete</button>
            <button className="view-btn" onClick={() => handleView(val, ind)}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
