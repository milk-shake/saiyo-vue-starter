export const columns = 12
export const maxWidth = '680px'

export let colors = {
  'white': '#FFFFFF',
  'black': '#4A4A4A',
  'grey': '#DDDDDD',
  'orange': '#F4B45E',
  'yellow': '#F4EB53',
  'green': '#99F451',
  'turquoise': '#67F4B9',
  'blue': '#69D2E7',
  'purple': '#9C8AF4',
  'red': '#F4655B'
}

export let overrideColors = {
  'primary': '#B4FFFE',
  'blue': '#B4FFFE',
  'green': '#E0FFB4',
  'cream': '#FCFBE3'
}

colors = Object.assign({}, colors, overrideColors)

colors.primary = colors.blue
colors.info = colors.turquoise
colors.success = colors.green
colors.warning = colors.yellow
colors.danger = colors.red

const baseline = 2
export let sizes = {
  'no': 0,
  'tiny': '1px',
  'xsmall': baseline * 0.4,
  'small': baseline * 0.6,
  'medium': baseline,
  'large': baseline * 1.3,
  'xlarge': baseline * 2,
  'huge': baseline * 3,
  'giant': baseline * 5
}

export let fonts = {
  'light': 'sans-serif',
  'primary': 'Open Sans',
  'italic': 'sans-serif',
  'bold': 'sans-serif',
  'mono': 'monospace'
}

export let weights = {
  'thin': 100,
  'extra-light': 200,
  'light': 300,
  'regular': 400,
  'medium': 500,
  'bold': 600,
  'extra-bold': 700,
  'black': 800
}

export let media = {
  'tablet': 796,
  'desktop': 1000,
  'widescreen': 1192,
  'fullhd': 1384
}
