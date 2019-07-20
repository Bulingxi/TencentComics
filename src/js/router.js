import VueRouter from 'vue-router'

import index from '../components/index/index.vue'
import search from '../components/index/search.vue'
import category from '../components/index/category.vue'
import rank from '../components/index/rank.vue'
import update from '../components/rank/update.vue'
import sale from '../components/rank/sale.vue'
import hot from '../components/rank/hot.vue'
import mouthlyTicket from '../components/rank/mouthlyTicket.vue'
import schedule from '../components/index/schedule.vue'
import Monday from '../components/schedule/Monday.vue'
import Tuesday from '../components/schedule/Tuesday.vue'
import Wednesday from '../components/schedule/Wednesday.vue'
import Thursday from '../components/schedule/Thursday.vue'
import Friday from '../components/schedule/Friday.vue'
import Saturday from '../components/schedule/Saturday.vue'
import Sunday from '../components/schedule/Sunday.vue'
import bookshelf from '../components/index/bookshelf.vue'
import collect from '../components/bookshelf/collect.vue'
import his from '../components/bookshelf/his.vue'
import comicInfo from '../components/index/comicInfo.vue'
import details from '../components/comicInfo/details.vue'
import catalog from '../components/comicInfo/catalog.vue'
import comment1 from '../components/comicInfo/comment.vue'
import deep from '../components/index/deep.vue'
import login from '../components/index/login.vue'
import downloadGuide from '../components/index/downloadGuide.vue'
import vip from '../components/deep/vip.vue'
import help from '../components/index/help.vue'
import cate from '../components/catagory/cate.vue'
import register1 from '../components/index/register.vue'
import wantsay from '../components/comicInfo/wantsay.vue'






export default new VueRouter({
	routes:[
		{
			path:'/',
			component:index,
			redirect:'/index'
		},
		{
			path:'/index',
			component:index
		},
		{
			path:'/search',
			component:search
		},
		{
			path:'/category',
			component:category
		},
		{
			path:'/rank',
			component:rank,
			children:[
				{
					path:'/update',
					component:update
				},
				{
					path:'/sale',
					component:sale
				},
				{
					path:'/hot',
					component:hot
				},
				{
					path:'/mouthlyTicket',
					component:mouthlyTicket
				}
			]
		},
		{
			path:'/schedule',
			component:schedule
		},
		{
			path:'/bookshelf',
			component:bookshelf,
			children:[
				{
					path:'/collect',
					component:collect
				},
				{
					path:'/his',
					component:his
				}
			]
		},
		{
			path:'/comicInfo',
			component:comicInfo
		},
		{
			path:'/deep',
			component:deep
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/downloadGuide',
			component:downloadGuide
		},
		{
			path:'/vip',
			component:vip
		},
		{
			path:'/help',
			component:help
		},
		{
			path:'/cate/:title',
			name:'kb',
			component:cate
		},
		{
			path:'/register',
			component:register1
		},
		{
			path:'/wantsay',
			component:wantsay
		}
		
	]
})