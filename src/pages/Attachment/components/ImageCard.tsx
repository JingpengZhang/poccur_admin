import { Checkbox } from 'tdesign-react'
import style from './ImageCard.module.less'

interface propsType {
  cover: string,
  name: string,
}

const ImageCard = (props: propsType) => {

  return (
    <div className={style.root}>
      <img src={props.cover} />
      <div className='float'>
        <div className='top'>
          <Checkbox onClick={(e: any) => { e.stopPropagation() }}></Checkbox>
        </div>
        <span className='name'>{props.name}</span>
      </div>

    </div>
  )
}

export default ImageCard