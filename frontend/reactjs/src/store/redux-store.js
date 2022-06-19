import {configureStore, createSlice} from "@reduxjs/toolkit";

const memorizedSemesterList = [
    {
        subjects: [
            {name: "პროგრამირების მეთოდოლოგიები", credits: 12, grade: "B"},
            {name: "პროგრამირების აბსტრაქციები", credits: 8, grade: "C"},
        ]
    },
    {
        subjects: [
            {name: "Libri Magni", credits: 3, grade: "?"},
            {name: "სოციოლოგია", credits: 4, grade: "E"},
            {name: "ფილოსოფია", credits: 4, grade: "F"},
        ]
    },
    {
        subjects: [
            {name: "მსოფლიო ისტორია და საქართველო", credits: 3, grade: "?"},
        ]
    },
];


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
    }
});

const store = configureStore({
    reducer: semesterStore.reducer
});

export const semesterActions = semesterStore.actions;
export default store;