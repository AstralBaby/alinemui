import React from "react"
import { Avatar as MuiAvatar } from "@mui/material"

//transform this file into ts and add props types
export default function Avatar(props) {
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