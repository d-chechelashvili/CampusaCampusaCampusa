export async function getSubjectInfo(requestData) {
    const response = await fetch(window.location.origin + `/api/subject_info/?subject_name=${requestData.subjectName}`, {
        method: "GET",
        mode: "same-origin",
        headers: {
            "Authorization": `Bearer ${requestData.accessToken}`,
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch subject info.');
    }

    return data;
}

export async function getScoreDistribution(requestData) {
    const params = `subject_name=${requestData.subjectName}&semester=${requestData.semester}&year=${requestData.year}`;
    const response = await fetch(window.location.origin +
        "/api/subject_info/score_distribution/?" + params, {
        method: "GET",
        mode: "same-origin",
        headers: {
            "Authorization": `Bearer ${requestData.accessToken}`,
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch scores.');
    }

    return data;
}

export async function collectSubjectRating(accessToken, subject_name, rating) {
    const body = {subject_name: subject_name, rating: rating};
    const response = await fetch(window.location.origin + "/api/subject_info/update_rating/", {
        method: "POST",
        mode: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
    });
    return await response.json();
}

export async function collectSubjectDifficulty(accessToken, subject_name, difficulty) {
    const body = {subject_name: subject_name, difficulty: difficulty};
    const response = await fetch(window.location.origin + "/api/subject_info/update_difficulty/", {
        method: "POST",
        mode: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
    });
    return await response.json();
}

export async function collectUserScore(accessToken, subject_name, year, semester, score) {
    const body = {subject_name: subject_name, year: year, semester: semester, score: score};
    const response = await fetch(window.location.origin + "/api/subject_info/update_score/", {
        method: "POST",
        mode: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
    });
    return await response.json();
}