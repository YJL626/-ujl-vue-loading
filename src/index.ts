/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApp, h, App, DirectiveBinding, ref, Plugin, Ref } from 'vue'
import LoadingVue from './Loading.vue'
import ovalBase64 from './svg-loaders/oval.svg'
import dotBase64 from './svg-loaders/three-dots.svg'
import puffBase64 from './svg-loaders/puff.svg'
type removeUndefined<T> = T extends undefined ? never : T
type PluginInstallFunction = removeUndefined<Plugin['install']>
//el为null时子组件隐藏
type loadingProps = Ref<{ el: Element | null; imgSrc: string }>

const loadingPropsMap = new WeakMap<HTMLDivElement, loadingProps>()
const createLoading = (LoadingProps: loadingProps) => {
  const loadingContainer = document.createElement('div')
  createApp({
    render: () => h(LoadingVue as any, LoadingProps.value),
  }).mount(loadingContainer)
  return loadingContainer
}

function directiveCbMounted(
  el: HTMLDivElement,
  binding: DirectiveBinding<boolean>
) {
  const LoadingProp: loadingProps = ref({
    el: null,
    imgSrc: puffBase64,
  })
  loadingPropsMap.set(el, LoadingProp)
  const loadingContainer = createLoading(LoadingProp)
  let imgSrc
  switch (binding.arg) {
    case 'oval':
      imgSrc = ovalBase64
      break
    case 'dot':
      imgSrc = dotBase64
      break
    case 'puff':
      imgSrc = puffBase64
      break
    default:
      imgSrc = puffBase64
  }
  LoadingProp.value = {
    el: binding.value ? el : null,
    imgSrc,
  }
  if (!el.style.position) {
    el.style.position = 'relative'
  }
  LoadingProp.value.el && el.append(loadingContainer)
}
const directiveCbUpdated = (
  el: HTMLDivElement,
  binding: DirectiveBinding<boolean>
) => {
  const props = loadingPropsMap.get(el)
  if (!props) return
  props.value.el = binding.value ? el : null
}
const loading: PluginInstallFunction = (app: App) => {
  app.directive('loading', {
    mounted: directiveCbMounted,
    updated: directiveCbUpdated,
  })
}

export { loading }
