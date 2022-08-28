<script setup lang="ts">
import { computed, getCurrentInstance } from "vue";
import { useClipboard, useToggle } from "@vueuse/core";
import { CaretTop, DocumentCopy } from "@element-plus/icons-vue";
import { ElMessage } from 'element-plus';
import IconCopy from "./icon-copy.vue";
import IconCode from "./icon-code.vue";
import IconTop from "./icon-top.vue";
import Example from "./vp-example.vue";
import SourceCode from "./vp-source-code.vue";

const [sourceVisible, toggleSourceVisible] = useToggle();

const props = defineProps<{
  source: string;
  rawSource: string;
}>();

const { copy } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
});

const copyCode = async () => {
  try {
    await copy();
    ElMessage({
    message: '复制成功！',
    type: 'success',
  })
  } catch (e: any) {}
};
</script>

<template>
  <ClientOnly>
    <div class="example">
      <div class="example-showcase">
        <slot></slot>
      </div>
      <div class="op-btns">
        <ElTooltip content="复制代码" :show-arrow="false">
          <ElIcon :size="16" class="op-btn" @click="copyCode">
            <icon-copy></icon-copy>
          </ElIcon>
        </ElTooltip>
        <ElTooltip content="查看源代码" :show-arrow="false">
          <ElIcon :size="16" class="op-btn" @click="toggleSourceVisible()">
            <icon-code></icon-code>
          </ElIcon>
        </ElTooltip>
      </div>

      <ElCollapseTransition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </ElCollapseTransition>

      <Transition name="el-fade-in-linear">
        <div
          v-show="sourceVisible"
          class="example-float-control"
          @click="toggleSourceVisible(false)"
        >
          <ElIcon :size="16">
            <icon-top></icon-top>
          </ElIcon>
          <span>隐藏源码</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.m-0 {
  margin: 0;
}
.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
}
.example {
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 4px;

  .op-btns {
    border-top: 1px solid var(--vp-c-divider-light);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--vp-c-brand);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--vp-c-text-2);
      transition: 0.2s;

    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--vp-c-divider-light);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--vp-c-bg, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--vp-c-brand);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--vp-c-brand-light);
    }
  }
}
</style>