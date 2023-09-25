import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Index/Home',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/Index/Home',
          component: () => import('@/views/Dashbord/index.vue'),
          meta: {
            requireAuth: true,
            title: '工作台',
            icon: 'Monitor'
          }
        },
        {
          path: '/Index/Cutomer/Table',
          component: () => import('@/views/CutomerDemo/TableDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '列表示例',
            icon: 'Grid'
          }
        },
        {
          path: '/Index/Cutomer/TreeTable',
          component: () => import('@/views/CutomerDemo/TreeTableDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '树形表格',
            icon: 'DataLine'
          }
        },
        {
          path: '/Index/Cutomer/Form',
          component: () => import('@/views/CutomerDemo/FormDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '表单示例',
            icon: 'Crop'
          }
        },
        {
          path: '/Index/Cutomer/Info',
          component: () => import('@/views/CutomerDemo/InfoDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '详情示例',
            icon: 'InfoFilled'
          }
        },
        {
          path: '/Index/Cutomer/File',
          component: () => import('@/views/CutomerDemo/FileDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '文件上传',
            icon: 'FolderOpened'
          }
        },
        {
          path: '/Index/Cutomer/Chart',
          component: () => import('@/views/CutomerDemo/ChartDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '统计图表',
            icon: 'DataLine'
          }
        },
        {
          path: '/Index/Cutomer/MapChart',
          component: () => import('@/views/CutomerDemo/MapChartDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '地图图表',
            icon: 'Location'
          }
        },
        {
          path: '/Index/Cutomer/RichForm',
          component: () => import('@/views/CutomerDemo/RichFormDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '富文本示例',
            icon: 'Discount'
          }
        },
        {
          path: '/Index/Data/Entity',
          component: () => import('@/views/DataDemo/EntityDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '实体配置',
            icon: 'Reading'
          }
        },
        {
          path: '/Index/Data/Message',
          component: () => import('@/views/DataDemo/MessageDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '消息数据',
            icon: 'ChatLineSquare'
          }
        },
        {
          path: '/Index/Data/MessageRead',
          component: () => import('@/views/DataDemo/MessageReadDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '已读记录',
            icon: 'MessageRead'
          }
        },
        {
          path: '/Index/Data/Code',
          component: () => import('@/views/DataDemo/CodeDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '验证码数据',
            icon: 'Picture'
          }
        },
        {
          path: '/Index/System/user',
          component: () => import('@/views/SystemDemo/UserDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '用户管理',
            icon: 'UserFilled'
          }
        },
        {
          path: '/Index/System/Role',
          component: () => import('@/views/SystemDemo/RoleDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '角色管理',
            icon: 'Avatar'
          }
        },
        {
          path: '/Index/System/Permission',
          component: () => import('@/views/SystemDemo/PermissionDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '权限管理',
            icon: 'Lock'
          }
        },
        {
          path: '/Index/System/Menu',
          component: () => import('@/views/SystemDemo/MenuDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '菜单管理',
            icon: 'Menu'
          }
        },
        {
          path: '/Index/System/Dict',
          component: () => import('@/views/SystemDemo/DictDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '数据字典',
            icon: 'Notebook'
          }
        },
        {
          path: '/Index/System/Cache',
          component: () => import('@/views/SystemDemo/CacheDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '缓存管理',
            icon: 'Files'
          }
        },
        {
          path: '/Index/System/Log',
          component: () => import('@/views/SystemDemo/LogDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '日志管理',
            icon: 'Grid'
          }
        },
        {
          path: '/Index/System/Setting',
          component: () => import('@/views/SystemDemo/SettingDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '系统配置',
            icon: 'Setting'
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/resetpwd',
      component: () => import('@/views/Resetpwd/index.vue')
    }
  ]
})

export default router
