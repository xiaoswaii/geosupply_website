//index.js
import Vue from 'vue'
import Router from 'vue-router'
import Aboutus from '@/components/Aboutus'
import Contactus from '@/components/Contactus'
import Index from '@/components/Index'
import Product from '@/components/Product'
import Software from '@/components/Software'
import Project from '@/components/Project' //引入Project Componenet
// import Aboutus_cn from '@/components/cn/Aboutus_cn'
// import Contactus_cn from '@/components/cn/Contactus_cn'
// import Index_cn from '@/components/cn/Index_cn'
// import Product_cn from '@/components/cn/Product_cn'
// import Software_cn from '@/components/cn/Software_cn'
// import Project_cn from '@/components/cn/Project_cn' //引入Project Componenet
//import xxx from  '@/components/xxx' 中的@表示src
// 因为webpack.base.conf中别名这样写了==> alias: {'@': resolve('src')}
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
    },{
      path: '/Software',
      name: 'Software',
      component: Software,
    },

  ]
})