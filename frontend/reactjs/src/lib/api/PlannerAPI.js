export async function getUserPlan(accessToken) {
    const response = await fetch(window.location.origin + "/api/planner/get_plan/", {
        method: "GET",
        mode: "same-origin",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch Plan.');
    }
    return data;
}

export async function addSubject(accessToken, subject_name, semester_num) {
    const body = {subject_name: subject_name, semester: semester_num};
    const response = await fetch(window.location.origin + "/api/planner/add_subject/", {
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

export async function removeSubject(accessToken, subject_name, semester_num) {
    const body = {subject_name: subject_name, semester: semester_num};
    const response = await fetch(window.location.origin + "/api/planner/remove_subject/", {
        method: "POST",
        mode: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export async function updateGrade(accessToken, subject_name, semester_num, grade) {
    const body = {subject_name: subject_name, semester: semester_num, grade: grade};
    const response = await fetch(window.location.origin + "/api/planner/update_grade/", {
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