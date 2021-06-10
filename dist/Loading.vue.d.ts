declare const _default: import("vue-demi").DefineComponent<{
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    left: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    imgSrc: {
        type: StringConstructor;
        default: any;
    };
}, {
    containerStyle: import("vue-demi").ComputedRef<{
        width: string;
        height: string;
        top: string;
        left: string;
        position: string;
    }>;
}, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<{
    width: string;
    height: string;
    top: string;
    left: string;
    position: string;
} & {
    imgSrc?: string | undefined;
}>, {
    width: string;
    height: string;
    top: string;
    left: string;
    position: string;
    imgSrc: string;
}>;
export default _default;
