import {useReducer} from 'react';

const initialControlsState = {
    searchBarValue: "",
    facultyFilterValue: "ALL",
    semesterFilterValue: "ALL",
    sortType: "default"
};

const controlsStateReducer = (state, action) => {
    if (action.type === 'SEARCH_BAR') {
        return {
            ...state,
            searchBarValue: action.value,
        };
    }
    if (action.type === 'FACULTY_FILTER') {
        return {
            ...state,
            facultyFilterValue: action.value,
        };
    }
    if (action.type === 'SEMESTER_FILTER') {
        return {
            ...state,
            semesterFilterValue: action.value,
        };
    }
    if (action.type === 'SORT'){
        return {
            ...state,
            sortType: action.value,
        };
    }
    return controlsStateReducer;
};

const useControls = () => {
    const [controlsState, dispatch] = useReducer(
        controlsStateReducer,
        initialControlsState
    );

    const searchBarValueChanged = (event) => {
        dispatch({type: 'SEARCH_BAR', value: event.target.value});
    };

    const facultyFilterValueChanged = (event) => {
        dispatch({type: 'FACULTY_FILTER', value: event.target.value});
    };

    const semesterFilterValueChanged = (event) => {
        dispatch({type: 'SEMESTER_FILTER', value: event.target.value});
    };

    const sortTypeChanged = (event) => {
        dispatch({type: 'SORT', value: event.target.value});
    };


    return {
        searchBarValue: controlsState.searchBarValue,
        facultyFilterValue: controlsState.facultyFilterValue,
        semesterFilterValue: controlsState.semesterFilterValue,
        sortType: controlsState.sortType,
        searchBarValueChanged,
        facultyFilterValueChanged,
        semesterFilterValueChanged,
        sortTypeChanged,
    };
};

export default useControls;