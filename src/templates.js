import {row, col, css} from './utills'

function title(block) {
  const {tag = 'h1', styles} = block.options
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
  return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}

function columns(block) {
  const {stylesForParent: sfp, styleForElem: sfe} = block.options
  const elem = item=>col(item, css(sfe))
  const html = block.value.map(elem).join('')
  return row(html, css(sfp))
}

function image(block) {
  const {alt = '', styles} = block.options
  return row(`<img src="${block.value}" alt="${alt}" style="${css(styles)}">`)
}


export const templates = {
  title,
  text,
  image,
  columns
}