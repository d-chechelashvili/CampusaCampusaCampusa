import {configureStore, createSlice} from "@reduxjs/toolkit";

const memorizedSemesterList = [];


const semesterStore = createSlice({
    name: "semesters",
    initialState: {semesterList: memorizedSemesterList},
    reducers: {
        addSemester(state) {
            const newSemester = {
                subjects: [],
            };
            state.semesterList.push(newSemester);
        },
        removeSemester(state, action) {
            const index = action.payload - 1;
            if (index === state.semesterList.length - 1) {
                state.semesterList.pop();
            } else {
                state.semesterList[index].subjects = [];
            }
        },
        selectSubjectGrade(state, action) {
            const {semesterNumber, subjectName, grade} = action.payload;
            const semester = state.semesterList[semesterNumber - 1];
            const subjectIndex = semester.subjects.findIndex((subject) => subject.name === subjectName);
            semester.subjects[subjectIndex].grade = grade;
        },
        addSubject(state, action) {
            const {semesterNumber, subjectName, credits} = action.payload;
            const semester = state.semesterList[semesterNumber - 1];
            semester.subjects.push({name: subjectName, credits, grade: "?"});
        },
        removeSubject(state, action) {
            const {semesterNumber, subjectName} = action.payload;
            const semester = state.semesterList[semesterNumber - 1];
            const subjectIndex = semester.subjects.findIndex((subject) => subject.name === subjectName);
            semester.subjects.splice(subjectIndex, 1);
        },
    }
});

const store = configureStore({
    reducer: semesterStore.reducer
});

export const semesterActions = semesterStore.actions;
export default store;