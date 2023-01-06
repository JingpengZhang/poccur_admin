import { Dialog } from 'tdesign-react'
import style from './AttachmentInfoDialog.module.less'

interface dataType {
  group: string,
  name: string,
  type: string,
  size: string,
  upload_time: string,
  url: string
}

interface propsType {
  data: dataType | null,
  visible: boolean,
  close: () => void,
}


const AttachmentInfoDialog = (props: propsType) => {
  return (

    <Dialog
      visible={props.visible}
      header='附件信息'
      width={'900px'}
      onClose={() => props.close()}
      confirmBtn={false}
      cancelBtn={'关闭'}
    >

      <div className={style.root}>
        {
          props.data && (
            <>
              <div className='info-box'>
                <span className='info-name'>所在分组</span>
                <span className='info-value'>{props.data.group}</span>
              </div>
              <div className='info-box'>
                <span className='info-name'>文件名称</span>
                <span className='info-value'>{props.data.name}</span>
              </div>
              <div className='info-box'>
                <span className='info-name'>文件类型</span>
                <span className='info-value'>{props.data.type}</span>
              </div>
              <div className='info-box'>
                <span className='info-name'>文件大小</span>
                <span className='info-value'>{props.data.size}</span>
              </div>
              <div className='info-box'>
                <span className='info-name'>上传时间</span>
                <span className='info-value'>{props.data.upload_time}</span>
              </div>
              <div className='info-box'>
                <span className='info-name'>原始链接</span>
                <a target={'_blank'} href={props.data.url} className='info-value'>{props.data.url}</a>
              </div>
            </>
          )
        }

      </div>
    </Dialog>

  )
}

export default AttachmentInfoDialog