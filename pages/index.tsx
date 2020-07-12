import { Button, ButtonGroup, buttons } from '../components/SpeedButtons';
import { useState } from 'react';
import { CountDown, DisplayContainer } from '../components/CountDown';
import { Alert } from '../components/Alert';
import { CountDownInput } from '../components/CountDownInput';

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
                            <CountDown inputMinutes={input} speed={speed} />
                        ) : (
                            `${input} min`
                        )}
                    </DisplayContainer>
                    <ButtonGroup speed={speed}>
                        {buttons.map((button) => (
                            <Button
                                label={button.label}
                                onClick={() => setSpeed(button.speed)}
                            />
                        ))}
                    </ButtonGroup>
                </div>
            </main>
        </div>
    );
}
