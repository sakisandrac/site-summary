export const getSiteText = async (url: string) => {
    try {
        const response = await fetch('http://localhost:3003/data/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: url }),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else {
            console.error('Request failed with status:', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}