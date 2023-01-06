import { IRouter } from '../index';
import { lazy } from 'react';
import { ViewModuleIcon } from 'tdesign-icons-react';


const result: IRouter[] = [
  {
    path: '/attachment',
    Component: lazy(() => import('pages/Attachment')),
    meta: {
      title: '附件管理',
      Icon: ViewModuleIcon
    }
  }
]

export default result