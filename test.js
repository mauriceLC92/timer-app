const seconds = (d) => {
    return Math.floor((d % 3600) % 60);
};

const minutes = (d) => {
    return Math.floor((d % 3600) / 60);
};

console.log('miinutes', JSON.stringify(minutes(123), null, 4));
console.log('seconds', JSON.stringify(seconds(123), null, 4));
