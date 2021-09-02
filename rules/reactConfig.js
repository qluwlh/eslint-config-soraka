module.exports = {
  'react/no-access-state-in-setstate': 0, //
  'react/no-unused-state': 0, //
  'react/button-has-type': 0, // button type 默认值
  'react/jsx-no-undef': 0, //在JSX中禁止未声明的变量
  'react/jsx-uses-vars': 0, //防止在JSX中使用的变量被错误地标记为未使用
  'react/no-did-mount-set-state': 0, //防止在componentDidMount中使用setState
  'react/no-did-update-set-state': 0, //防止在componentDidUpdate中使用setState
  'react/no-set-state': 0, //防止使用setState
  'react/self-closing-comp': 0, //防止没有children的组件的额外结束标签
  'react/jsx-props-no-spreading': 0, // <App {...props} />
  'react/static-property-placement': 0, // 静态方法
  'react/display-name': 0, //防止在React组件定义中丢失displayName
  'react/state-in-constructor': 0, // class state 在构造方法内
  'react/destructuring-assignment': 0, // 解构,
  'react/jsx-filename-extension': 0, // jsx后缀名
  'react/require-default-props': 0, // propTypes 默认值
  'react/jsx-fragments': 0, // <React.Fragment> <>
  'react/jsx-wrap-multilines': 0, // 周围缺少括号
  'react/prop-types': 0, //防止在React组件定义中丢失props验证
  'react/forbid-prop-types': 0, // 禁止某些propTypes
  'react/sort-comp': 0, //强制组件方法顺序
  'react/react-in-jsx-scope': 0, //使用JSX时防止丢失React
  'react/jsx-one-expression-per-line': 0, // 新行
  'react-hooks/exhaustive-deps': 1, // Checks deps of Hooks
  'react/no-array-index-key': 1, //防止在数组中遍历中使用数组key做索引
  'react/no-deprecated': 1, //不使用弃用的方法,
  'react/jsx-no-target-blank': 1, // target='_blank'  添加 rel='noreferrer noopener'
  'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks
  'react/jsx-no-duplicate-props': 2, //防止在JSX中重复的props
  'react/no-direct-mutation-state': 2, //防止this.state的直接变异
  'react/no-unknown-property': 2, //防止使用未知的DOM属性
}
