import React, { useState } from "react"
import { Dialog, Form, Input, Cascader, FormRule, Button, MessagePlugin, Tabs } from 'tdesign-react';
import FormItem from "tdesign-react/es/form/FormItem"
import { SubmitContext } from 'tdesign-react/es/form';
import TabPanel from "tdesign-react/es/tabs/TabPanel";

interface propsType {
  groupings: any[],
  visible: boolean,
  close: () => void
}

const GroupManageDialog = (props: propsType) => {

  /**
   * 添加新分组
   */
  // 父级分组
  const [parentAdd, setParentAdd] = useState(1)
  // 分组名称
  const [nameAdd, setNameAdd] = useState('')
  // 校验
  const rulesAdd: { [x: string]: FormRule[] } = {
    parent: [{ required: true, message: '必填', type: 'error' }],
    name: [{ required: true, message: '必填', type: 'error' }]
  }
  // 提交
  const onSubmitAdd = (e: SubmitContext) => {
    if (e.validateResult === true) {
      MessagePlugin.success('提交成功')
      console.log(parentAdd);
      console.log(nameAdd);
    }
  }

  /**
    * 编辑分组
    */
  // 父级分组
  const [parentEdit, setParentEdit] = useState(1)
  // 分组名称
  const [nameEdit, setNameEdit] = useState('')
  // 新父级分组
  const [newParentEdit, setNewParentEdit] = useState(1)
  // 校验
  const rulesEdit: { [x: string]: FormRule[] } = {
    parent: [{ required: true, message: '必填', type: 'error' }],
    name: [{ required: true, message: '必填', type: 'error' }],
    newParent: [{ required: true, message: '必填', type: 'error' }]
  }
  // 提交
  const onSubmitEdit = (e: SubmitContext) => {
    if (e.validateResult === true) {
      MessagePlugin.success('提交成功')
      console.log(nameEdit);
      console.log(newParentEdit);
    }
  }
  const handleEditParentChange = (value: any) => {
    setParentEdit(value)
    setNewParentEdit(value)
  }

  /**
    * 删除分组
    */
  // 选择分组
  const [groupDel, setGroupDel] = useState(1)
  // 校验
  const rulesDel: { [x: string]: FormRule[] } = {
    group: [{ required: true, message: '必填', type: 'error' }],
  }
  // 提交
  const onSubmitDel = (e: SubmitContext) => {
    if (e.validateResult === true) {
      MessagePlugin.success('提交成功')
      console.log(groupDel);

    }
  }


  const handleOnClose = () => {
    props.close()
  }

  return <Dialog
    confirmBtn={false}
    cancelBtn={false}
    visible={props.visible}
    onClose={handleOnClose}
    draggable={false}
    header='分组管理'
    mode={'modal'}
    footer={false}
  >

    <Tabs placement={'top'} size={'medium'}>
      <TabPanel style={{ paddingTop: '10px' }} value={'1'} label={'添加新分组'}>
        <Form labelAlign={'top'} rules={rulesAdd} onSubmit={onSubmitAdd}>

          <FormItem label='父级分组' name='parent'>
            <Cascader checkStrictly options={props.groupings} size={'medium'} value={parentAdd} onChange={(value: any) => setParentAdd(value)} placeholder='请选择分组' />
          </FormItem>

          <FormItem label='分组名称' name='name'>
            <Input value={nameAdd} onChange={setNameAdd} clearable />
          </FormItem>

          <FormItem>
            <Button theme="primary" type="submit">提交</Button>
            <Button style={{ marginLeft: '20px' }} theme="default" variant={'outline'} onClick={handleOnClose}>取消</Button>
          </FormItem>
        </Form>
      </TabPanel>

      <TabPanel style={{ paddingTop: '10px' }} value={'2'} label={'编辑分组'}>
        <Form labelAlign={'top'} rules={rulesEdit} onSubmit={onSubmitEdit}>

          <FormItem label='请选择分组' name='parent'>
            <Cascader checkStrictly options={props.groupings} size={'medium'} value={parentEdit} onChange={handleEditParentChange} placeholder='请选择分组' />
          </FormItem>

          <FormItem label='新分组名称' name='name'>
            <Input value={nameEdit} onChange={setNameEdit} clearable />
          </FormItem>


          <FormItem label='移动到' name='newParent'>
            <Cascader checkStrictly options={props.groupings} size={'medium'} value={newParentEdit} onChange={(value: any) => setNewParentEdit(value)} placeholder='请选择分组' />
          </FormItem>

          <FormItem>
            <Button theme="primary" type="submit">提交</Button>
            <Button style={{ marginLeft: '20px' }} theme="default" variant={'outline'} onClick={handleOnClose}>取消</Button>
          </FormItem>
        </Form>
      </TabPanel>

      <TabPanel style={{ paddingTop: '10px' }} value={'3'} label={'删除分组'}>
        <Form labelAlign={'top'} rules={rulesDel} onSubmit={onSubmitDel}>

          <FormItem label='请选择分组' name='group'>
            <Cascader checkStrictly options={props.groupings} size={'medium'} value={groupDel} onChange={(value: any) => setGroupDel(value)} placeholder='请选择分组' />
          </FormItem>

          <FormItem>
            <Button theme="primary" type="submit">提交</Button>
            <Button style={{ marginLeft: '20px' }} theme="default" variant={'outline'} onClick={handleOnClose}>取消</Button>
          </FormItem>
        </Form></TabPanel>
    </Tabs>



  </Dialog>

}

export default GroupManageDialog