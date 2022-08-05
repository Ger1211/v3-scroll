<template>
  <div></div>
</template>

<script>
export default {
  name: "V3Scroll",
  props: {
    scrollbarWidth: {
      default: "8px",
      type: String,
    },
    trackColor: {
      default: "#f1f1f1",
      type: String,
    },
    thumbColor: {
      default: "#666",
      type: String,
    },
    thumbHoverColor: {
      default: "#999",
      type: String,
    },
  },
  created() {
    this.setCssVariables();
  },
  methods: {
    setCssVariables() {
      document.documentElement.style.setProperty("--scrollbar-width", this.scrollbarWidth);
      document.documentElement.style.setProperty("--track-color", this.trackColor);
      document.documentElement.style.setProperty("--thumb-color", this.thumbColor);
      document.documentElement.style.setProperty("--thumb-hover-color", this.thumbHoverColor);
    },
  },
};
</script>

<style>
body::-webkit-scrollbar {
  width: var(--scrollbar-width);
}

body::-webkit-scrollbar-track {
  background: var(--track-color);
}

body::-webkit-scrollbar-thumb {
  background: var(--thumb-color);
  border-radius: 20px;
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--thumb-hover-color);
}
</style>