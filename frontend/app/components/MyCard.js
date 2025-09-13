"use client";
import { useEffect, useState } from "react";
import classes from "./my-card-styles.module.css";

function MyCard(props) {
  

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>🎶 Welcome to the Song Request Booth</h2>
      <p className={classes.text}>
        Add your favorite songs below and watch them appear in the queue!
      </p>
    </div>
  );
}

export default MyCard;
