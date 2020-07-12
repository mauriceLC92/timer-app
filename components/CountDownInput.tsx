import { FC } from 'react';
import { StartButton } from './StartButton';

interface ICountDownInput {
    handleOnChange: (value: any) => void;
    resetTimer: () => void;
    startTimer: () => void;
    input: number;
    speed: number;
    timerOn: boolean;
}

export const CountDownInput: FC<ICountDownInput> = ({
    handleOnChange,
    resetTimer,
    startTimer,
    input,
    timerOn,
    speed,
}) => {
    return (
        <div className="flex items-center space-x-2">
            <div className="w-full flex flex-col text-xl font-semibold">
                <div>Countdown (min): {input}</div>
                <div>Speed Factor: {getSpeedFactor(speed)}</div>
            </div>
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
                    isDisabled={input <= 0}
                    onClick={startTimer}
                    label="start"
                />
            )}
        </div>
    );
};

const getSpeedFactor = (speed) => {
    switch (speed) {
        case 1000:
            return '1X';
        case 750:
            return '1.5X';
        case 500:
            return '2X';
        default:
            return '1X';
    }
};
