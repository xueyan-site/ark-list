import React from 'react'
import cn from 'classnames'
import styles from './list.scss'
import { ListItemPresetProvider } from './contexts'
import type { ListItemPreset } from './contexts'

export interface ListProps extends
  Pick<ListItemPreset,
  | 'icon' 
  | 'iconWidth' 
  | 'option' 
  | 'arrow' 
  | 'disabled' 
  | 'onClick'
> {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 子节点 */
  children?: React.ReactNode
  /** 标签 */
  label?: React.ReactNode
  /** 注释 */
  note?: React.ReactNode
  /** 描述 */
  desc?: React.ReactNode
  /** 底部 */
  footer?: React.ReactNode
  /** 预设值 */
  preset?: ListItemPreset
}

export function List({
  className,
  style,
  children,
  label,
  note,
  desc,
  footer,
  preset,
  icon,
  iconWidth,
  option,
  arrow,
  disabled,
  onClick,
}: ListProps) {
  return children ? (
    <ListItemPresetProvider
      value={{
        icon,
        iconWidth,
        option,
        arrow,
        disabled,
        onClick,
        ...preset,
      }}
    >
      <div
        style={style}
        className={cn(
          className, 
          styles.xrlist,
          (label || desc) && styles.hasheader,
          footer && styles.hasfooter
        )}
      >
        {(label || desc) && (
          <div className={styles.header}>
            {label && (
              <div className={styles.main}>
                <div className={styles.label}>{label}</div>
                {note && <div className={styles.note}>{note}</div>}
              </div>
            )}
            {desc && <div className={styles.desc}>{desc}</div>}
          </div>
        )}
        {children}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </ListItemPresetProvider>
  ) : null
}
