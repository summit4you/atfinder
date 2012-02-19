爱发现数据接口需求
---------
版本：0.1  
作者：[何世友](mailto:ernest.he2009@gmail.com)
***
### 综述
*   [动态列表(全部，好友，附近)](#动态列表)
*   商家列表(距离排序)
*   推荐商品列表
*   优惠券列表
*   活动列表
*   动态详情
*   商品详情
*   优惠券详情
*   用户详情(商家)
*   评论列表
*   活动详情
*   用户注册
*   用户登陆
*   用户注销
*   商家推荐列表
*   关注商家设置
*   兴趣爱好设置
*   发布心情
*   发布图片
*   发布商品
*   发布优惠券
*   评论
*   喜欢
*   转发
*   留言
*   关注  
***
### 详情
#### <b id="动态列表">动态列表</b>
动态列表，分全部、好友、附近
 
 * 全部动态：
       * 请求参数：
         * page 默认为0
         * count 默认为10
       * 返回字段：  
	    * uid
	    * user_img
	    * user_name
	    * type（商家、普通）  
       --- 
	    * title
	    * hot
	    * imgs（列表）
	    * content
	    * time
	    * like_num
	    * comment_num
	    * share_num
 * 好友动态：
       * 请求参数：
         * page 默认为0
         * count 默认为10
         * uid
       * 返回字段：(同全部动态) 
 * 附近动态：
       * 请求参数：
         * page 默认为0
         * count 默认为10
         * lat（经纬度）
         * lng （经纬度）
       * 返回字段：(同全部动态) 
 

1. 用户帖子列表:
    a)好友帖子；
    b)以用户部分特征为依据的内容输出，如地理位置；
    c)用户无关的内容输出，按照时间排序。
    分类:
        全部（c），好友（a），附近（b）
    返回内容：
        
    全部:
        
    Friends:
        feeds sort by update time cascade with friends;
    Nearby:
        ... with location nearby
    defaults:
        10 records per requirement       
