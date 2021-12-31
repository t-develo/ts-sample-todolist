/**
 * gen4準拠のUUIDを生成する
 * @returns {string} UUID
 */
export function generateUuid(): string {
    // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
    // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    const chars: Array<string> = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split(
        ''
    );
    const uuid = chars.map((char) => {
        if (char === 'x') {
            return Math.floor(Math.random() * 16).toString(16);
        }
        if (char === 'y') {
            return (Math.floor(Math.random() * 4) + 8).toString(16);
        }
        return char;
    });
    return uuid.join('');
}
