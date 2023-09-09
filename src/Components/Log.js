import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr className="Log">
      <td>
        {log.date}
      </td>
      <td>
        <Link to={`/logs/${index}`}>{log.transDesc}</Link>
      </td>
      <td>
        {log.amount ? (
          <td>${log.amount}</td>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        {log.onlineTrans ? (
          <span>✅</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td> {index + 1}</td>
    </tr>
  );
}

export default Log;