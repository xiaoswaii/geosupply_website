//index.js
import Vue from 'vue'
import Router from 'vue-router'
import Aboutus from '@/components/Aboutus'
import Contactus from '@/components/Contactus'
import Index from '@/components/Index'
import Product from '@/components/Product'
//import xxx from  '@/components/xxx' 中的@表示src
// 因为webpack.base.conf中别名这样写了==> alias: {'@': resolve('src')}
import Project from '@/components/Project' //引入Project Componenet
Vue.use(Router) //这句别忘记了
export default new Router({
  mode:'history',  //使用history防止url中出现#
  routes: [
    {
      path: '/Project',
      name: 'Project',
      component: Project,
    }
    ,{
      path: '/AboutUs',
      name: 'Aboutus',
      component: Aboutus
    }
    ,{
      path: '/ContactUs',
      name: 'Contactus',
      component: Contactus
    },{
      path: '/',
      name: 'Index',
      component: Index
    },{
        path: '/Product',
        name: 'Product',
        component: Product,
    }

  ]
})