'use client'
import { useEffect, useState } from "react";
import classes from "./queue-table-styles.module.css";

function QueueTable() {
  const [queue, setQueue] = useState([]);

  async function getAllRequests() {
    const res = await fetch("http://localhost:8080/requests", { method: "GET" });
    const resJSON = await res.json(); 
    setQueue(resJSON);
  }

  async function clearQueue() {
    const ok = confirm("Delete ALL requests from Firebase?");
    if (!ok) return;

    const res = await fetch("http://localhost:8080/requests", { method: "DELETE" });
    if (!res.ok) {
      const msg = await res.text();
      alert(msg || "Failed to clear queue");
      return;
    }
    setQueue([]); 
  }

  useEffect(() => {
    getAllRequests();
  }, []);

  return (
    <div>
      <h2>Queue</h2>
      {}
      <button onClick={clearQueue} style={{ marginLeft: 8 }}>Clear Queue</button>
      <br /><br />
      <table className={classes.table}>
        <tbody>
          <tr className={classes.row}>
            <th>Song Title</th>
            <th>Artist</th>
            <th>Requested By</th>
          </tr>
          {queue.map((req, i) => (
            <tr key={req.id ?? i} className={classes.row}>
              <td>{req.title}</td>
              <td>{req.artist}</td>
              <td>{req.name}</td>
            </tr>
          ))}
          {!queue.length && (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", opacity: 0.7 }}>
                Queue is empty
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default QueueTable;
