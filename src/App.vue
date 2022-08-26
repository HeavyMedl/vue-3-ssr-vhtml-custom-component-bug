<template>
  <div>
    <!-- This works -->
    <section>This is a section without using v-html</section>
    <!-- This fails: v-html -->
    <custom-component v-html="customComponentHTML" /> 
    <!-- This fails: v-html -->
    <custom-dynamic-component tag="article" v-html="customComponentHTML" />
    <!-- This works -->
    <custom-dynamic-component tag="div">Dynamic component without v-html</custom-dynamic-component>
    <!-- This works -->
    <div v-html="normalDiv"></div>
  </div>
</template>

<script>
import CustomComponent from "./components/CustomComponent.vue";
import CustomDynamicComponent from "./components/CustomDynamicComponent.vue";
export default {
  name: "App",
  components: {
    CustomComponent,
    CustomDynamicComponent,
  },
  data() {
    return {
      customComponentHTML: "<div>I replace whats inside custom component</div>",
      normalDiv: "<div>Normal div using v-html</div>",
    };
  },
};
</script>

<style>
@font-face {
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("./assets/fonts/Inter-Italic.woff2#iefix") format("woff2"),
    url("./assets/fonts/Inter-Italic.woff") format("woff");
}
.inter {
  font-family: "Inter";
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
