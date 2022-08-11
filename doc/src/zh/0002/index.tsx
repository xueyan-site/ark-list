import React from 'react'
import { Article, Segment } from 'ark-markdown'

const MARK1 = `
列表组件

\`\`\`
type List = (props: ListProps) => JSX.Element
\`\`\`

## ListProps

继承 <a href="#listitempreset">ListItemPreset</a> 部分属性

\`icon\`、\`iconWidth\`、\`option\`、\`arrow\`、\`target\`、
\`disabled\`、\`getHref\`、\`onClick\`

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| children | 子节点 | \`? React.ReactNode\` |  |
| label | 标签 | \`? React.ReactNode\` |  |
| note | 注释 | \`? React.ReactNode\` |  |
| desc | 描述 | \`? React.ReactNode\` |  |
| footer | 底部 | \`? React.ReactNode\` |  |
| preset | 列表项预设值 | \`? ListItemPreset\` |  |

## ListItemPreset

ListItem 组件参数预设值

\`\`\`
interface ListItemPreset extends ListItemProps {
  /** 统一生成链接 */
  getHref?: ListItemGetHref
}
\`\`\`

> 其他类型：[ListItemProps](?doc=0003#listitemprops)

## ListItemGetHref

统一生成链接的方法

\`\`\`
type ListItemGetHref = (
  props: ListItemProps
) => string
\`\`\`

若 ListItem 组件传递了 href 参数，则此方法无效
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
