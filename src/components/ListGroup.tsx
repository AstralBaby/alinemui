import React, { ReactNode } from "react"
import { Collapse, ListItemButton, ListItemText, ListItemIcon, List } from "@mui/material"
import { useState } from "react"
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export interface ListGroupProps {
    label: string,
    children: ReactNode,
    Prepend?: React.FunctionComponent<any>,
    classes?: {
        label: string
    } 
}
export default function ListGroup({ label, children, Prepend, classes }: ListGroupProps) {
    const [expanded, setExpanded] = useState(false)
    const Append = expanded? ExpandLess : ExpandMore

    return <>
        <ListItemButton onClick={() => setExpanded(v => !v)}>
            {Prepend && <Prepend className="mr-2"/>}
            <ListItemText primary={label} classes={{primary: classes?.label}}></ListItemText>
            <ListItemIcon>
                <Append className="fill-gray-400"/>
            </ListItemIcon>
        </ListItemButton>
        <Collapse in={expanded}>
            <List disablePadding className="AlnListGroup">
                { children }
            </List>
        </Collapse>
    </>
}