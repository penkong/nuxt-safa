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
@import "~assets/sass/abstract/mixins";
@import "~assets/sass/component/Card";
</style>