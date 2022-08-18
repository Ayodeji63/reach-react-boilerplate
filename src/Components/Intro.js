import React from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import { Header } from "./Header";
import { State } from "./State";

export function Intro({ display, setDisplay, setPlayer }) {
  function change(player) {
    setDisplay(false);
    setPlayer(player);
  }
  return (
    <section className={`Intro ${display == true ? "show" : "hide"}`}>
      <Header
        text1="Welcome To"
        text2="BlackJack"
        span="Game"
        spanClass="Intro__span"
        class2="Intro__sub"
      />
      <State text="Ready To Bet" />
      <img src="./images/black.png" height="300px" />
      <State text="Choose A Role..." />
      <div className="Intro__Btn">
        <Button
          text="Deployer"
          type="Intro__Dealer"
          click={() => {
            change("Deployer");
          }}
        />
        <Button
          text="Attacher"
          type="Intro__Attacher"
          click={() => {
            change("Attacher");
          }}
        />
      </div>
    </section>
  );
}
