/* eslint-disable */
<template>
  <div class="home">
    <BigCard style="margin-top: 5.4rem;" />
    <div class="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card/Card";
import BigCard from "@/components/BigCard/BigCard";

export default {
  // name: "Home",
  layout: "default",
  components: {
    Card,
    BigCard
  }
};
</script>

<style scoped lang="scss">
.home {
  // padding: 1rem;
  padding: 1rem 2rem;

  width: 100vw;
  height: auto;
  background-image: linear-gradient(
    to right,
    #008585,
    #007d84,
    #007481,
    #006c7e,
    #006379,
    #006379,
    #006379,
    #006379,
    #006c7e,
    #007481,
    #007d84,
    #008585
  );
  background-attachment: fixed;
  background-size: cover;
  margin: 0 auto;
  text-align: center;

  .card-container {
    margin-top: 5rem;
    max-width: 95%;
    margin-left: 2rem;
    text-align: center;

    @include respond(tab-land) {
      margin: 1rem;
      margin-right: 2rem;
      min-height: 100vh;
      height: auto;
    }

    @include respond(tab-port) {
      display: block;
      min-height: 100vh;
      height: auto;
    }

    @include respond(phone) {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>