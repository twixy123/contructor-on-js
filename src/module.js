import image from './assets/image.jpg'
import {TitleBlock, ImageBlock, TextBlock, ColumnsBlock} from './classes/blocks'

const colorEEE = '#eee'

export const model = [
  new TitleBlock(
    'Привет мир!',
    {
      tag: `h2`,
      styles: {
        background: 'blue',
        color: 'white',
        'text-align': 'center',
        padding: '2rem'
      }
    }
  ),
  new TextBlock(
    'Тестовый текст написанный для теста приложения',
    {
      styles: {
        background: 'red',
        color: 'white',
        'text-align': 'center',
        padding: '1rem',
        'font-size': '20px',
        'font-weight': 'bold'
      }
    }
  ),
  new ImageBlock(
    image,
    {
      alt: 'It\' my IMAGES',
      styles: {
        width: '100%'
      }
    }
  ),
  new ColumnsBlock(
    [
      'Колоночный тестовый текст №1 для проверки тестового приложения "Конструктор на JavaScript',
      'Колоночный тестовый текст №2 для проверки тестового приложения "Конструктор на JavaScript',
      'Колоночный тестовый текст №3 для проверки тестового приложения "Конструктор на JavaScript',
      'Колоночный тестовый текст №4 для проверки тестового приложения "Конструктор на JavaScript',
    ],
    {
      stylesForParent: {
        'border-top': `1px solid ${colorEEE}`,
        'border-left': `1px solid ${colorEEE}`,
        'border-bottom': `1px solid ${colorEEE}`,
        background: 'blue',
        'justify-content': 'space-between'
      },
      styleForElem: {
        padding: '1rem',
        'border-right': `1px solid ${colorEEE}`,
        'text-align': 'center',
        color: 'white',
        'font-weight': '600',
        'font-size': '18px'
      }
    }
  ),

]