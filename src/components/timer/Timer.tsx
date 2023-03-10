import React, { useState, useEffect, useCallback } from 'react'

type Props = {
    redirect: (path: string) => void;
}

const Timer = (props: Props) => {
    // The state for our timer
    const [timer, setTimer] = useState('00');

    const getTimeRemaining = (e: Date) => {

        const total = Date.parse(e.toString()) - Date.parse(new Date().toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
    const startTimer =useCallback((e: Date) => {
        let { total, seconds }   = getTimeRemaining(e);
        if (total >= 0) {

            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                "0" + seconds
            )
        } else props.redirect('/solving')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const clearTimer = useCallback((e: Date) => {
           // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('05');
        setInterval(() => {
            startTimer(e);
        }, 1000)
      }, [startTimer])
   
    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 5);
        return deadline;
    }
    useEffect(() => {
        (async () => {
          const time = await getDeadTime();
          clearTimer(time);
        })();
      
      }, [clearTimer]);
   

    return (

        <div className='padding-5'>{timer}</div>

    )
}

export default Timer;