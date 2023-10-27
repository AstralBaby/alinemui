import nextra from "nextra"

const withNextra = nextra({
  theme: './components/layout.tsx',
  themeConfig: './theme.config.tsx',
})

const config = {
  
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/docs',
  //       destination: '/docs/get-started',
  //       permanent: true
  //     }
  //   ]
  // }
}

export default withNextra()
