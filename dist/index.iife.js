var loading = (function (exports, vue) {
  'use strict';

  var img$2 = "data:image/svg+xml,%3c!-- By Sam Herbert (%40sherb)%2c for everyone. More %40 http://goo.gl/7AJzbL --%3e%3csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg' stroke='%2353A8FF'%3e %3cg fill='none' fill-rule='evenodd' stroke-width='2'%3e %3ccircle cx='22' cy='22' r='1'%3e %3canimate attributeName='r' begin='0s' dur='1.8s' values='1%3b 20' calcMode='spline' keyTimes='0%3b 1' keySplines='0.165%2c 0.84%2c 0.44%2c 1' repeatCount='indefinite' /%3e %3canimate attributeName='stroke-opacity' begin='0s' dur='1.8s' values='1%3b 0' calcMode='spline' keyTimes='0%3b 1' keySplines='0.3%2c 0.61%2c 0.355%2c 1' repeatCount='indefinite' /%3e %3c/circle%3e %3ccircle cx='22' cy='22' r='1'%3e %3canimate attributeName='r' begin='-0.9s' dur='1.8s' values='1%3b 20' calcMode='spline' keyTimes='0%3b 1' keySplines='0.165%2c 0.84%2c 0.44%2c 1' repeatCount='indefinite' /%3e %3canimate attributeName='stroke-opacity' begin='-0.9s' dur='1.8s' values='1%3b 0' calcMode='spline' keyTimes='0%3b 1' keySplines='0.3%2c 0.61%2c 0.355%2c 1' repeatCount='indefinite' /%3e %3c/circle%3e %3c/g%3e%3c/svg%3e";

  var script = vue.defineComponent({
      props: {
          el: { type: Element },
          imgSrc: { type: String, default: img$2 },
      },
      setup(props) {
          const isShow = vue.ref(false);
          const containerStyle = vue.ref({
              width: '0',
              height: '0',
              top: '0',
              left: '0',
              position: 'absolute',
          });
          const addPx = (str) => str + 'px';
          vue.watch(props, () => {
              if (!props.el) {
                  isShow.value = false;
                  return;
              }
              isShow.value = true;
              let { x = 0, y = 0, width = 0, height = 0, } = props.el.getBoundingClientRect
                  ? props.el.getBoundingClientRect()
                  : {};
              x += window.scrollX;
              y += window.scrollY;
              containerStyle.value = {
                  width: addPx(width),
                  height: addPx(height),
                  top: addPx(y),
                  left: addPx(x),
                  position: 'absolute',
                  zIndex: '99',
              };
          }, { immediate: true });
          return { containerStyle, isShow };
      },
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (_ctx.isShow)
      ? (vue.openBlock(), vue.createBlock("div", {
          key: 0,
          class: "loading-container",
          style: [_ctx.containerStyle, {"display":"flex","justify-content":"center","align-items":"center","background-color":"#ffffff90"}]
        }, [
          vue.createVNode("img", {
            class: "loading-img",
            src: _ctx.imgSrc
          }, null, 8 /* PROPS */, ["src"])
        ], 4 /* STYLE */))
      : vue.createCommentVNode("v-if", true)
  }

  script.render = render;
  script.__file = "src/Loading.vue";

  var img$1 = "data:image/svg+xml,%3c!-- By Sam Herbert (%40sherb)%2c for everyone. More %40 http://goo.gl/7AJzbL --%3e%3csvg width='38' height='38' viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg' stroke='%2353A8FF'%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg transform='translate(1 1)' stroke-width='2'%3e %3ccircle stroke-opacity='.5' cx='18' cy='18' r='18'/%3e %3cpath d='M36 18c0-9.94-8.06-18-18-18'%3e %3canimateTransform attributeName='transform' type='rotate' from='0 18 18' to='360 18 18' dur='1s' repeatCount='indefinite'/%3e %3c/path%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

  var img = "data:image/svg+xml,%3c!-- By Sam Herbert (%40sherb)%2c for everyone. More %40 http://goo.gl/7AJzbL --%3e%3csvg width='120' height='12' viewBox='0 0 120 30' xmlns='http://www.w3.org/2000/svg' fill='%2353A8FF'%3e %3ccircle cx='15' cy='15' r='15'%3e %3canimate attributeName='r' from='15' to='15' begin='0s' dur='0.8s' values='15%3b9%3b15' calcMode='linear' repeatCount='indefinite' /%3e %3canimate attributeName='fill-opacity' from='1' to='1' begin='0s' dur='0.8s' values='1%3b.5%3b1' calcMode='linear' repeatCount='indefinite' /%3e %3c/circle%3e %3ccircle cx='60' cy='15' r='9' fill-opacity='0.3'%3e %3canimate attributeName='r' from='9' to='9' begin='0s' dur='0.8s' values='9%3b15%3b9' calcMode='linear' repeatCount='indefinite' /%3e %3canimate attributeName='fill-opacity' from='0.5' to='0.5' begin='0s' dur='0.8s' values='.5%3b1%3b.5' calcMode='linear' repeatCount='indefinite' /%3e %3c/circle%3e %3ccircle cx='105' cy='15' r='15'%3e %3canimate attributeName='r' from='15' to='15' begin='0s' dur='0.8s' values='15%3b9%3b15' calcMode='linear' repeatCount='indefinite' /%3e %3canimate attributeName='fill-opacity' from='1' to='1' begin='0s' dur='0.8s' values='1%3b.5%3b1' calcMode='linear' repeatCount='indefinite' /%3e %3c/circle%3e%3c/svg%3e";

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const createLoading = (LoadingProps) => {
      const loadingContainer = document.createElement('div');
      vue.createApp({
          render: () => vue.h(script, LoadingProps.value),
      }).mount(loadingContainer);
      return loadingContainer;
  };
  const loadingPropsMap = new WeakMap();
  function directiveCbMounted(el, binding) {
      const LoadingProp = vue.ref({
          el: null,
          imgSrc: img$2,
      });
      loadingPropsMap.set(el, LoadingProp);
      const loadingContainer = createLoading(LoadingProp);
      let imgSrc;
      switch (binding.arg) {
          case 'oval':
              imgSrc = img$1;
              break;
          case 'dot':
              imgSrc = img;
              break;
          case 'puff':
              imgSrc = img$2;
              break;
          default:
              imgSrc = img$2;
      }
      LoadingProp.value = {
          el: binding.value ? el : null,
          imgSrc,
      };
      if (!el.style.position) {
          el.style.position = 'relative';
      }
      LoadingProp.value.el && el.append(loadingContainer);
  }
  const directiveCbUpdated = (el, binding) => {
      const props = loadingPropsMap.get(el);
      if (!props)
          return;
      props.value.el = binding.value ? el : null;
  };
  const loading = (app) => {
      app.directive('loading', {
          mounted: directiveCbMounted,
          updated: directiveCbUpdated,
      });
  };

  exports.loading = loading;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}, Vue));
