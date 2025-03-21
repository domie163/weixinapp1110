import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import shangpintuihuo from '@/views/modules/shangpintuihuo/list'
    import shangpinpingjia from '@/views/modules/shangpinpingjia/list'
    import nonghu from '@/views/modules/nonghu/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discussshangpinxinxi from '@/views/modules/discussshangpinxinxi/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import dingdanxinxi from '@/views/modules/dingdanxinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import config from '@/views/modules/config/list'
    import users from '@/views/modules/users/list'
    import dingdanpeisong from '@/views/modules/dingdanpeisong/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/shangpintuihuo',
        name: '商品退货',
        component: shangpintuihuo
      }
          ,{
	path: '/shangpinpingjia',
        name: '商品评价',
        component: shangpinpingjia
      }
          ,{
	path: '/nonghu',
        name: '农户',
        component: nonghu
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/discussshangpinxinxi',
        name: '商品信息评论',
        component: discussshangpinxinxi
      }
          ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
          ,{
	path: '/dingdanxinxi',
        name: '订单信息',
        component: dingdanxinxi
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/users',
        name: '管理员',
        component: users
      }
          ,{
	path: '/dingdanpeisong',
        name: '订单配送',
        component: dingdanpeisong
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
