import { Button, ButtonGroup, buttons } from '../components/SpeedButtons';
import { useState, useRef, useCallback, useEffect } from 'react';
import { CountDown, DisplayContainer } from '../components/CountDown';
import { Alert } from '../components/Alert';
import { CountDownInput } from '../components/CountDownInput';
import PlayIcon from 'heroicons/outline/play.svg';
import PauseIcon from 'heroicons/outline/pause.svg';

export default function Timer() {
    const [input, setInput] = useState(0);
    const [speed, setSpeed] = useState(1000);
    const [timerOn, setTimerOn] = useState(false);
    const [pausedSpeed, setPausedSpeed] = useState(null);
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
                <div
                    style={{ minWidth: '600px' }}
                    className="space-y-2 border-2 border-solid border-blue-500 p-6 rounded-lg shadow-xl"
                >
                    {input < 0 && (
                        <Alert
                            title={'Alert'}
                            message={'Only positive integers valid for input'}
                        />
                    )}
                    <CountDownInput
                        handleOnChange={handleOnChange}
                        startTimer={startTimer}
                        resetTimer={resetTimer}
                        timerOn={timerOn}
                        input={input}
                        speed={speed}
                    />
                    <DisplayContainer>
                        {timerOn ? (
                            <>
                                <CountDown inputMinutes={input} speed={speed} />
                            </>
                        ) : (
                            `${input} min`
                        )}
                    </DisplayContainer>
                    <ButtonGroup>
                        {buttons.map((button) => (
                            <Button
                                key={button.label}
                                label={button.label}
                                onClick={() => setSpeed(button.speed)}
                            />
                        ))}

                        <button
                            onClick={() => {
                                setPausedSpeed(speed);
                                setSpeed(null);
                            }}
                        >
                            <PauseIcon className="h-24 w-24 text-gray-800 hover:text-gray-500" />
                        </button>

                        <button onClick={() => setSpeed(pausedSpeed)}>
                            <PlayIcon className="h-24 w-24 text-gray-800 hover:text-gray-500" />
                        </button>
                    </ButtonGroup>
                </div>
            </main>
        </div>
    );
}
