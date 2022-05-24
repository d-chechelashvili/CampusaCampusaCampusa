import {useReducer} from 'react';

const initialControlsState = {
    searchBarValue: "",
    facultyFilterValue: "ALL",
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

    return {
        searchBarValue: controlsState.searchBarValue,
        facultyFilterValue: controlsState.facultyFilterValue,
        searchBarValueChanged,
        facultyFilterValueChanged,
    };
};

export default useControls;