<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  padding: 30px;
  overflow: hidden;
  max-width: 350px;
  border-radius: $border-radius;
  background-color: $color-dark-blue;
}
@media (max-width: 700px) {
  .card {
    margin: auto 10px;
    border-radius: 12px;
  }
}
</style>