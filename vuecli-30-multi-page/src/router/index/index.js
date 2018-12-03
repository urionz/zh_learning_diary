import indexComponent from '@/pages/index/App'

const indexRouter = {
    path: '/index',
    component: indexComponent,
    children: [
        {
            path: '/index/detail',
            name: 'detail',
            component: () => import('@/pages/index/detail/index')
        }
    ]
}

export default indexRouter
