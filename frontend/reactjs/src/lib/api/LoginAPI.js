export async function loginUser(code) {
    const response = await fetch(window.location.origin + "/api/google/login/", {
        method: "POST",
        mode: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({code}),
    });
    return await response.json();
}