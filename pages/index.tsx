import PlayIcon from 'heroicons/outline/play.svg';
import StopIcon from 'heroicons/outline/stop.svg';
import { Button } from '../components/SpeedButton';
import { useState, useEffect, FC } from 'react';
import { CountDown } from '../components/CountDown';
import { StartButton } from '../components/StartButton';
import { Alert } from '../components/Alert';

export default function Timer() {
    const [input, setInput] = useState(0);
    const [speed, setSpeed] = useState(1000);
    const [timerOn, setTimerOn] = useState(false);
    const handleOnChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };
    const startTimer = () => setTimerOn(true);
    const resetTimer = () => {
        setTimerOn(false);
        setInput(input);
    };
    return (
        <div className="w-screen h-screen bg-gray-300 flex justify-center items-center">
            <main>
                <div className="space-y-2  border-2 border-solid border-blue-500 p-6 rounded-lg shadow-xl">
                    {input < 0 && (
                        <Alert
                            title={'Alert'}
                            message={'Only positive integers valid for input'}
                        />
                    )}

                    <div className="flex items-center space-x-2">
                        <div className="w-full">Countdown (min): {input}</div>
                        <input
                            min={0}
                            onChange={(e) => handleOnChange(e)}
                            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-24 appearance-none leading-normal"
                            placeholder="30"
                            type="number"
                        />
                        {timerOn ? (
                            <StartButton onClick={resetTimer} label="reset" />
                        ) : (
                            <StartButton
                                isDisabled={input < 0}
                                onClick={startTimer}
                                label="start"
                            />
                        )}
                    </div>
                    <div className="flex items-center justify-center">
                        <div
                            style={{ fontSize: '120px' }}
                            className="text-gray-900"
                        >
                            {timerOn ? (
                                <CountDown
                                    inputMinutes={input}
                                    speed={speed}
                                    // timerOn={timerOn}
                                />
                            ) : (
                                `${input} min`
                            )}
                        </div>
                        <PlayIcon className="h-12 w-12 text-gray-900 mr-2" />
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button label={'1X'} onClick={() => setSpeed(1000)} />
                        <Button label={'1.5X'} onClick={() => setSpeed(750)} />
                        <Button label={'2X'} onClick={() => setSpeed(500)} />
                    </div>
                </div>
            </main>
        </div>
    );
}
