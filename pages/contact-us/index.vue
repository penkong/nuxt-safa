<template>
  <div class="content">
    <div class="free-fix">
      <BigCard>1</BigCard>
    </div>
  </div>
</template>

<script>
import BigCard from "../../components/BigCard/BigCard";
export default {
  name: "ContactUs",
  components: {
    BigCard
  }
};
</script>


<style scoped lang="scss">
@import "~assets/sass/abstract/mixins";
@import "~assets/sass/component/content";
</style>