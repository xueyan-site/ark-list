import React, { Fragment } from 'react'
import cn from 'classnames'
import { DirectionIcon } from 'xueyan-react-icon'
import { useListItemPreset } from './contexts'
import styles from './list-item.scss'

export type ListItemOnClick = (
  props: ListItemProps,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => void

export interface ListItemProps extends Record<string, any> {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** icon */
  icon?: React.ReactNode
  /** icon宽度 */
  iconWidth?: React.CSSProperties['width']
  /** 标签 */
  label?: React.ReactNode
  /** 注释 */
  note?: React.ReactNode
  /** 描述 */
  desc?: React.ReactNode
  /** 选项 */
  option?: React.ReactNode
  /** 箭头（可自定义） */
  arrow?: boolean | React.ReactNode
  /** 内容 */
  children?: React.ReactNode
  /** 错误信息 */
  error?: React.ReactNode
  /** 禁止 */
  disabled?: boolean
  /** 点击事件 */
  onClick?: ListItemOnClick
}

export function ListItem(props: ListItemProps) {
  const preset = useListItemPreset()
  const currProps = { ...preset, ...props }
  const {
    className,
    style,
    icon,
    iconWidth,
    label,
    desc,
    note,
    option,
    arrow,
    children,
    error,
    disabled,
    onClick
  } = currProps
  return (
    <div
      style={style}
      className={cn(
        className, 
        styles.xrlistitem,
        disabled && styles.disabled,
        !disabled && onClick && styles.canclick
      )}
      onClick={event => {
        if (onClick && !disabled) {
          onClick(currProps, event)
        }
      }}
    >
      <div 
        className={styles.tl} 
        style={{ width: iconWidth }}
      >{icon}</div>
      <div className={styles.tr}>
        <div className={styles.info}>
          {(label || note) && (
            <div className={styles.main}>
              <div className={styles.label}>{label}</div>
              {note && <div className={styles.note}>{note}</div>}
            </div>
          )}
          {desc && <div className={styles.desc}>{desc}</div>}
        </div>
        {option && <div className={styles.option}>{option}</div>}
        {arrow && (
          <div className={styles.arrow}>
            {arrow !== true ? arrow : (
              <DirectionIcon className={styles.arrowicon} direction='right'/>
            )}
          </div>
        )}
      </div>
      {(children || error) && (
        <Fragment>
          <div className={styles.bl}/>
          <div className={styles.br}>
            {children && <div className={styles.children}>{children}</div>}
            {error && <div className={styles.error}>{error}</div>}
          </div>
        </Fragment>
      )}
    </div>
  )
}
