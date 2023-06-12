import { AvatarTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

declare module 'components' {
    export const Avatar: OverridableComponent<AvatarTypeMap<{size: number}, "div">>
}