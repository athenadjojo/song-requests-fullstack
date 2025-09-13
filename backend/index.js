import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import { db } from "./utils/FirebaseInit.js";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  writeBatch,  
} from "firebase/firestore";

const app = express();
const port = 8080;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.send("Song Requests API is up");
});

// Get all requests 
app.get("/requests", async (req, res) => {
  console.log("getting all requests")
  const colRef = collection(db, "SongRequests");
  const snap = await getDocs(colRef);
  const docs = [];
  snap.forEach((doc) => {
    docs.push(doc.data())
  })
  res.send(docs)
});

// Add a new request 
app.post("/requests", async (req, res) => {
  const songRef = collection(db, "SongRequests");
  const songBody = req.body
  try{
    await addDoc(songRef, songBody)
  } catch(e) {
    console.error(e)
    res.status(500)
  }
  res.status(200).send("Successfully Submitted Request")
})

app.delete("/requests", async (req, res) => {
  try {
    const colRef = collection(db, "SongRequests");
    const snap = await getDocs(colRef);

    if (snap.empty) {
      return res.status(200).send("Queue already empty");
    }

    const batch = writeBatch(db);
    snap.forEach((d) => {
      batch.delete(doc(db, "SongRequests", d.id));
    });
    await batch.commit();

    res.status(200).send("Cleared queue");
  } catch (e) {
    console.error(e);
    res.status(500).send("Failed to clear queue");
  }
});

function start() {
  app.listen(port, () => {
    console.log(`Started listening on http://localhost:${port}`);
  });
}

start();
