<template>
  <div
    v-if="isShow"
    class="loading-container"
    :style="containerStyle"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff90;
    "
  >
    <img class="loading-img" :src="imgSrc" />
  </div>
</template>
<script lang="ts">
import puffBase64 from './svg-loaders/puff.svg'
import { defineComponent, HTMLAttributes, ref, Ref, watch } from 'vue'
export default defineComponent({
  props: {
    el: { type: Element },
    imgSrc: { type: String, default: puffBase64 },
  },
  setup(props) {
    const isShow = ref(false)
    const containerStyle = ref({
      width: '0',
      height: '0',
      top: '0',
      left: '0',
      position: 'absolute',
    }) as Ref<HTMLAttributes>
    const addPx = (str: string | number) => str + 'px'
    watch(
      props,
      () => {
        if (!props.el) return (isShow.value = false)
        isShow.value = true
        let {
          x = 0,
          y = 0,
          width = 0,
          height = 0,
        } = props.el.getBoundingClientRect
          ? props.el.getBoundingClientRect()
          : {}
        x += window.scrollX
        y += window.scrollY
        containerStyle.value = {
          width: addPx(width),
          height: addPx(height),
          top: addPx(y),
          left: addPx(x),
          position: 'absolute',
          zIndex: '99',
        } as HTMLAttributes
      },
      { immediate: true }
    )
    return { containerStyle, isShow }
  },
})
</script>
