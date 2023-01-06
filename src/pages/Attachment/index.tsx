import React, { useState } from "react";
import classnames from "classnames"
import CommonStyle from 'styles/common.module.less';
import { Col, Row, Button, Cascader, Loading } from 'tdesign-react';
import style from './index.module.less'
import { RefreshIcon, CloudUploadIcon, SettingIcon } from "tdesign-icons-react";
import GroupManageDialog from "./components/GroupManageDialog";
import ImageCard from "./components/ImageCard";
import AttachmentInfoDialog from "./components/AttachmentInfoDialog";

const Attachment = () => {

  const [types, setTypes] = useState([
    {
      id: 1,
      name: '图片',
    },
    {
      id: 2,
      name: '视频',
    },
    {
      id: 3,
      name: '音频',
    },
  ])

  const [grouping, setGrouping] = useState([
    {
      label: '未分组',
      value: 1,
    },
    {
      label: '博文',
      value: 2,
      children: [{
        label: '技术',
        value: 3
      }, {
        label: '生活',
        value: 4
      }]
    }
  ])

  const [currentGroup, setCurrentGroup] = useState(1)

  const handleCurrentGroupOnChange = (value: any) => {
    setCurrentGroup(value)
  }

  const [currentType, setCurrentType] = useState(0)

  const switchType = (id: number) => {
    setCurrentType(id)
  }

  // 分组管理
  const [groupManageDialogVisible, setGroupManageDialogVisible] = useState(false)

  const [listData, setListData] = useState([
    {
      id: 1,
      group: '博客/生活',
      name: '24d2c7b927c209f23bde02d494b5d5fc.png',
      cover: 'https://img-blog.csdnimg.cn/img_convert/751ef4450d8fad6a553f36957667ca6a.jpeg',
      type: 'image/png',
      type_id: 1,
      size: '2.36 MB',
      upload_time: '2023-01-06 14:34',
      url: 'http://localhost:8090/upload/24d2c7b927c209f23bde02d494b5d5fc.png'
    }
  ])

  // 附件信息预览弹窗
  const [attachmentInfoDialogVisible, setAttachmentInfoDialogVisible] = useState(false)
  const [attachmentInfoData, setAttachmentInfoData] = useState(null)

  const handleAttachmentClick = (data: any) => {
    setAttachmentInfoData(data)
    setAttachmentInfoDialogVisible(true)

  }

  return (
    <div className={[classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor), style.root].join(' ')}>
      <Row justify={'space-between'} align={'center'} className='toolBar'>
        <Col>
          <div className="left-box">
            <ul className='type-list'>
              <li onClick={() => switchType(0)} className={currentType === 0 ? 'active' : ''}>全部</li>
              {
                types.map((item) => (
                  <li key={item.id} onClick={() => switchType(item.id)} className={item.id === currentType ? 'active' : ''}>{item.name}</li>
                ))
              }
            </ul>

          </div>
        </Col>
        <Col>
          <Button shape="round" variant="text">
            <RefreshIcon />
          </Button>
          <Button style={{ marginLeft: '10px' }} icon={<CloudUploadIcon />}>上传附件</Button>
        </Col>
      </Row>
      <Row justify={'start'}>
        <Col>
          <Cascader checkStrictly options={grouping} size={'medium'} value={currentGroup} onChange={handleCurrentGroupOnChange} placeholder='请选择分组' />

        </Col>
        <Col>
          <Button onClick={() => setGroupManageDialogVisible(true)} variant="outline" style={{ marginLeft: '20px' }} icon={<SettingIcon />}>分组管理</Button>
        </Col>

      </Row>

      <ul className="list">
        {
          listData.map((item) => {
            if (item.type_id === 1) {
              return (
                <li key={item.id} style={{ cursor: "pointer" }} onClick={() => handleAttachmentClick(item)}>
                  <ImageCard cover={item.cover} name={item.name} />
                </li>
              )
            }
          })
        }
      </ul>


      <GroupManageDialog groupings={grouping} visible={groupManageDialogVisible} close={() => setGroupManageDialogVisible(false)} />


      <AttachmentInfoDialog data={attachmentInfoData} visible={attachmentInfoDialogVisible} close={() => setAttachmentInfoDialogVisible(false)} />
    </div >
  )
}

export default React.memo(Attachment)