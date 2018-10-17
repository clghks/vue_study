<template>
  <div>
    <div class="hacker-news-list"> 
      <div class="hacker-news-header">
        <a target="_blank" href="http://www.ycombinator.com/">
        <img src="https://news.ycombinator.com/y18.gif">
        </a>
        <span>Hacker News</span>
      </div>
      <div class="hacker-news-item" v-for="(item, key) in list" v-bind:key="item">
        <span class="num" v-text="key + 1"></span>
        <a target="_blank" :href="item.url" v-text="item.title"></a>
        <p>
        <small>
            <span v-text="item.points"></span>
            points by
            <a target="_blank" :href="'https://news.ycombinator.com/user?id=' + item.author" v-text="item.author"></a>
            |
            <a target="_blank" :href="'https://news.ycombinator.com/item?id=' + item.objectID" v-text="item.num_comments + ' comments'"></a>
        </small>
        </p>
      </div>
    </div>

    <button class="btn-load-more" v-show="distance < maxCount" @click="manualLoad">Load more</button>
    <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
        <span slot="no-more"/>
        <span slot="no-results"/>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import axios from 'axios';

const api = 'http://hn.algolia.com/api/v1/search_by_date?tags=story';

export default {
  data() { 
    return {
      list: [],
      apiItemList: [],
      distance: 3,
      pageCount: 3,
      maxCount: 10
    }
  },
  created () {
    axios.get(api, {
      params: {
          page: 1,
        },
      }).then(({ data }) => {
        this.apiItemList = data.hits;
        for (let i = 0; i < this.pageCount; i++) {
          this.list.push(this.apiItemList[i])
        }
      });
  },
  methods: {
    infiniteHandler(state) {
      state.complete()
    },
    manualLoad() {      
      this.distance = this.distance + this.pageCount;
      const temp = []
      const itemCount = this.list.length + this.pageCount
      for (let i = this.list.length + 1; i <= (itemCount > this.maxCount ? this.maxCount : itemCount); i++) {
        temp.push(this.apiItemList[i])
      }
      this.list = this.list.concat(temp)
    }
  },
  components: {
    InfiniteLoading
  }
}
</script>
