import {col, css, row} from "../utills";

class Blocks {
  constructor(value, options) {
    this.value = value
    this.options = options
  }
  toHTML(){
    throw new Error('Метод toHTML должен быть реализован')
  }
}

export class TitleBlock extends Blocks{
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class TextBlock extends Blocks{
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}

export class ImageBlock extends Blocks{
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {alt = '', styles} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(styles)}">`)
  }
}

export class ColumnsBlock extends Blocks{
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {stylesForParent: sfp, styleForElem: sfe} = this.options
    const elem = item=>col(item, css(sfe))
    const html = this.value.map(elem).join('')
    return row(html, css(sfp))
  }
}