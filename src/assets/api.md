### 接口

#### 1.首页[index]
```
参数：
	1.关注
	2.推荐
	3.热榜
	4.前端
	5.人工智能
	6.后端
	7.Android
	8.iOS
	9.开发工具
	10.代码人生
	11.阅读
======================

返回格式：
{"code":"CODE","msg":"MSG","data":{userLogo:用户头像,userName:用户名称,userLeave:用户等级,times:发布时间,title:文章标题,content:文章内容,countLike:点赞数,countComments:评论数}}
```

#### 2.首页-标签[indexTag]
```
参数：
	userId
======================

返回格式：
1.关注
2.推荐
3.热榜
4.前端
5.人工智能
6.后端
7.Android
8.iOS
9.开发工具
10.代码人生
11.阅读

{"code":"CODE","msg":"MSG","data":{selectTag:[1,2,3]}}
```

#### 2.首页-标签[indexTag]
```
参数：
	userId
======================

返回格式：
1.关注
2.推荐
3.热榜
4.前端
5.人工智能
6.后端
7.Android
8.iOS
9.开发工具
10.代码人生
11.阅读

{"code":"CODE","msg":"MSG","data":{selectTag:[1,2,3]}}
```