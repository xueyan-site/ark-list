import React, { useState } from 'react'
import { Article, Segment } from 'ark-markdown'
import { Playground } from 'ark-playground'
import { List, ListItem } from 'ark-list'
import { SunIcon } from 'sicon'

const MARK1 = `
列表展示组件库，用于罗列列表数据，或展示设置项、菜单等场景。
`

const code1 = `
import React from 'react'
import { List, ListItem } from 'ark-list'
import { SunIcon } from 'sicon'

export default function Example() {
  return (
    <div
      style={{
        padding: '12px',
        backgroundColor: 'var(--base)'
      }}
    >
      <List
        label="这是标签这是标签这是标签这是标签这是标签这是标签这是标签这是标签这是标签" 
        note="这是注释" 
        desc="这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明" 
        footer="这是底部这是底部这是底部这是底部这是底部这是底部这是底部这是底部这是底部这是底部这是底部"
        iconWidth={40}
        arrow={true}
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
        >
          这是内容
        </ListItem>
      </List>
    </div>
  )
}
`

const code2 = `
import React from 'react'
import { List, ListItem } from 'ark-list'
import { SunIcon } from 'sicon'

export default function Example() {
  return (
    <div
      style={{
        padding: '12px',
        backgroundColor: 'var(--base)'
      }}
    >
      <List label="这是标签" footer="这是底部">
        <ListItem icon={<SunIcon/>} arrow={true}>
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
        <ListItem arrow={true} error="这是错误信息"/>
      </List>
      <List>
        <ListItem option="这是选项"/>
        <ListItem option="这是选项"/>
        <ListItem option="这是选项"/>
      </List>
      <List>
        <ListItem arrow={true}/>
        <ListItem arrow={true}/>
        <ListItem arrow={true}/>
      </List>
    </div>
  )
}
`

export default function Main() {
  const scope = { React, useState, List, ListItem, SunIcon }
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Segment>## 示例1</Segment>
      <Playground scope={scope} showCode={false}>
        {code1}
      </Playground>
      <Segment>## 示例2</Segment>
      <Playground scope={scope} showCode={false}>
        {code2}
      </Playground>
    </Article>
  )
}
