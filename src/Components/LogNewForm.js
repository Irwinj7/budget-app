import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const navigate = useNavigate();
  const [log, setlog] = useState({
    date: "",
    transDesc: "",
    detailDesc: "",
    onlineTrans: false,
    amount: 0,
  });

  const addlog = (log) => {
    axios
    .post(`${API}/logs`, log)
    .then(
    () => {
    navigate(`/logs`);
    })
    .catch((c) => console.error("catch", c));
   };

  const handleTextChange = (event) => {
    setlog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setlog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addlog(log);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date of Transaction:</label>
          <input
            id="DateOfTransaction"
            value={log.date}
            type="text"
            onChange={handleTextChange}
            placeholder="Date of Transaction (month/dd)"
            required
          />
        <label htmlFor="transDesc">Brief Description:</label>
          <input
            id="Memo"
            type="text"
            required
            value={log.transDesc}
            placeholder="Quick Description (3 words or less)"
            onChange={handleTextChange}
          />
        <label htmlFor="detailDesc">Detailed description:</label>
          <textarea
            id="detailDesc"
            type="text"
            name="detailDesc"
            value={log.detailDesc}
            placeholder="Longer description if wanted or needed"
            onChange={handleTextChange}
          />
        <label htmlFor="onlineTrans">Online transaction? :</label>
          <input
            id="onlineTrans"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={log.onlineTrans}
          />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;