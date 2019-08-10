<template>
  <div class="big-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BigCard"
};
</script>


<style scoped lang="scss">
.big-card {
  background: #fcfcfcf5;
  display: inline-block;
  min-width: 90vw;
  width: 95%;
  min-height: 500px;
  margin: 3rem auto 1rem;
  padding: 0.5rem;
  box-shadow: 0 7px 8px 3px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  @include respond(tab-port) {
    width: 95%;
  }
}
</style>