import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";    
import axios from "axios";
const API = process.env.REACT_APP_API_URL;


function LogEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();
  
  const [log, setlog] = useState({
    date: "",
    transDesc: "",
    detailDesc: "",
    onlineTrans: false,
    amount: 0,
  });

  const updatelog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        setlog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setlog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setlog({ ...log, isFavorite: !log.isFavorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setlog(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatelog();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <div className="edit-form">
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
            placeholder="Memo"
            onChange={handleTextChange}
          />
          <label htmlFor="detailDesc">Detailed description:</label>
          <textarea
            id="detailDesc"
            type="text"
            name="detailDesc"
            value={log.detailDesc}
            placeholder="Description"
            onChange={handleTextChange}
          />
          <label htmlFor="onlineTrans">Online transaction? :</label>
          <input
            id="onlineTrans"
            type="checkbox"
            onChange={handleCheckboxChange}
            value={log.onlineTrans}
            checked={log.onlineTrans}
          />
        </div>
        <br />
        <br></br>
        <input type="submit" />
        <Link to={`/logs/${index}`}>
          <button>Nevermind!</button>
        </Link>
        <Link to={`/logs/`}>
          <button>Back</button>
        </Link>
        </form>
    </div>
  );
}

export default LogEditForm;