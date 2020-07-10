//  Make this a truly reusable button from the other ben's video

import { FC } from 'react';

interface IButton {
    label: string;
    onClick: () => void;
}

export const StartButton: FC<IButton> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-l font-bold text-gray-200 rounded-lg hover:bg-blue-600 py-2 px-4"
        >
            {label.toUpperCase()}
        </button>
    );
};
