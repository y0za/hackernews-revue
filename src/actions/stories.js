import fetch from 'isomorphic-fetch'

const API_URI = 'https://hacker-news.firebaseio.com/v0'

export const RECEIVE_STORY = 'RECEIVE_STORY'

export function receiveStory(json) {
  return {
    type: RECEIVE_STORY,
    story: json
  }
}

export function fetchStories(storyIds) {
  return (dispatch) => {
    for (let i = 0; i < 10; i++) {
      fetch(`${API_URI}/item/${storyIds[i]}.json`)
        .then(response => response.json())
        .then(json => dispatch(receiveStory(json)))
    }
  }
}

export function fetchStoryIds() {
  return (dispatch) => {
    return fetch(`${API_URI}/topstories.json`)
      .then(response => response.json())
      .then(json => dispatch(fetchStories(json)))
  }
}
