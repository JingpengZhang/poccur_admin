import React, { memo, useState } from "react";
import classnames from "classnames";
import CommonStyle from 'styles/common.module.less';
import style from './index.module.less'
import { Col, Row, Button, Table, Tag } from 'tdesign-react';
import { useNavigate } from "react-router-dom";


export const StatusMap: {
  [key: number]: React.ReactElement
} = {
  0: (
    <Tag theme="success" variant="light">
      公开
    </Tag>
  ),
  1: (
    <Tag theme="danger" variant="light">
      私密
    </Tag>
  )
}

export default memo(() => {

  const navigate = useNavigate()

  const [articles, setArticles] = useState([
    {
      id: 3,
      cover: 'https://static001.geekbang.org/infoq/95/9542f9f9a1899d7ecb4533fc2acf8ea2.png',
      title: 'Git使用教程之本地仓库的基本操作',
      sort: 'Git',
      status: 0,
      description: 'Git每次会提取整个代码仓库的完整镜像，相当于对整个代码仓库都进行了一次备份，这样计时版本服务器除了问题，我们可以直接采用本地仓库恢复！结合本地版本管理功能，远程版本管理服务器出问题了，我们依然能继续写自己的代码，当他恢复的时候我们再提交我们的本地版本！',
      create_time: '2022/12/30 22:39:11'
    }
  ])


  return (
    <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
      <Row justify={'space-between'} className={style.toolBar}>
        <Col>
          <Button onClick={() => navigate('/article/create')}>添加文章</Button>
        </Col>
        <Col>

        </Col>
      </Row>

      <Table columns={[
        {
          colKey: 'row-select',
          fixed: 'left',
          type: 'multiple'
        },
        {
          align: 'left',
          width: 300,
          ellipsis: true,
          colKey: 'title',
          title: '标题'
        },
        {
          align: 'left',
          width: 500,
          ellipsis: true,
          colKey: 'description',
          title: '摘要'
        },
        {
          align: 'left',
          width: 100,
          colKey: 'sort',
          title: '分类'
        },
        {
          align: 'left',
          width: 100,
          colKey: 'status',
          title: '状态',
          cell({ row }) {
            return StatusMap[row.status]
          }
        },
        {
          align: 'left',
          width: 200,
          colKey: 'create_time',
          title: '发表时间'
        },
        {
          align: 'left',
          fixed: 'right',
          width: 180,
          colKey: 'op',
          title: '操作',
          cell() {
            return (
              <>
                <Button theme='primary' variant='text'>
                  管理
                </Button>
                <Button theme='primary' variant='text'>
                  删除
                </Button>
              </>
            );
          },
        },
      ]}
        data={articles}
        rowKey='index'
        verticalAlign="top"
        hover
      />
    </div>
  )
})