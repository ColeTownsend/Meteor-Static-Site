import Typography from 'typography';

const options = {
  fontFamily: 'Calibre',
  baseFontFamily: 'Calibre',
  baseFontSize: '16px',
  baseLineHeight: '24px',
  modularScales: [
    {
      "scale": "minor third"
    }
  ]
}

const typography = new Typography(options)

// Hot reload typography in development.
// if (process.env.NODE_ENV !== "production") {
//   typography.injectStyles()
// }

export default typography
