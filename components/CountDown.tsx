import { FC, useState, useEffect } from 'react';

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
        if (speed !== null) {
            const id = setInterval(() => {
                setTimeRemaining(calculateTimeLeft(decrementCount()));
            }, speed);
            return () => clearTimeout(id);
        }
    }, [speed, count]);

    const timerComponents = [];

    Object.keys(timeRemaining).forEach((interval) => {
        if (!timeRemaining[interval]) {
            return;
        }
        if (interval === ':') {
            timerComponents.push(
                <span key={interval}>
                    {timeRemaining[interval].toString().length === 1 ? '0' : ''}
                    {timeRemaining[interval]} {interval}{' '}
                </span>
            );
        } else {
            timerComponents.push(
                <span key={interval}>
                    {timeRemaining[interval].toString().length === 1 ? '0' : ''}
                    {timeRemaining[interval]}{' '}
                </span>
            );
        }
    });

    return (
        <div
            className={`${count < 20 ? 'text-red-600' : ''} ${
                count < 10 ? 'blinking text-red-600 text' : ''
            }`}
        >
            {timerComponents.length ? (
                <div>
                    {count <= inputSeconds / 2 && (
                        <div className="text-lg leading-tight text-center">
                            Over half way there
                        </div>
                    )}
                    {timerComponents}
                </div>
            ) : (
                <span>Time's up!</span>
            )}
        </div>
    );
};

export const DisplayContainer = ({ children }) => {
    return (
        <div className="flex items-center justify-center">
            <div style={{ fontSize: '120px' }} className="text-gray-900 flex">
                {children}
            </div>
        </div>
    );
};
