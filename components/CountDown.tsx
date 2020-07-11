import { FC, useState, useEffect } from 'react';
import PlayIcon from 'heroicons/outline/play.svg';
import PauseIcon from 'heroicons/outline/pause.svg';
interface ICountDown {
    inputMinutes: number;
    speed: number;
}

export const CountDown: FC<ICountDown> = ({ inputMinutes, speed }) => {
    const inputSeconds = inputMinutes * 60;
    const calculateTimeLeft = (remainingTime: number) => {
        let timeRemaining = {};
        if (count > 0) {
            timeRemaining = {
                ':': Math.floor((remainingTime % 3600) / 60),
                s: Math.floor((remainingTime % 3600) % 60),
            };
        }
        return timeRemaining;
    };

    const [count, setCount] = useState(inputSeconds);
    const [timeRemaining, setTimeRemaining] = useState(
        calculateTimeLeft(count)
    );

    const decrementCount = () => {
        setCount(() => count - 1);
        return count;
    };
    useEffect(() => {
        const id = setTimeout(() => {
            setTimeRemaining(calculateTimeLeft(decrementCount()));
        }, speed);
        () => clearTimeout(id);
    }, [count]);

    const timerComponents = [];

    Object.keys(timeRemaining).forEach((interval) => {
        if (!timeRemaining[interval]) {
            return;
        }
        timerComponents.push(
            <span key={interval}>
                {timeRemaining[interval]} {interval}{' '}
            </span>
        );
    });

    return (
        <div className="flex items-center justify-center">
            <div style={{ fontSize: '120px' }} className="text-gray-900">
                {timerComponents.length ? (
                    timerComponents
                ) : (
                    <span>Time's up!</span>
                )}
            </div>
        </div>
    );
};
