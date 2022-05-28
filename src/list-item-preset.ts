import { createContext, useContext } from 'react'
import type { ListItemProps } from './list-item'

export type ListItemGetHref = (props: ListItemProps) => string

export interface ListItemPreset extends ListItemProps {
  /** 统一生成链接 */
  getHref?: ListItemGetHref
}

const ListItemPresetContext = createContext<ListItemPreset>({})

export const ListItemPresetProvider = ListItemPresetContext.Provider

export const useListItemPreset = () => useContext(ListItemPresetContext)
