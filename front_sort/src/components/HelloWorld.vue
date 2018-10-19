<template>
  <div>
    <div v-for="i in even(notifications)" :key="i">
      <div v-if="i.commnetMessage"> <div v-bind:style="userName">{{ i.userId.userName}}</div> 님이 당신의 질문에 답하였습니다. <div v-bind:style="titleText">"{{ i.commnetMessage }}"</div></div>
      <div v-else-if="i.title">질문을 올리고 2 Cherry를 지불했어요. <div v-bind:style="titleText">“{{i.title}}“</div></div>
      <div v-else>당신의 질문에 like이 발생해 1 Cherry를 받았어요! <div v-bind:style="titleText">“{{i.issus.title}}“</div></div>
      <small><div v-bind:style="timeline">{{i.createAt}}</div></small>
      <p />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      notifications : [],
      comments: [
        {
          "commnetMessage": "자동차보험은 무조건 다이렉트 보험으로 드는게 짱이죵!!",
          "issus": { "title": "제 보험 한번만 봐주세요..", "createUser": {"userName": "테스트 유저2", "age": 33, "gender": "m"}, "createAt": "2018-10-15T05:58:47.951Z"},
          "userId": {"userName": "테스트 유저1", "age": 33, "gender": "m"},
          "createAt": "2018-10-15T05:58:47.951Z"
        },
        {
          "commnetMessage": "자동차보험은 무조건 다이렉트 보험으로 드는게 짱이죵!!",
          "issus": { "title": "제 보험 한번만 봐주세요..", "createUser": {"userName": "테스트 유저2", "age": 33, "gender": "m"}, "createAt": "2018-10-15T05:58:47.951Z"},
          "userId": {"userName": "테스트 유저2", "age": 33, "gender": "m"},
          "createAt": "2018-09-05T05:58:47.951Z"
        },
        {
          "commnetMessage": "그러게요~~",
          "issus": { "title": "이더리움 요즘 왜 떨어지나요?", "createUser": {"userName": "테스트 유저2", "age": 33, "gender": "m"}, "createAt": "2018-10-15T05:58:47.951Z"},
          "userId": {"userName": "테스트 유저1", "age": 33, "gender": "m"},
          "createAt": "2018-09-12T05:58:47.951Z"
        },
        {
          "commnetMessage": "현재 말씀 주신 보험 중 미사랑보험과 차도리 보험 보장 내역은 일부 겹치는 부분이 있는",
          "issus": { "title": "이더리움 요즘 왜 떨어지나요?", "createUser": {"userName": "테스트 유저2", "age": 33, "gender": "m"}, "createAt": "2018-10-15T05:58:47.951Z"},
          "userId": {"userName": "테스트 유저2", "age": 33, "gender": "m"},
          "createAt": "2018-09-01T05:58:47.951Z"
        }
      ],
      likes: [
        {
          "issus": { "title": "제 보험 한번만 봐주세요..", "createUser": {"userName": "테스트 유저2", "age": 33, "gender": "m"}, "createAt": "2018-10-15T05:58:47.951Z"},
          "userId": {"userName": "테스트 유저7", "age": 22, "gender": "m"},
          "createAt": "2018-10-12T05:58:47.951Z"
        },
        {
          "issus": { "title": "이더리움 요즘 왜 떨어지나요?", "createUser": {"userName": "테스트 유저2", "age": 33, "gender": "m"}, "createAt": "2018-10-15T05:58:47.951Z"},
          "userId": {"userName": "테스트 유저6", "age": 22, "gender": "m"},
          "createAt": "2018-10-19T05:58:47.951Z"
        },
        {
          "issus": { "title": "제 보험 한번만 봐주세요..", "createUser": {"userName": "테스트 유저2", "age": 33, "gender": "m"}, "createAt": "2018-10-15T05:58:47.951Z"},
          "userId": {"userName": "테스트 유저5", "age": 22, "gender": "m"},
          "createAt": "2018-09-15T05:58:47.951Z"
        }
      ],
      issus: [
        {
          "title": "제 보험 한번만 봐주세요..",
          "userId": {"userName": "테스트 유저1", "age": 22, "gender": "m"},
          "createAt": "2018-08-15T05:58:47.951Z"
        },
        {
          "title": "이더리움 요즘 왜 떨어지나요?",
          "userId": {"userName": "테스트 유저1", "age": 22, "gender": "m"},
          "createAt": "2018-10-12T05:58:47.951Z"
        }
      ]
    }
  },
  mounted () {
    this.notifications = this.comments.concat(this.likes).concat(this.issus)
  },
  methods: {
    even: function (arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function (a, b) {
        if (a.createAt < b.createAt) {
          return -1
        } else if(a.createAt > b.createAt) {
          return 1
        }
        return 0
      })
    }
  },
  computed: {
    userName: function () {
      return {
        color: '#007ee5',
        display: 'inline'
      }
    },
    timeline: function () {
      return {
        color: '#ff6600',
        display: 'inline'
      }
    },
    titleText: function () {
      return {
        color: '#4c3926',
        display: 'inline'
      }
    }
  }
}
</script>