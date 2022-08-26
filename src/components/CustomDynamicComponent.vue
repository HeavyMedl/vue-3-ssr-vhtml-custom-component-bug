<template>
  <component :is='tag' class="custom-dynamic-component">
    <slot/>
  </component>
</template>
<script>
export default {
  name: "CustomComponent",
  props: {
    tag: {
      type: String,
      default: 'p',
    },
  },
};
</script>
<style>
.custom-component {
  background-color: red;
}
</style>
