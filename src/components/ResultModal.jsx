import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({targetTime, onReset, remainingTime}, ref){
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 1000);
    
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    }); //must receive 2 parameters
    return createPortal(
        <dialog ref={dialog} className="result-modal">
            <h2>You {userLost ? 'lost :(' : 'won!'}</h2>
            <h2>Your score: {score}</h2>
            <p>The target time was <strong>{targetTime} seconds</strong>.</p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method='dialog'>
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
})

export default ResultModal;