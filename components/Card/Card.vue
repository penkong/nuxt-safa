<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style lang="scss" scoped>
.card {
  background: #fcfcfcf5;
  display: inline-block;
  min-width: 220px;
  width: 30%;
  height: 16rem;
  margin: 0.5rem 1rem;
  padding: 1rem 2rem;
  box-shadow: 0 7px 8px 3px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  text-align: left;
  @include respond(tab-land) {
    width: 42%;
  }
  @include respond(tab-port) {
    width: 45%;
  }
  @include respond(phone) {
    display: block;
    width: 90%;
    margin: 1rem auto;
  }
}
</style>