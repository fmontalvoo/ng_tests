export function increment(number: number): number {
    if (number < 100)
        return number + 1;
    return 100;
}