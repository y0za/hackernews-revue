import {
  RECEIVE_STORY
} from '../actions/stories'

export function stories(state = [], action) {
  switch (action.type) {
    case RECEIVE_STORY:
      return [
        ...state,
        action.story
      ]
    default:
      return state
  }
}
