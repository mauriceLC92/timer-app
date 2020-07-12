

## Timer App

A timer application built with [React](https://reactjs.org/). Uses hooks for state management.
The timer can be restarted, paused and have it's countdown sped up by 1.5x and 2x it's normal speed. At normal speed the timer updates every second.

The timer will blink once you are in the final 10 seconds and the countdown will turn red at the 20 second mark. At the end it will indicate your time is up.

## Tech
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [React](https://reactjs.org/) for building of the UI
- [TailwindCSS](https://tailwindcss.com/) for rapid styling iteration and CSS
- [Vercel](https://vercel.com/) for hosting with ease.


## Design choices

The use of CSS utility classes is by choice and fits in with the philosophy of TailwindCSS. Components are isolated and only if there is a lot of repitition will the CSS utlity classes be extracted into their own class. Else JSX and CSS are kept together to form the components used to build up the user interface.

Hooks were favoured for state management as there is no need to reach for another dependency in the form of Redux or MobX when building a small app. State was instead lifted up to the parent Timer component when needed.

## Screenshots

https://res.cloudinary.com/dafbyqayi/image/upload/v1594582842/Screenshot_2020-07-12_at_21.29.40_pjtzur.png
https://res.cloudinary.com/dafbyqayi/image/upload/v1594582842/Screenshot_2020-07-12_at_21.30.02_xkiffn.png
https://res.cloudinary.com/dafbyqayi/image/upload/v1594582842/Screenshot_2020-07-12_at_21.31.06_roli1d.png
https://res.cloudinary.com/dafbyqayi/image/upload/v1594582842/Screenshot_2020-07-12_at_21.29.31_qwx9uj.png
