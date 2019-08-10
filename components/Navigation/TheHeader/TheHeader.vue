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
.header {
  position: fixed;
  height: 3.8rem;
  top: 0;
  width: 100vw;
  background-color: $color-bg-header;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .safa {
    @include respond(sm-phone) {
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
      left: 1.5rem;
    }
    position: relative;
    left: 3rem;
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: $color-safa;
    transition: all 0.5s ease-in;
    cursor: pointer;
    outline: none;
    padding: 0.2rem 1.2rem;

    &.type1 {
      // Effect one
      &.type1::after,
      &.type1::before {
        content: "";
        display: block;
        position: absolute;
        width: 5%;
        background-color: $color-logo;
        height: 5%;
        border: 1.3px solid $color-logo;
        transition: all 0.8s ease;
        border-radius: 3px;
      }
    }

    &.type1::after {
      bottom: 0;
      right: 0;
      border-top-color: transparent;
      border-left-color: transparent;
      // border-bottom-color: red;
      // border-right-color: red;
    }

    &.type1::before {
      top: 0;
      left: 0;
      border-bottom-color: transparent;
      border-right-color: transparent;
      // border-top-color: red;
      // border-left-color: red;
    }

    &.type1:hover:after,
    &.type1:hover:before {
      height: 100%;
      width: 100%;
      background-color: transparent;
    }

    &:hover {
      color: $color-hover-font;
      background-color: $color-logo;
    }
  }

  ul {
    display: flex;
    margin-left: auto;
    margin-right: 2rem;

    li {
      margin: 0 1rem;
      font-size: 1.2rem;
      padding: 0.5rem 0.8rem;
      transition: all 0.2s ease-in;
      &:hover {
        color: $color-hover-font;
        background: $color-bg-link;
      }
    }

    @include respond(phone) {
      margin-right: 1rem;

      li {
        margin: 0 0.4rem;
        font-size: 1.2rem;
        padding: 0.2rem 0.3rem;
        transition: all 0.2s ease-in;
        &:hover {
          color: $color-hover-font;
          background: $color-bg-link;
        }
      }
    }
  }
}
</style>
