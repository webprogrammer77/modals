<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <navigation>
        <div class="auth" slot="nav">
          <a @click="signIn=!signIn">Sign in</a>
          <a @click="signUp=!signUp">Sign up</a>
        </div>
      </navigation>
      <section>
        <div class="container">
          <div id="app">
            <auth v-show="signIn" @close="signIn=false" @registration="signUp=true, signIn=false" />
            <registration v-show="signUp" @close="signUp=false" @auth="signUp=false, signIn=true" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import navigation from "@/components/UI/Navigation.vue";
import auth from "@/components/Auth.vue";
import registration from "@/components/SignUp.vue";

export default {
  components: {
    auth,
    registration,
    navigation
  },

  data() {
    return {
      signUp: false,
      signIn: false
    };
  }
};
</script>

<style lang="scss">
#app {
}

.auth {
  margin-left: auto;
  margin-right: 50px;
  a {
    font-size: 14px;
    color: blue;
    border-bottom: 1px dashed blue;

    cursor: pointer;
  }
  a:not(:last-child) {
    margin-right: 20px;
  }
}
</style>
