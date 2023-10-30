  import type { NextraThemeLayoutProps, PageMapItem } from 'nextra'
  import { AppBar, Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Toolbar, Typography } from "@mui/material"
  import '../../dist/index.css'
  import { ThemeProvider } from '@mui/material'
  import { ListGroup, theme, useTheme } from "../../dist/index"
  import '@fontsource/inter';
  import '@fontsource/inter/500.css';
  import '@fontsource/inter/600.css';
  import '@fontsource/inter/700.css';
  import { useRouter } from 'next/router'
  import { MDXProvider } from 'nextra/mdx'
  import components from "nextra/components"

 export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { theme, setMode } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display: 'flex'}} className="h-screen">
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" className="flex-grow">
            Aline
          </Typography>
          <TextField type="search"></TextField>
          <Button onClick={() => setMode(mode => mode === "light" ? "dark" : "light")}>Change theme</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {pageOpts.pageMap.map(item => <ListElement item={item} />)}
          </List>
          <Divider />

        </Box>
      </Drawer>
      <Box
        component="main"
        className='prose max-w-full dark:prose-invert h-100'
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* evaluar si es mejor pasar por sx los bordes dinamicos etc  */}
        <Toolbar></Toolbar>
        <MDXProvider components={components}>
          {children}
        </MDXProvider>
      </Box>
    </Box>
    </ThemeProvider>
  )
}

const ListElement = ({item}: {item: PageMapItem}) => {
  const router = useRouter()

  if(item.kind === "Folder")
  return <ListGroup label={item.name}>
    {item.children.map((child, idx) => child.kind === "MdxPage" &&
      <ListItemButton key={idx} onClick={() => router.push(child.route)}>
        <ListItemText primary={child.name} />
      </ListItemButton>
    )}
  </ListGroup>

  if(item.kind === "MdxPage")
  return <ListItem disablePadding>
    <ListItemButton onClick={() => router.push(item.route)}>
      <ListItemText primary={item.name} />
    </ListItemButton>
  </ListItem>
}