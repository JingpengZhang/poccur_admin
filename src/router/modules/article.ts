import { lazy } from "react";
import { IRouter } from "../index";
import { ViewModuleIcon } from "tdesign-icons-react";

const result: IRouter[] = [
  {
    path: '/article',
    meta: {
      title: '文章管理',
      Icon: ViewModuleIcon
    },
    children: [
      {
        path: 'create',
        Component: lazy(() => import('pages/Article/Create')),
        meta: {
          title: '添加文章'
        }
      },
      {
        path: 'list',
        Component: lazy(() => import('pages/Article/List')),
        meta: {
          title: '文章列表'
        }
      }
    ]
  }
]

export default result