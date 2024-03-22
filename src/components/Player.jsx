import { useState, useRef } from "react";

export default function Player() {
  const submittedPlayer = useRef("");

  const [playerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event){
  //   setSubmitted(false)
  //   setPlayerName(event.target.value);
  // }

  function handleClick(){
    // setSubmitted(true);
    setPlayerName(submittedPlayer.current.value);
    submittedPlayer.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={submittedPlayer} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
