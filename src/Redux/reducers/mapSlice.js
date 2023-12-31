const initialState = {
  mapLocation: { lat: 0, lng: 0 },
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAP_LOCATION':
      return { ...state, mapLocation: action.payload };
    default:
      return state;
  }
};

export default mapReducer;