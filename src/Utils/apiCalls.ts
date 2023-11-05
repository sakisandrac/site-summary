interface SummaryData {
    data: string
}

export const getSiteText = async (url: string): Promise<SummaryData> => {
    const response = await fetch('http://localhost:3003/data/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    });

    if (!response.ok) {
        console.log(response.statusText);
        throw new Error(`${response.statusText} - Please Try Again`);
    };

    const data = await response.json();
    return data;
}