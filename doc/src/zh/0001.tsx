import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { List, ListItem } from 'xueyan-react-list'
import { SunIcon } from 'xueyan-react-icon'

const MARK1 = `
## xueyan-react-list
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <div>
        <List 
          label="完整版本，这是标签这是标签这是标签这是标签这是标签这是标签这是标签这是标签这是标签" 
          note="这是注释" 
          desc="这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明" 
          footer="这是底部这是底部这是底部这是底部这是底部这是底部这是底部这是底部这是底部这是底部这是底部"
          iconWidth={40}
          onClick={(props, event) => {
            console.log(props, event)
          }}
        >
          <ListItem
            icon={<SunIcon />}
            label="这是标签这是标签这是标签这是标签这是标签这是标签这是标签这是标签这是标签"
            note="这是注释"
            desc="这是说明" 
            option="这是选项"
            error="这是错误信息"
            arrow={true}
            disabled={true}
          >
            这是内容
          </ListItem>
          <ListItem
            icon={<img src={XT_PATH + 'favicon.png'} style={{ width: '20px' }} />}
            label="这是标签这是标签这是标签这是标签这是标签这是标签这是标签这是标签这是标签"
            note="这是注释"
            desc="这是说明" 
            option="这是选项"
            error="这是错误信息"
            arrow={true}
          >
            这是内容
          </ListItem>
        </List>
        <List label="每一项单独罗列" footer="这是底部">
          <ListItem icon={<SunIcon/>} arrow={true}>
            这是内容
          </ListItem>
        </List>
        <List note="这是注释">
          <ListItem arrow={true}>
            这是内容
          </ListItem>
        </List>
        <List desc="这是说明">
          <ListItem icon={<SunIcon/>}>
            这是内容
          </ListItem>
        </List>
        <List desc="这是说明">
          <ListItem icon={<SunIcon/>} label="这是标签"/>
        </List>
        <List desc="这是说明" footer="这是底部">
          <ListItem icon={<SunIcon/>} note="这是注释"/>
        </List>
        <List desc="这是说明">
          <ListItem desc="这是说明"/>
        </List>
        <List desc="这是说明">
          <ListItem option="这是选项"/>
        </List>
        <List>
          <ListItem option="这是选项"/>
          <ListItem option="这是选项"/>
          <ListItem option="这是选项"/>
        </List>
        <List>
          <ListItem arrow={true} error="这是错误信息"/>
        </List>
        <List>
          <ListItem arrow={true}/>
          <ListItem arrow={true}/>
          <ListItem arrow={true}/>
          <ListItem arrow={true}/>
        </List>
        <List>
          <ListItem arrow={true}/>
        </List>
        <List>
          <ListItem arrow={true}/>
        </List>
      </div>
    </Article>
  )
}
