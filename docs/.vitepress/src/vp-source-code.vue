<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
});

const decoded = computed(() => {
  return decodeURIComponent(props.source);
});
</script>

<template>
  <div class="example-source-wrapper">
    <div class="example-source" v-html="decoded" />
  </div>
</template>

<style scoped lang="scss">

.example-source{
    position: relative;
    color: #fff;
    background-color: var(--vp-code-block-bg) !important;
    padding: 1em;
   &:before {
        position: absolute;
        top: 0.4em;
        right: 0.8em;
        z-index: 2;
        content: 'vue';
        font-size: 12px;
        opacity: .6;
    }
}
</style>