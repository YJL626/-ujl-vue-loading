<template>
  <div
    class="loader-container"
    :style="containerStyle"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff90;
    "
  >
    <img :src="imgSrc" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, h } from 'vue-demi'
import puffBase64 from './svg-loaders/puff.svg'

export default defineComponent({
  props: {
    width: { type: String, default: '100px' },
    height: { type: String, default: '100px' },
    top: { type: String, default: '100px' },
    left: { type: String, default: '100px' },
    position: { type: String, default: 'fixed' },
    imgSrc: { type: String, default: puffBase64 },
  },
  setup(props) {
    const containerStyle = computed(() => {
      const { width, height, top, left, position } = props
      return { width, height, top, left, position }
    })
    return { containerStyle }
  },
})
</script>
