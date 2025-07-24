import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
    const query = event.queryStringParameters?.query;

    try {
        const res = await fetch(`http://numbersapi.com/${query}`);
        const text = await res.text();

        return {
            statusCode: 200,
            body: text,
        };
    } catch {
        return {
            statusCode: 500,
            body: 'Failed to fetch from Numbers API',
        };
    }
};
