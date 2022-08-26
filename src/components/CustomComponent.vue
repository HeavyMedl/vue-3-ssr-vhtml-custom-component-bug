<template>
  <div class="custom-component">
    <slot/>
  </div>
</template>
<script>
export default {
  name: "CustomComponent",
};
</script>
<style>
.custom-component {
  background-color: red;
}
</style>
