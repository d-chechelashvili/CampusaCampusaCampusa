import axios from "axios";

export async function getAllSubjects() {
    const response = await fetch(window.location.origin + "/api/subjects/",
        {mode: "same-origin"}
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes.');
    }

    return data["subjects"];
}

export async function getImageFromToken(token) {
    const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {headers: {Authorization: `Bearer ${token}`}},
    );
    return userInfo.data.picture;
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

// export async function loginUser(googleToken) {
//     const headers = {
//         "Content-Type": "application/json",
//     };
//
//     const response = await fetch(window.location.origin + "/api/login", {
//         method: "POST",
//         mode: "same-origin",
//         headers: headers,
//         body: JSON.stringify(googleToken)
//     });
//     const data = await response.json();
//     if (!response.ok) {
//         throw new Error(data.message || "Error logging in.");
//     }
//     if (data["clientId"] !== process.env.REACT_APP_GOOGLE_CLIENT_ID) {
//         throw new Error("Invalid client ID");
//     }
//
//     return data;
// }