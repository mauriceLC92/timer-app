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
