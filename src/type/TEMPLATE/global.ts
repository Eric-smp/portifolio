import { Dispatch, SetStateAction } from "react"

export type TGlobalProvider ={
    visibleModal:boolean
    setVisibleModal:Dispatch<SetStateAction<boolean>>
}