<template>
  <nav class="header">
    <nuxt-link to="/" class="safa type1">SAFA RAYANEH</nuxt-link>
    <ul v-if="user">
      <li>
        <nuxt-link to="/user-land">Our Projects</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <a class="item" @click="logout">logout</a>
      </li>
    </ul>
    <ul v-else>
      <li>
        <nuxt-link to="/signup">Signup</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/login">Login</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
// import firebase from "firebase/app";
export default {
  name: "TheHeader",
  data() {
    return {
      user: null
    };
  },
  methods: {
    logout() {
      // firebase
      //   .auth()
      //   .signOut()
      //   .then(() => {
      //     this.$router.push({ name: "Login" });
      //   });
    }
  }
  // created() {
  //   let user = firebase.auth().currentUser;
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.user = user;
  //     } else {
  //       this.user = null;
  //     }
  //   });
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import "~assets/sass/abstract/mixins";
// @import "~assets/sass/layout/Header";
</style>
