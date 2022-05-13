import { createContext, useContext } from 'react'
import type { ListItemProps } from './list-item'

export interface ListItemPreset extends ListItemProps {}

const ListItemPresetContext = createContext<ListItemPreset>({})

export const ListItemPresetProvider = ListItemPresetContext.Provider

export const useListItemPreset = () => useContext(ListItemPresetContext)
