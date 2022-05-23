import {useReducer} from 'react';

const initialControlsState = {
    searchBarValue: "",
};

const controlsStateReducer = (state, action) => {
    if (action.type === 'SEARCH_BAR') {
        return {searchBarValue: action.value};
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

    return {
        searchBarValue: controlsState.searchBarValue,
        searchBarValueChanged,
    };
};

export default useControls;