export const convertNumber = (num: number): number => {
    const roundedString = num.toFixed(2);
    return Number(roundedString);
}
