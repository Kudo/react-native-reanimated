(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),o=(n(0),n(180)),i={id:"useAnimatedStyle",title:"useAnimatedStyle",sidebar_label:"useAnimatedStyle"},s={id:"api/useAnimatedStyle",title:"useAnimatedStyle",description:"This hook is one of the main elements of the new Reanimated v2 API.",source:"@site/docs/api/useAnimatedStyle.md",permalink:"https://docs.swmansion.com/react-native-reanimated/docs/api/useAnimatedStyle",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/useAnimatedStyle.md",sidebar_label:"useAnimatedStyle",sidebar:"someSidebar",previous:{title:"useSharedValue",permalink:"https://docs.swmansion.com/react-native-reanimated/docs/api/useSharedValue"},next:{title:"useDerivedValue",permalink:"https://docs.swmansion.com/react-native-reanimated/docs/api/useDerivedValue"}},c=[{value:"Example",id:"example",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This hook is one of the main elements of the new Reanimated v2 API.\nIt allows for creating an association between shared values and View properties.\nThe hook takes a single worklet (it is not necessary to add ",Object(o.b)("inlineCode",{parentName:"p"},"worklet")," directive here, because the method will be converted to worklet automatically).\nThe provided worklets is responsible for returning a object with view style properties."),Object(o.b)("p",null,"For the list of available properties you can refer to the React Native core documentation on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view-style-props"}),"View Style Props"),". You may also want to check React Native\u2019s ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/style"}),"guide on styling views"),"."),Object(o.b)("p",null,"In order to connect the animated style hook result, you need to pass it as one of the ",Object(o.b)("inlineCode",{parentName:"p"},"style")," properties to the ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," version of the component (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.View"),").\nIn React Native, View\u2019s ",Object(o.b)("inlineCode",{parentName:"p"},"style")," property can take an array of styles, which gives you a way to mix static and dynamic styles.\nWe recommend that you defined static styles using React Native\u2019s ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/stylesheet"}),Object(o.b)("inlineCode",{parentName:"a"},"StyleSheet")," API")," and pass them along the animated styles object returned by this hook.\nIt is more efficient to only keep styles that are actually changes as a result of animation in the animated style hook, and the rest of the styles should be either provided as inline objects or using StyleSheets."),Object(o.b)("p",null,"If the style worklet uses any shared values, it will be executed upon these values updates and the connected view will be updated."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{12-16}","{12-16}":!0}),"\nimport { StyleSheet } from 'react-native';\nimport {\n  Animated,\n  useSharedValue,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      width: width.value,\n    };\n  });\n\n  // attach animated style to a View using style property\n  return <Animated.View style={[styles.box, animatedStyle]} />;\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 50,\n    backgroundColor: 'blue',\n  },\n});\n\n")),Object(o.b)("p",null,"In the above example, the used shared value is not changing, hence there is no real benefit of using an animated style there.\nCheck out the documentation of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"useSharedValue"}),Object(o.b)("inlineCode",{parentName:"a"},"useSharedValue"))," to lear how shared values can be updated."))}u.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);