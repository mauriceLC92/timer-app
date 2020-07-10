//  Make this a truly reusable button from the other ben's video

import { FC } from 'react';

interface IButton {
    label: string;
    onClick: () => void;
}

export const Button: FC<IButton> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-32 h-16 text-lg font-bold bg-orange-400 border-2 border-solid border-gray-900 tracking-wide hover:bg-orange-500"
        >
            {label}
        </button>
    );
};
