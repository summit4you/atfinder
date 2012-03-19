爱发现数据接口需求
=========
root url: http://203.88.192.235:83/  
版本：0.1  
作者：[何世友](mailto:ernest.he2009@gmail.com)
***
索引
--
*   [动态列表(全部，好友，附近)](#dtlb)
*   [动态详情](#dtxq)
*   [商品详情](#spxq)
*   [优惠券详情](#yhxq)
*   [活动详情](#hdxq)
*   [投票详情](#hdxq)
*   [标签列表](#bqlb)
*   [商家列表](#sjlb)
*   [推荐商品列表](#tjsplb)
*   [优惠券列表](#yhqlb)
*   [推荐商家列表](#tjsjlb)
*   [活动列表](#hdlb)
*   [用户详情](#yhxq)

*   [留言列表](#lylb)
*   [用户注册](#yhzc)
*   [用户登陆](#yhdl)
*   [用户注销](#yhzx)
*   [关注商家设置](#gzsjsz)
*   [兴趣爱好设置](#xqahsz)
*   [发布心情](#fbxq)
*   [发布图片](#fbtp)
*   [发布商品](#fbsp)
*   [发布优惠券](#fbyhq)
*   [评论](#pl)
*   [喜欢](#xh)
*   [转发](#zf)
*   [关注](#gz)
*   [搜索](#ss)

+ wap addition
 - [首页推荐](#sytj)
 - [商圈](#sq)

详情
--
<h2 id="dtlb">动态列表</h2>
动态列表，分全部、好友、附近
 
### 全部动态

####请求参数
/feed?page=1&count=10 

* page 默认为1
* count 默认为10

#### 返回字段  
* code (0 for success, 1 for error, msg for error message)
* avatar_err_path (use this url as avatar if error while loading avatar)
* feeds
    * uid
    * avatar
    * username
    * type（商家、普通）  
    * feed_id
    * title
    * hot
    * imgs（列表）
    * content
    * time
    * like_num
    * comment_num
    * share_num

#### 返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "feeds": [{"idtype": "eventid", "image_2_link": "", "uid": 540, "image_3_link": "", "feedid": 1747, "tag": "a:3:{i:63;s:6:\"\u670d\u88c5\";i:194;s:6:\"\u5305\u5305\";i:66;s:6:\"\u5176\u5b83\";}", "fuid": 195, "message": "\u3002", "id": 142, "subject": "\u6728\u67", "image_1": "attachment/201203/16/195_1331882871nlun.jpg", "image_3": "", "image_2": "", "image_4": "", "title": "\u53d1\u5e03\u4e86", "dateline": 1332170021, "cityid": 0, "hot": 10, "fid": 25, "lng": "0E-10", "friend": 0, "username": "13544504859", "starttime": 0, "price": "0.00", "oprice": "0.00", "obprice": "0.00", "replynum": 0, "lat": "0E-10", "loveuser": "", "endtime": 0, "icon": "", "reblognum": 0, "image_4_link": "", "fusername": "13802437851", "avatar": "http://atfaxian.com/center/data/avatar/000/00/05/40_avatar_big.jpg", "target_ids": "", "appid": 1, "deadline": 0, "bprice": "0.00", "isend": 1, "image_1_link": ""},], "code": 0}
### 好友动态
#### 请求参数
/feed?uid=34&page=1&count=10 

* page 默认为1
* count 默认为10
* uid

#### 返回字段
(同全部动态) 
### 附近动态
#### 请求参数
/feed?lat=101.999&lng=-122.43&page=1&count=10

* page 默认为1
* count 默认为10
* lat（纬度）
* lng （经度）

#### 返回字段
(同全部动态) 
 
<h2 id="sjlb">商家列表</h2>
按照地理距离进行排序，获取用户GPS信息，用户选择距离范围，大分类、小分类
### 请求参数
* lat
* lng
* distance_type (0,0.1,0.3,0.5,0.8,1,2,3: 全部，0.1~3km)
* category (0,1,2,3,4,5,6,7: 其他，服装，美食，摄影，精品，休闲娱乐，电子电器，日用百货，美容美体)
* type (0,1,2,3,4,5,6... : 全部，饮品，甜品，小吃，火锅，东南亚餐，意大利餐，日式料理等（以美食为例）)
* uid
* page
* count

### 返回字段
* shop_id
* name
* img
* like_num
* hot
* description
* location
* comment_num
* follower_num
* distance

<h2 id="tjsplb">推荐商品列表</h2>
按照地理距离进行排序，获取用户GPS信息，用户选择距离范围，大分类、小分类
### 请求参数
同“商家列表”
### 返回字段
* goods_id
* name
* img
* like_num
* hot
* price
* score
* comment_num
* share_num
* distance

<h2 id="yhqlb">优惠券列表</h2>
按照地理距离进行排序，获取用户GPS信息，用户选择距离范围，大分类、小分类
### 请求参数
同“商家列表”
### 返回字段
* coupon_id
* name
* img
* like_num
* cutoff 
* validity
* origin_price
* price
* comment_num
* share_num
* distance

<h2 id="hdlb">活动列表</h2>
按照地理距离进行排序，获取用户GPS信息
### 请求参数
* uid
* lat
* lng

### 返回字段
* activity_id
* title
* img
* hoster
* time
* location
* like_num
* participate_num

<h2 id="dtxq">动态详情</h2>
动态详细信息
### 请求参数
* uid
* feed_id

### 返回字段
* uid
* user_name
* user_img
* feed_id
* time
* title
* imgs
* content
* hot
* score
* like_list[{uid,uimg}...]
* share_list[{uid,uimg}...]
* comment_list[{uid,uimg,uname,cid,ccontent}...] 

<h2 id="spxq">商品详情</h2>
商品详细信息
### 请求参数
* uid
* goods_id

### 返回字段
* uid
* user_name
* user_img
* goods_id
* time
* title
* imgs
* hot
* distance
* price
* content
* score
* like_list[{uid,uimg}...]
* share_list[{uid,uimg}...]
* comment_list[{uid,uimg,uname,cid,ccontent}...] 

<h2 id="yhqxq">优惠券详情</h2>
优惠券详细信息
### 请求参数
* uid
* coupon_id

### 返回字段
* uid
* user_name
* user_img
* coupon_id
* time
* title
* imgs
* hot
* description (validity + distance + origin-price + price)
* cutoff
* content
* score
* like_list[{uid,uimg}...]
* share_list[{uid,uimg}...]
* comment_list[{uid,uimg,uname,cid,ccontent}...] 

<h2 id="yhxq">用户详情</h2>
用户详细信息
### 请求参数
* uid  (若uid==user_id，则视为查看自身详情)
* user_id

### 返回字段
* user_id
* type (商家、普通用户)
* user_img
* user_name
* user_level
* user_score
* user_hot
* user_status (心情) [内容 + 标签]
* lat
* lng
* phone
* follow_num
* follower_num
* like_num
* message_num
* share_num
* pic_num
* vote_num
* find_num (发现)
* goods_num
* coupon_num
* activity_num

<h2 id="lylb">留言列表</h2>
用户留言板
### 请求参数
* uid  (若uid==touid，则视为查看自身详情)
* touid (对象id，默认为空，如果不传，则视为查看自身信息) 
* classid [0 = comment, 1 = private message, 2 = leave a note]

### 返回字段
* uid
* uimg
* uname
* cid
* ccontent
* ctime

<h2 id="yhzc">用户注册</h2>
用户操作
### 请求参数
* phone
* pwd
* valid_code

### 返回字段
* uid
* status (成功与否)

<h2 id="yhdl">用户登录</h2>
用户操作
### 请求参数
* phone
* pwd
* openapi (新浪微博登陆)

### 返回字段
* uid
* status (成功与否)

<h2 id="yhzx">用户注销</h2>
用户操作
### 请求参数
* uid
* openapi (新浪微博登陆)
### 返回字段
* uid
* status (成功与否)

<h2 id="sjtjsz">关注商家设置</h2>
设置操作
### 请求参数
* shop_ids [id,id,id...]
* uid

### 返回字段
* uid
* status (成功与否)

<h2 id="bqlb">标签列表</h2>
设置操作
### 请求参数
* uid

### 返回字段
* tag_id
* tag_name 

<h2 id="xqahsz">兴趣爱好设置</h2>
设置操作
### 请求参数
* uid
* tag_ids [id,id...]

### 返回字段
* uid
* status

<h2 id="fbxq">发布心情</h2>
发布操作
### 请求参数
* uid
* title
* content
* lat
* lng
* imgs[]
* tag_ids [id,id...]

### 返回字段
* uid
* feed_id
* status

<h2 id="fbsp">发布商品</h2>
发布操作
### 请求参数
* uid
* title
* price
* content
* imgs[]
* tag_ids [id,id...]

### 返回字段
* uid
* goods_id
* status

<h2 id="fbyhq">发布优惠券</h2>
发布操作
### 请求参数
* uid
* title
* price
* origin_price
* validity
* content
* imgs[]
* tag_ids [id,id...]

### 返回字段
* uid
* coupon_id
* status

<h2 id="pl">评论</h2>
社交操作
### 请求参数
* uid
* toid (user?goods?coupon?..)
* type
* content

### 返回字段
* uid
* status

<h2 id="xh">喜欢</h2>
社交操作
### 请求参数
* uid
* toid (user?goods?coupon?..)
* type

### 返回字段
* uid
* status

<h2 id="zf">转发</h2>
社交操作
### 请求参数
* uid
* toid (feed?goods?coupon?..)
* type

### 返回字段
* uid
* status

<h2 id="gz">关注</h2>
社交操作
### 请求参数
* uid
* toid (feed?goods?coupon?..)
* type

### 返回字段
* uid
* status

<h2 id="ss">搜索</h2>
操作
### 请求参数
* key_words
(余下同列表请求参数)
    
### 返回字段
(同列表返回字段)
