import React, { memo, useState } from "react"
import classnames from "classnames"
import CommonStyle from 'styles/common.module.less';
import { Button, Col, MessagePlugin, Row } from "tdesign-react";
import style from './index.module.less'
import MdEditor from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'

import PublishDialog from "./components/PublishDialog";


export default memo(() => {

  // 内容
  const [text, setText] = useState('')

  const [publishDialogVisible, setPublishDialogVisible] = useState(false)

  // 发布按钮回调
  const handlePublishClick = () => {
    if (text === '') {
      return MessagePlugin.error('内容不能为空')
    }

    setPublishDialogVisible(true)
  }

  return (
    <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
      <Row justify="space-between" className={style.toolBar}>
        <Col>
          <Row gutter={8} align='middle'>
            <Col>
              <Button>导入</Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <Button onClick={handlePublishClick}>发布</Button>
        </Col>
      </Row>

      <MdEditor style={{ marginTop: '30px' }} toolbarsExclude={['github']} modelValue={text} onChange={setText} />

      <PublishDialog visible={publishDialogVisible} close={() => { setPublishDialogVisible(false) }} />
    </div>
  )
})