import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index'
import Boil from '@/page/boil'
import Book from '@/page/book'
import Search from '@/page/search'
import Me from '@/page/me'
import SearchInfo from '@/page/search-info'
import Tag from '@/page/tag'
import Article from '@/page/article-info'
import SetTab from '@/page/set-tab'
import Publish from '@/page/publish'
import Author from '@/page/author'
import SetBoil from '@/page/set-boil'
import BoilPublish from '@/page/boil-publish'
import Topic from '@/page/topic'
import ArticleList from '@/page/articleList'
import Look from '@/page/look'
import TopicList from '@/page/topicList'
import Activity from '@/page/activity'
import TopicFocus from '@/page/topic-focus'
import TopicIndex from '@/page/topic-index'
import ActivityInfo from '@/page/activity-info'
import MeIndex from '@/page/me-index'
import Edit from '@/page/edit'
import Message from '@/page/message'
import MeLike from '@/page/me-like'
import Collection from '@/page/collection'
import MeBook from '@/page/me-book'
import MeRead from '@/page/me-read'
import MeSetting from '@/page/me-setting'
import MeSetPsw from '@/page/me-setPsw'
import MeSettingPush from '@/page/me-setting-push'
import MeAbout from '@/page/me-about'
import Login from '@/page/login'
import Register from '@/page/register'
import ForgetPhone from '@/page/forget-phone'
import ForgetEmail from '@/page/forget-email'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/index',
			name: 'Index',
			component: Index
		},
		{
			path: '/boil',
			name: 'Boil',
			component: Boil
		},
		{
			path: '/book',
			name: 'Book',
			component: Book
		},
		{
			path: '/search',
			name: 'Search',
			component: Search
		},
		{
			path: '/me',
			name: 'Me',
			component: Me
		},
		{
			path: '/search-info', //搜索
			name: 'SearchInfo',
			component: SearchInfo
		},
		{
			path: '/tag', //标签
			name: 'Tag',
			component: Tag
		},
		{
			path: '/article-info', //文章详情
			name: 'Article',
			component: Article
		},
		{
			path: '/set-tab', //设置tab
			name: 'SetTab',
			component: SetTab
		},
		{
			path: '/publish', //发布
			name: 'Publish',
			component: Publish
		},
		{
			path: '/author',//作者榜
			name: 'Author',
			component: Author
		},
		{
			path: '/set-boil',//设置沸点
			name: 'SetBoil',
			component: SetBoil
		},
		{
			path: '/boil-publish', //发布沸点
			name: 'BoilPublish',
			component: BoilPublish
		},
		{
			path: '/topic', //话题
			name: 'Topic',
			component: Topic
		},
		{
			path: '/articleList', //文章榜
			name: 'ArticleList',
			component: ArticleList
		},
		{
			path: '/look', //文章榜
			name: 'Look',
			component: Look
		},
		{
			path: '/topicList', //话题广场
			name: 'TopicList',
			component: TopicList
		},
		{
			path: '/activity', //活动
			name: 'Activity',
			component: Activity
		},
		{
			path: '/activity-info', //活动详情
			name: 'ActivityInfo',
			component: ActivityInfo
		},
		{
			path: '/topic-focus', //关注话题
			name: 'TopicFocus',
			component: TopicFocus
		},
		{
			path: '/topic-index', //关注话题主页
			name: 'TopicIndex',
			component: TopicIndex
		},
		{
			path: '/me-index', //关注主页
			name: 'MeIndex',
			component: MeIndex
		},
		{
			path: '/edit', //编辑
			name: 'Edit',
			component: Edit
		},
		{
			path: '/message', //消息
			name: 'Message',
			component: Message
		},
		{
			path: '/me-like', //我赞过的
			name: 'MeLike',
			component: MeLike
		},
		{
			path: '/collection', //收藏集
			name: 'Collection',
			component: Collection
		},
		{
			path: '/me-book', //已购小册
			name: 'MeBook',
			component: MeBook
		},
		{
			path: '/me-read', //阅读过的文章
			name: 'MeRead',
			component: MeRead
		},
		{
			path: '/me-setting', //设置
			name: 'MeSetting',
			component: MeSetting
		},
		{
			path: '/me-setPsw', //设置密码
			name: 'MeSetPsw',
			component: MeSetPsw
		},
		{
			path: '/me-setting-push', //消息推送设置
			name: 'MeSettingPush',
			component: MeSettingPush
		},
		{
			path: '/me-about', //设置关于
			name: 'MeAbout',
			component: MeAbout
		},
		{
			path: '/login', //登录
			name: 'Login',
			component: Login
		},
		{
			path: '/register', //注册
			name: 'Register',
			component: Register
		},
		{
			path: '/forget-phone', //忘记密码
			name: 'ForgetPhone',
			component: ForgetPhone
		},
		{
			path: '/forget-email', //忘记密码
			name: 'ForgetEmail',
			component: ForgetEmail
		},
	]
})