import { defineComponent, computed, ref, createApp, h } from 'vue-demi';
import { openBlock, createBlock, createVNode } from 'vue';

var img$2 = "data:image/svg+xml,%3c!-- By Sam Herbert (%40sherb)%2c for everyone. More %40 http://goo.gl/7AJzbL --%3e%3csvg width='38' height='38' viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg' stroke='%2353A8FF'%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg transform='translate(1 1)' stroke-width='2'%3e %3ccircle stroke-opacity='.5' cx='18' cy='18' r='18'/%3e %3cpath d='M36 18c0-9.94-8.06-18-18-18'%3e %3canimateTransform attributeName='transform' type='rotate' from='0 18 18' to='360 18 18' dur='1s' repeatCount='indefinite'/%3e %3c/path%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3c!-- By Sam Herbert (%40sherb)%2c for everyone. More %40 http://goo.gl/7AJzbL --%3e%3csvg width='120' height='12' viewBox='0 0 120 30' xmlns='http://www.w3.org/2000/svg' fill='%2353A8FF'%3e %3ccircle cx='15' cy='15' r='15'%3e %3canimate attributeName='r' from='15' to='15' begin='0s' dur='0.8s' values='15%3b9%3b15' calcMode='linear' repeatCount='indefinite' /%3e %3canimate attributeName='fill-opacity' from='1' to='1' begin='0s' dur='0.8s' values='1%3b.5%3b1' calcMode='linear' repeatCount='indefinite' /%3e %3c/circle%3e %3ccircle cx='60' cy='15' r='9' fill-opacity='0.3'%3e %3canimate attributeName='r' from='9' to='9' begin='0s' dur='0.8s' values='9%3b15%3b9' calcMode='linear' repeatCount='indefinite' /%3e %3canimate attributeName='fill-opacity' from='0.5' to='0.5' begin='0s' dur='0.8s' values='.5%3b1%3b.5' calcMode='linear' repeatCount='indefinite' /%3e %3c/circle%3e %3ccircle cx='105' cy='15' r='15'%3e %3canimate attributeName='r' from='15' to='15' begin='0s' dur='0.8s' values='15%3b9%3b15' calcMode='linear' repeatCount='indefinite' /%3e %3canimate attributeName='fill-opacity' from='1' to='1' begin='0s' dur='0.8s' values='1%3b.5%3b1' calcMode='linear' repeatCount='indefinite' /%3e %3c/circle%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3c!-- By Sam Herbert (%40sherb)%2c for everyone. More %40 http://goo.gl/7AJzbL --%3e%3csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg' stroke='%2353A8FF'%3e %3cg fill='none' fill-rule='evenodd' stroke-width='2'%3e %3ccircle cx='22' cy='22' r='1'%3e %3canimate attributeName='r' begin='0s' dur='1.8s' values='1%3b 20' calcMode='spline' keyTimes='0%3b 1' keySplines='0.165%2c 0.84%2c 0.44%2c 1' repeatCount='indefinite' /%3e %3canimate attributeName='stroke-opacity' begin='0s' dur='1.8s' values='1%3b 0' calcMode='spline' keyTimes='0%3b 1' keySplines='0.3%2c 0.61%2c 0.355%2c 1' repeatCount='indefinite' /%3e %3c/circle%3e %3ccircle cx='22' cy='22' r='1'%3e %3canimate attributeName='r' begin='-0.9s' dur='1.8s' values='1%3b 20' calcMode='spline' keyTimes='0%3b 1' keySplines='0.165%2c 0.84%2c 0.44%2c 1' repeatCount='indefinite' /%3e %3canimate attributeName='stroke-opacity' begin='-0.9s' dur='1.8s' values='1%3b 0' calcMode='spline' keyTimes='0%3b 1' keySplines='0.3%2c 0.61%2c 0.355%2c 1' repeatCount='indefinite' /%3e %3c/circle%3e %3c/g%3e%3c/svg%3e";

var script = defineComponent({
    props: {
        width: { type: String, default: '100px' },
        height: { type: String, default: '100px' },
        top: { type: String, default: '100px' },
        left: { type: String, default: '100px' },
        position: { type: String, default: 'fixed' },
        imgSrc: { type: String, default: img },
    },
    setup(props) {
        const containerStyle = computed(() => {
            const { width, height, top, left, position } = props;
            return { width, height, top, left, position };
        });
        return { containerStyle };
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: "loader-container",
    style: [_ctx.containerStyle, {"display":"flex","justify-content":"center","align-items":"center","background-color":"#ffffff90"}]
  }, [
    createVNode("img", { src: _ctx.imgSrc }, null, 8 /* PROPS */, ["src"])
  ], 4 /* STYLE */))
}

script.render = render;
script.__file = "src/Loading.vue";

const addPx = (str) => str + 'px';
const loading = (app) => {
    const loaderC = document.createElement('div');
    const showLoader = () => (document.createElement('div').style.display = 'none');
    const hiddenLoader = () => (document.createElement('div').style.display = 'black');
    document.body.append(loaderC);
    const LoadingProps = ref({
        position: 'fixed',
        width: '',
        height: '',
        top: '',
        left: '',
        imgSrc: img,
    });
    createApp({ render: () => h(script, LoadingProps.value) }).mount(loaderC);
    app.directive('y-loading', (el, binding) => {
        if (!binding.value)
            return hiddenLoader();
        let imgSrc;
        switch (binding.arg) {
            case 'oval':
                imgSrc = img$2;
                break;
            case 'dot':
                imgSrc = img$1;
                break;
            case 'puff':
                imgSrc = img;
                break;
            default:
                imgSrc = img;
        }
        const { x, y, width, height } = el.getBoundingClientRect();
        LoadingProps.value = {
            position: 'fixed',
            width: addPx(width),
            height: addPx(height),
            top: addPx(y),
            left: addPx(x),
            imgSrc,
        };
        showLoader();
    });
};

export { loading };
