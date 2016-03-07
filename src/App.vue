<template>
  <div id="app">
    <h1>Hackernews</h1>
    <ul>
      <li>score: title</li>
      <li v-for="story in stories">{{ story.score + ': ' + story.title }}</li>
    </ul>
  </div>
</template>

<script>
import store from './store'

export default {
  data() {
    return {
      stories: this.$select('stories')
    }
  },

  ready() {
    store.dispatch(store.actions.fetchStoryIds())
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
