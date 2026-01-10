'use server'
export async function registerDriver(form:FormData) {

    const rawData = {
        username: form.get('username') as string,
        firstName: form.get('firstName') as string,
        lastName: form.get('lastName') as string,
        phone: form.get('phone') as string,
    };

    try {
        const response = await fetch('http://127.0.0.1:3000/drivers/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rawData),
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error('Failed to register driver');     
        } 
        return result;
    } catch (err) {
        console.log('fuck', err);
        return { error : "Check your network connection and try again." };
    }
}