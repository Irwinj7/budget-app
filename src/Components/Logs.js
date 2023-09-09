import { useState, useEffect } from "react";
import Log from "./Log.js"
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Logs(){
    const [logs, setLogs] = useState([]);
    useEffect(() => {
        axios
            .get(`${API}/logs`)
            .then((resposne) => setLogs(resposne.data))
            .catch((e) => console.error("catch", e));
    }, []);

    return (
        <div className="Logs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Transaction</th>
                            <th>Amount</th>
                            <th>Online</th>
                            <th>Transaction Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => {
                            return <Log key={index} log={log} index={index}/>
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Logs