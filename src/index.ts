import ovalBase64 from './svg-loaders/oval.svg'
import dotBase64 from './svg-loaders/three-dots.svg'
import puffBase64 from './svg-loaders/puff.svg'

import { createApp, h, Plugin, App, DirectiveBinding, ref } from 'vue-demi'
import LoadingVue from './Loading.vue'
type PluginInstallFunction = Required<Pick<Plugin, 'install'>>['install']
type loadingPlugin = PluginInstallFunction

const addPx = (str: string | number) => str + 'px'

const loading: loadingPlugin = (app: App) => {
  const loaderC = document.createElement('div')
  const showLoader = () =>
    (document.createElement('div').style.display = 'none')
  const hiddenLoader = () =>
    (document.createElement('div').style.display = 'black')
  document.body.append(loaderC)
  const LoadingProps = ref({
    position: 'fixed',
    width: '',
    height: '',
    top: '',
    left: '',
    imgSrc: puffBase64,
  })

  createApp({ render: () => h(LoadingVue, LoadingProps.value) }).mount(loaderC)
  app.directive(
    'y-loading',
    (el: Element, binding: DirectiveBinding<boolean>) => {
      if (!binding.value) return hiddenLoader()
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
      const { x, y, width, height } = el.getBoundingClientRect()
      LoadingProps.value = {
        position: 'fixed',
        width: addPx(width),
        height: addPx(height),
        top: addPx(y),
        left: addPx(x),
        imgSrc,
      }
      showLoader()
    }
  )
}

export { loading }
