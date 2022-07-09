export async function getAllSubjects(accessToken) {
    const response = await fetch(window.location.origin + "/api/subjects/", {
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
    return data;
}