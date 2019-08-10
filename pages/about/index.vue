<template>
  <div class="content">
    <div v-for="item in 5" :key="item.id" class="free-fix">
      <BigCard>{{ item }}</BigCard>
    </div>
  </div>
</template>

<script>
import BigCard from "@/components/BigCard/BigCard";
export default {
  name: "About",
  components: {
    BigCard
  }
};
</script>


<style scoped lang="scss">
// @import "@/assets/sass/abstract/mixins.scss";
// @import "@/assets/sass/component/content.scss";
</style>