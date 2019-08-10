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
@import "~assets/sass/abstract/mixins";
@import "~assets/sass/component/BigCard";
</style>