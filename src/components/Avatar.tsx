import React from "react"
import { Avatar as MuiAvatar, AvatarTypeMap } from "@mui/material"

//transform this file into ts and add props types

export interface AvatarProps extends AvatarTypeMap{
  alt: string,
  size: number
}

export default function Avatar(props: AvatarProps) {
    function getColor() {
        let colors = ['purple', 'orange', 'pink', 'sky', 'indigo']
        return colors[Math.floor(props.alt.length / colors.length)]
      }
    
    const computedProps = {
            sx: {
                ...(props.size && {width: props.size, height: props.size}),
            },
            className: `bg-${getColor()}-600`,
            ...(props.alt && {src: props.alt}),
            ...props,
            
    }

    return (
      <MuiAvatar {...computedProps} />
    )
}
//define that props.children is a string