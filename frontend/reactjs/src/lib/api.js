export async function getAllSubjects(accessToken) {
    const response = await fetch(window.location.origin + "/api/subjects/get_subjects", {
        method: "GET",
        mode: "same-origin",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch subjects.');
    }

    return data["subjects"];
}

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