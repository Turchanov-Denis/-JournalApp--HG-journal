<template>
  <div style>
    <!-- <Dialog></Dialog> -->
    <Header></Header>
    <div class="home">
      <div class="home__body">
        <ListBar v-if="this.$store.state.main.activeListBar"></ListBar>
        <Nuxt />
        <div
          v-if="
            this.$store.state.main.autorisation &&
            !this.$route.path.includes('messages')
          "
          class="comments"
        >
          <button
            @click="
              () => {
                this.$store.commit('main/changeActiveComment');
              }
            "
          >
            <div
              :class="
                this.$store.state.main.activeComment
                  ? 'comments__title'
                  : 'comments__title_active'
              "
            >
              Комментарии
            </div>
          </button>

          <div
            class="comments__content"
            v-for="comment in this.$store.state.comments.comments"
            :key="comment.id"
          >
            <Comment
              :userName="comment.userName"
              :text="comment.text"
            ></Comment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/HeaderComponent/Header.vue";
import ListBar from "../components/Home/ListBar.vue";
import Comment from "../components/Home/Comment.vue";
import Dialog from "../components/Loggin/Dialog.vue";
export default {
  name: "DefaultLayout",
  components: { Header, ListBar, Comment, Dialog },

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
@import "../assets/nullstyle.scss";
body {
  overflow: hidden;
}
::-webkit-scrollbar {
  width: 0;
}
.comments {
  flex-grow: 0;
  padding: 30px;
  &__title {
    // writing-mode: vertical-rl;
    // transform: scale(-1);

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: rgb(23, 23, 23);

    &_active {
      writing-mode: vertical-rl;
      transform: scale(-1);
    }
  }
}
.home {
  background: #f2f2f2;
  min-height: 800px;
  // padding-top: 20px;
  &__body {
    display: flex;
    justify-content: space-between;
  }
}
.v-btn__content {
  height: 0;
}
a {
  text-decoration: none;
  color: #000;
}
</style>