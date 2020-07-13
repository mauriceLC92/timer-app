import { FC } from 'react';

interface IButton {
    label: string;
    onClick: () => void;
}

export const Button: FC<IButton> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-32 h-16 text-xl font-bold bg-orange-400 border-2 border-solid border-gray-300 tracking-wide hover:bg-orange-500 rounded-lg shadow-sm"
        >
            {label}
        </button>
    );
};

export const ButtonGroup = ({ children }) => {
    return (
        <div className="flex items-center justify-center space-x-4">
            {children}
        </div>
    );
};

export const buttons = [
    {
        label: '1X',
        speed: 1000,
    },
    {
        label: '1.5X',
        speed: 666.67,
    },
    {
        label: '2X',
        speed: 500,
    },
];
