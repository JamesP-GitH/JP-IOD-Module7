import React, { useEffect, useReducer } from "react";

const initialState = {
    data: {},
    loading: true,
    error: null,
};
function dataReducer(state, action) {
    switch (action.type) {
        case "FETCH_START":
            return { ...state, loading: true, error: null };
        case "FETCH_SUCCESS":
            return { ...state, loading: false, data: action.payload };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

function useData(url) {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    useEffect(() => {
        if (url) {
            let ignore = false;
            dispatch({ type: "FETCH_START" });
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    if (!ignore) {
                        dispatch({ type: "FETCH_SUCCESS", payload: json });
                    }
                })
                .catch((err) => {
                    if (!ignore) {
                        dispatch({ type: "FETCH_ERROR", payload: err.message });
                    }
                });

            return () => {
                ignore = true;
            };
        }
    }, [url]);

    return state;
}

export default useData;
