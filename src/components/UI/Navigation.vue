<template>
  <nav>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/modals">Modals</a></li>
      <li><a href="/auth">Auth</a></li>
			<slot name="nav"></slot>
      <!-- <li v-if="!signedIn"><a href="/login">Login</a></li>
      <li v-if="signedIn"><a href="/profile">Profile</a></li>
      <li v-if="signedIn"><a href="/logout" data-no-prefetch>Logout</a></li> -->
    </ul>
  </nav>
</template>

<script>
  // import axios from "axios";
  // import Prefetch from "prefetch";
  
  // const signedInPromise =
  //   axios
  //     .get("/whoami")
  //     .then(response => response.data)
  //     .then(data => {
  //       try {
  //         return Boolean(data.user.username);
  //       } catch (error) {
  //         return false;
  //       }
  //     });
  
  export default {
    data: () => ({
      signedIn: false,
    }),
    mounted() {
      // Prefetch.init({ containers: ["nav"]});
      // signedInPromise.then(signedIn => this.signedIn = signedIn);
    },
  };
</script>

<style lang="scss" scoped>
  nav {
    padding: 8px;
    margin: 24px 0;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  li:not(:last-child) {
    margin-right: 8px;
  }
</style>