'use client'
import { useState } from "react";
import classes from "./new-song-form-styles.module.css";

function NewSongForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [songsAdded, setSongsAdded] = useState(0);

  async function onSubmit() {
    const newSongBody = { name, title, artist };

    if (!name.trim() || !title.trim() || !artist.trim()) {
      alert("Please fill in your name, song title, and artist.");
      return;
    }

    const res = await fetch("http://localhost:8080/requests", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSongBody),
    });

    if (!res.ok) {
      alert("Failed to add song");
      return;
    }

    setName("");
    setTitle("");
    setArtist("");

    setSongsAdded(n => n + 1);
  }

  return (
    <div>
      <h2>Add New Song Request</h2>

      <div className={classes.mainForm}>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Athena"
          />
        </div>
        <div>
          <label htmlFor="title">Song Title:</label>
          <input
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Levitating"
          />
        </div>
        <div>
          <label htmlFor="artist">Artist:</label>
          <input
            name="artist"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
            placeholder="Dua Lipa"
          />
        </div>
      </div>


      <button type="button" onClick={onSubmit}>Submit</button>

      <p className={classes.counter}>Songs added: {songsAdded}</p>
    </div>
  );
}

export default NewSongForm;
