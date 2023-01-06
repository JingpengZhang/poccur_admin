import React, { useState } from "react"
import classname from 'classnames';
import style from './PublishDialog.module.less'
import { Button, Dialog, Form, FormRule, Input, MessagePlugin, Radio, Select, Textarea } from "tdesign-react";
import FormItem from "tdesign-react/es/form/FormItem";
import { SubmitContext } from "tdesign-react/es/form";
import { OptionData } from "tdesign-react/es/common";


interface propsType {
  visible: boolean,
  close: () => void
}

const PublishDialog = (props: propsType) => {

  // 标题
  const [title, setTitle] = useState('')

  // 分类
  const [sort, setSort] = useState<any>(0)

  // 状态
  const [status, setStatus] = useState<any>(0)

  // 摘要
  const [description, setDescription] = useState('')

  const handleOnClose = () => {
    props.close()
  }

  const rules: { [x: string]: FormRule[] } = {
    title: [{ required: true, message: '必填', type: 'error' }],
    sort: [{ required: true, message: '必填', type: 'error' }],
    description: [{ required: true, message: '必填', type: 'error' }]
  }

  const [sortOptions, setSortOptions] = useState<OptionData[]>([
    {
      label: 'Vue',
      value: 0
    },
    {
      label: 'React',
      value: 1
    }
  ])

  const onSubmit = (e: SubmitContext) => {
    if (e.validateResult === true) {
      MessagePlugin.success('提交成功')
      console.log(title);
      console.log(sort);

      console.log(status);
      console.log(description);

    }
  }

  return <Dialog
    closeOnEscKeydown
    destroyOnClose
    draggable={false}
    header="发布"
    footer={false}
    mode={'modal'}
    onClose={handleOnClose}
    visible={props.visible}
    confirmBtn={false}
    cancelBtn={false}
  >
    <Form onSubmit={onSubmit} labelAlign={'top'} rules={rules}>
      <FormItem label='标题' name='title'>
        <Input value={title} onChange={setTitle} clearable />
      </FormItem>

      <FormItem label='分类' name='sort'>
        <Select value={sort} onChange={setSort} clearable>
          {
            sortOptions.map((item) => (
              <Select.Option value={item.value} label={item.label} key={item.value} />
            ))
          }
        </Select>
      </FormItem>

      <FormItem label='状态' name='status'>
        <Radio.Group value={status} onChange={setStatus}>
          <Radio value={0}>公开</Radio>
          <Radio value={1}>私密</Radio>
        </Radio.Group>
      </FormItem>

      <FormItem label='摘要' name='description'>
        <Textarea value={description} onChange={setDescription} />
      </FormItem>

      <FormItem>
        <Button theme="primary" type="submit">提交</Button>
        <Button style={{ marginLeft: '20px' }} theme="default" variant={'outline'} onClick={handleOnClose}>取消</Button>
      </FormItem>
    </Form>

  </Dialog>
}

export default PublishDialog