import { SET_SCALE, SET_ACTIVE_KEYS } from '../action';

type State = {
  scale: string;
  activeKeys: string[];
};

const initialState: State = { scale: '', activeKeys: [] };

export default function chord(state = initialState, action) {
  switch (action.type) {
    case SET_SCALE: {
      const scale = action.payload.scale;
      return {
        ...state,
        scale: scale,
      };
    }
    case SET_ACTIVE_KEYS: {
      const activeKeysName = action.payload.activeKeysName;
      return {
        ...state,
        activeKeys: activeKeysName,
      };
    }
    default:
      return state;
  }
}
