import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// , withRouter
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogDetails(){
    const [log, setLog] = useState([]);
    let { index } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${API}/logs/${index}`)
            .then((response) => {
                setLog(response.data);
            })
            .catch(() => {
                navigate("/not-found");
            });
    }, [index, navigate]);

    const handleDelete = () => {
        axios
          .delete(`${API}/logs/${index}`)
          .then(() => {
            navigate(`/logs`);
          })
          .catch((e) => console.error(e));
      };
    
    return (
        <article>
        <h3>
          {log.transDesc} - Occured on {log.date}
        </h3>
        <h3>
          Description:
        </h3>
          <h3>"{log.detailDesc}"</h3>
          <h3>${log.amount}</h3>
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/logs`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            {" "}
            <Link to={`/logs/${index}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            {" "}
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    );
  }

export default LogDetails