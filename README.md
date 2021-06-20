# day4

[マルチステップの実装](https://reffect.co.jp/vue/vue-js-multi-steps-input-form)

## 学んだこと
- ネストされたルーティングによる子コンポーネントの制御を取り入れた
  - router.tsでのcomponentsとrouter-viewのname属性を使い、pathが変更されずともコンポーネントをきりかえられるようにした。
  - nested router-viewを使った時のpropsが今回一番難しかった
    - router-viewにもpropsは持たせられるようだが、数が多くなると見づらい。
    - object型で渡すことにしたが、それだと子コンポーネントの方で情報を知りすぎてしまっている気がする。難しい。
- emitの親コンポーネント側で書く子メソッド名はケバブケース
- vue-property-decoratorのemitはアノテーションにemitするメソッド名を書いて省略することが出来るが、emitに値を持たせたい時は省略できない。
- partialやpickなどのUnion Typeを一部活用し、多少適切な型付けを学んだ。
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
