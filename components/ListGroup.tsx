import { Collapse, ListItemButton, ListItemText, ListItemIcon } from "@mui/material"
import { ReactFragment, useState } from "react"
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'

export type ListGroup = {
    label: string,
    children?: ReactFragment,
    Prepend?: ReactFragment,
    classes?: {
        label: string
    }
}
export default function ListGroup({ label, children, Prepend, classes }) {
    const [expanded, setExpanded] = useState(false)
    const Append = expanded? RemoveRoundedIcon : AddRoundedIcon

    return <>
        <ListItemButton onClick={() => setExpanded(v => !v)} disableGutters>
            {Prepend && <Prepend className="mr-2"/>}
            <ListItemText primary={label} classes={{primary: classes?.label}}></ListItemText>
            <ListItemIcon>
                <Append className="fill-slate-400"/>
            </ListItemIcon>
        </ListItemButton>
        <Collapse in={expanded}>
            { children }
        </Collapse>
    </>
}