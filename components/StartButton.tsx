//  Make this a truly reusable button from the other ben's video

import { FC } from 'react';

interface IButton {
    label: string;
    onClick: () => void;
    isDisabled?: boolean;
}

export const StartButton: FC<IButton> = ({ label, onClick, isDisabled }) => {
    return (
        <button
            disabled={isDisabled}
            onClick={onClick}
            className={`${
                isDisabled
                    ? 'bg-blue-500 text-white text-l font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'
                    : 'bg-blue-500 text-white text-l font-bold py-2 px-4 rounded hover:bg-blue-600 '
            }`}
        >
            {label.toUpperCase()}
        </button>
    );
};
