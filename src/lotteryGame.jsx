import { useState } from "react";

import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n=3, winningsum =15}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningsum;

  let buyNewTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!!!</h1>

      <Ticket ticket={ticket} />
<br />
      <button onClick={buyNewTicket}>Buy New Ticket</button>

      <h3>{isWinning && "Congratulation You Won !!"}</h3>
    </div>
  );
}
