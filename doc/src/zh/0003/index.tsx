import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
列表展示项组件

\`\`\`
type ListItem = (props: ListItemProps) => JSX.Element
\`\`\`

## ListItemProps

继承 \`Record<string, any>\` （可传入任何数据，用于向 List 的 onClick 方法传递参数）

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| icon | icon | \`? React.ReactNode\` |  |
| iconWidth | icon宽度 | \`? React.CSSProperties['width']\` |  |
| label | 标签 | \`? React.ReactNode\` |  |
| note | 注释 | \`? React.ReactNode\` |  |
| desc | 描述 | \`? React.ReactNode\` |  |
| option | 选项 | \`? React.ReactNode\` |  |
| arrow | 箭头 | \`? boolean,React.ReactNode\` | 可自定义 |
| children | 自定义内容 | \`? React.ReactNode\` | label 不传时，会占据 label 的位置 |
| error | 错误信息 | \`? React.ReactNode\` |  |
| disabled | 禁止 | \`? boolean\` |  |
| target | 超链接跳转方式 | \`? React.HTMLAttributeAnchorTarget\` | 默认 _self |
| href | 超链接地址 | \`? string\` |  |
| onClick | 点击事件 | \`? ListItemOnClick\` |  |

## ListItemOnClick

点击时触发的方法

\`\`\`
type ListItemOnClick = (
  props: ListItemProps,
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => void
\`\`\`
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
