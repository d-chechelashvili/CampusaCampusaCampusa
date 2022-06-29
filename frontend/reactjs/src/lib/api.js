export async function getAllSubjects() {
    const response = await fetch(window.location.origin + "/api/subjects",
        {mode: "same-origin"}
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes.');
    }

    return data["subjects"];
}