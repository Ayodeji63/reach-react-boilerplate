import { Button } from "../Components";
import { GameOutcome } from "../utils/constants";

export function GameOutcomeView ({ outcome, playAgain }) {
    return (
      <div className="Outcome">
        <h2>
            {
                outcome === GameOutcome.WINNER?
                `You win!!! Good job`
                :
                outcome === GameOutcome.LOSS?
                `You lose! Oops. Better luck next time.`
                :
                `It was a draw...`
            }
        </h2>
       <Button 
       text='Play Again'
       click = {playAgain}
       />
       {/* onClick={() => window.location.reload()} */}
      </div>
    );
  }
  