<template>
    <div class="hacker-news-list">
        <div class="hacker-news-header">
            <a target="_blank" href="http://www.ycombinator.com/">
            <img src="https://news.ycombinator.com/y18.gif">
            </a>
            <span>Hacker News</span>
            <select v-model="tag" @change="changeFilter()">
            <option value="story">Story</option>
            <option value="poll">Poll</option>
            <option value="show_hn">Show hn</option>
            <option value="ask_hn">Ask hn</option>
            <option value="front_page">Front page</option>
            </select>
        </div>
        <div class="hacker-news-item" v-for="(item, key) in list">
            <span class="num" v-text="key + 1"></span>
            <p>
            <a target="_blank" :href="item.url" v-text="item.title"></a>
            </p>
            <p>
            <small>
                <span v-text="item.points"></span>
                points by
                <a target="_blank" :href="'https://news.ycombinator.com/user?id=' + item.author"
                v-text="item.author"></a>
                |
                <a target="_blank" :href="'https://news.ycombinator.com/item?id=' + item.objectID"
                v-text="item.num_comments + ' comments'"></a>
            </small>
            </p>
        </div>
        <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
            <span slot="no-more">
            There is no more Hacker News :(
            </span>
        </infinite-loading>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios';

const api = 'http://hn.algolia.com/api/v1/search_by_date';

export default {
  data() {
    return {
      list: [],
      tag: 'story',
    };
  },
  methods: {
    infiniteHandler($state) {
      axios.get(api, {
        params: {
          tags: this.tag,
          page: this.list.length / 20 + 1,
        },
      }).then(({ data }) => {
        if (data.hits.length) {
          this.list = this.list.concat(data.hits);
          $state.loaded();
          if (this.list.length / 20 === 10) {
            $state.complete();
          }
        } else {
          $state.complete();
        }
      });
    },
    changeFilter() {
      this.list = [];
      this.$nextTick(() => {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
      });
    },
  },
  components: {
    InfiniteLoading,
  },
};
</script>
