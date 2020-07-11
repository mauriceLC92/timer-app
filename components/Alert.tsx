import { FC } from 'react';

interface IAlert {
    title: string;
    message: string;
}

export const Alert: FC<IAlert> = ({ title, message }) => {
    return (
        <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
        >
            <strong className="font-bold mr-2">{title}:</strong>
            <span className="block sm:inline">{message}</span>
        </div>
    );
};
