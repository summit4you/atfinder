爱发现移动数据接口文档
=========
root url: http://api.atfaxian.com:84/ 

版本：0.1  
作者：[何世友](mailto:ernest.he2009@gmail.com), [丘文峰](mailto:809104518@qq.com)
***
索引
--
* 下行接口
    *   [动态列表(全部，好友，附近)](#dtlb)
    *   [标签列表](#bqlb)
    *   [商家列表](#sjlb)
    *   [推荐商品列表](#tjsplb)
    *   [优惠券列表](#yhqlb)
    *   [推荐商家列表](#tjsjlb)
    *   [推荐标签](#tjbq)
    *   [活动列表](#hdlb)
    *   [分享／照片／投票／爆料/商品/优惠券/活动详情] (#xq)
    *   [用户详情](#yhxq)
    *   [私信列表](#sxlb)
    *   [评论列表](#pllb)
    *   (not this time)[留言列表](#lylb)
    *   [通知系统](#tzxt)
    *   [我的收藏列表](#wdsclb)
    *   [我的心情、爆料、分享、照片、投票、商品、优惠券、活动等](#wdfeed)
    *   [我参与的活动／优惠券列表](#wcy)
    *   [我的关注列表](#wdgzlb)
    *   [我的粉丝列表](#wdfslb)
    *   [城市列表](#cslb)
    *   [搜索](#ss)
+ wap专用接口
    - [推荐列表](#tjlb)
    - [推荐用户](#tjyh)
    - [商圈列表](#sqlb)
    - [商圈页面](#sqym)
* 上行接口
    *   [用户注册](#yhzc)
	*   [获取验证码](#yzm)
    *   [用户登陆](#yhdl)
    *   [用户注销](#yhzx)
    *   [关注商家设置](#gzsjsz)
    *   [兴趣爱好设置](#xqahsz)
	*	[上传头像](#sctx)
    *   [发布心情](#fbxq)
	*   [删除心情](#cqxq)
    *   [发布图片（上传图片）](#fbtp1)
	*   [发布图片（提交）](#fbtp2)
	*   [发布图片（编辑）](#fbtp3)
	*   [发布图片（删除）](#fbtp4)
	*   [发布分享（上传图片）](#fbfx1)
	*   [发布分享（提交）](#fbfx2)
	*   [发布分享（编辑）](#fbfx3)
	*   [发布分享（删除）](#fbfx4)
	*   [发布爆料（上传图片）](#fbbl1)
	*   [发布爆料（提交）](#fbbl2)
	*   [发布爆料（编辑）](#fbbl3)
	*   [发布爆料（删除）](#fbbl4)
	*   [发布投票](#fbtp)
    *   [发布商品（上传图片）](#fbsp1)
	*   [发布商品（提交）](#fbsp2)
	*   [发布商品（编辑）](#fbsp3)
	*   [发布商品（删除）](#fbsp4)
    *   [发布优惠券（上传图片）](#fbyhq1)
	*   [发布优惠券（提交）](#fbyhq2)
	*   [发布优惠券（编辑）](#fbyhq3)
	*   [发布优惠券（删除）](#fbyhq4)
	*   [发布活动（上传图片）](#fbhd1)
	*   [发布活动（提交）](#fbhd2)
	*   [发布活动（编辑）](#fbhd3)
	*   [发布活动（删除）](#fbhd4)
	*   [转发（分享）](#zf1)
	*   [转发（优惠券）](#zf2)
	*	[转发（爆料）](#zf3)
	*	[转发（活动）](#zf4)
	*	[转发（商品）](#zf5)
	*	[转发（投票）](#zf6)
	*	[转发（图片）](#zf7)
	*	[活动参与](#hdcy)
	*	[活动推荐](#hdcj)
	*   [下载优惠券](#xzyhq)
    *   [评论](#pl)
    *   [喜欢](#xh)
    *   [转发](#zf)
    *   [关注](#gz)
    *   [搜索](#ss)
	*   [标签设置] (#bqsz)
	*	[评分（分享、活动、商品、优惠券、投票、爆料、图片）] (#pf)
	*	[发短消息](#fdxx)
	*   [登陆](#dl)
	*   [修改昵称](#xgnc)
	*   [邀请](#yq)
	*	[投票](#tp)
	*   [删除投票](#cqtp)
	*	[找回密码（获取验证码）](#zhmm1)

详情
--
<h2 id="dtlb">动态列表</h2>
动态列表，分全部、好友、附近
 
### 全部动态

####请求参数
/feed?page=1&count=10&uid=13&classid=0      
+请注意，uid必传+

* uid
* classid=0
* page 默认为1
* count 默认为10

#### 返回字段  
* code (0 for success, 1 for error, msg for error message)
* avatar_err_path (  用户头像请求出错时请使用此头像)
* feeds
    * idtype (eventid, blogid, goodsid, couponsid, pid, discloseid, photoid) 
    * image_[1,2,3,4]_link ( 每个动态最多四张图片, 这是四张图片对应链接，即点击后跳转链接，客户端可忽略。)
    * image_[1,2,3,4]..( 每个动态最多四张图片，四张图片的地址在此)
    * feedid
    * id (原文章id，查询此动态详情，请使用id + idtype)
    * uid (user who post this id)
    * groupid (3 标识加V)
    * username (用户登录名)
    * name (用户名，当用户名为空时，使用username，并将其中间四位号码改为*号)
    * fid (转载自原文章id)
    * fuid (转载自作者uid)
    * fusername (转载自作者用户名)
    * fname (转载自作者昵称)
    * subject (标题)
    * message ( 内容)
    * title (忽略此字段)
    * dateline ( 发表时间)
    * hot ( 温度)
    * lng
    * lat
    * hot (热度)
    * replynum （回复次数）
    * reblognum (转载次数)
    * love (喜欢、收藏次数, 红心数量)
    * isloved (true of false 标识是否已喜欢、收藏/ 加红心)
    * avatar ( 用户头像)
    * color (4: #ff5580, 3: #ff88a3, 2: #ffb3c6, 1: #cccccc)
    * photonum (当idtype=photoid时,为图片数量)


#### 返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "feeds": [{"idtype": "blogid", "image_2_link": "", "love": 0, "uid": 13, "image_3_link": "", "feedid": 3942, "tag": "a:2:{i:64;s:6:\"\u5a31\u4e50\";i:65;s:6:\"\u767e\u8d27\";}", "fuid": 376, "message": "\u7b2c", "isloved": false, "id": 588, "subject": "\u7b2c", "image_1": "http://atfaxian.com/attachment/201204/1/376_1333247843cF0K.jpg", "image_3": "", "image_2": "", "checked": 0, "image_4": "", "title": "\u53d1\u8868\u4e86", "dateline": 1333892242, "cityid": 3, "hot": 2, "click_1": 0, "location": "", "fid": 495, "groupid": 3, "friend": 0, "username": "15013296747", "starttime": 0, "price": "0.00", "oprice": "0.00", "obprice": "0.00", "replynum": 0, "target_ids": "", "lat": "23.1289940000", "loveuser": "1", "endtime": 0, "icon": "", "reblognum": 0, "name": "\u554a\u5b9d", "image_4_link": "", "fusername": "13682239450", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/13_avatar_big.jpg", "lng": "113.2868950000", "appid": 1, "deadline": 0, "bprice": "0.00", "isend": 1, "image_1_link": ""},], "code": 0}

### 好友动态
#### 请求参数
/feed?uid=34&page=1&count=10&classid=1 

* page 默认为1
* count 默认为10
* classid=1
* uid

#### 返回字段
(同全部动态) 
### 附近动态
#### 请求参数
/feed?lat=101.999&lng=-122.43&page=1&count=10&uid=13&classid=2

* uid
* classid=2
* page 默认为1
* count 默认为10
* lat（纬度）
* lng （经度）

#### 返回字段
(同全部动态) 
 
<h2 id="bqlb">标签列表</h2>
在逛街之前，请先获取标签列表，为了以后的请求提供标签参数，目前提供两种方式的请求，一种是提供一级标签的id，返回此标签下面的子标签列表；另一种是lazy方式，直接返回全部标签，其中组织方式为：{bq1:[bq2,bq3],bq4:[]}
其中，一级标签为固定的：

* 摄影 6
* 美食 16
* 精品 21
* 百货 65
* 美容 25
* 电子 34
* 服装 63
* 娱乐 64
* 其他 66

### 请求参数
* /tags
* /tags?p_tagid=6
    - p_tagid (一级标签id)

### 返回字段
* code
* tags
    - 所有标签时：一级标签 + 二级标签列表，列表内字段参见下面；
    - 子标签时：
        + blognum (此标签下面的文章数)
        + tagid
        + tagname
        + uid (贡献此标签用户id)
        + usernum (订阅此标签人数)

#### json example
* /tags?p_tagid=6   
{"code": 0, "tags": [{"blognum": 2, "uid": 32, "tagid": 107, "usernum": 0, "tagname": "\u6444\u5f71\u914d\u4ef6", "toporder": 0, "close": 0, "dateline": 1331608089, "p_tagid": 6}, ]
* /tags   
{"code": 0, "tags": {"64": [{"blognum": 32, "uid": 1, "tagid": 99, "usernum": 5, "tagname": "\u7535\u5f71", "toporder": 0, "close": 0, "dateline": 1331390221, "p_tagid": 64},],},}

<h2 id="sjlb">商家列表</h2>
按照地理距离进行排序，获取用户GPS信息，用户选择距离范围，大分类、小分类

### 请求参数
/businesslist?distance=100&lat=23&lng=113&page=1&count=10&cityid=3

* lat
* lng
* distance (0,0.1,0.3,0.5,0.8,1,2,3: 全部，0.1~3km), 若无法获取位置服务，则直接传distance为0即可；此时distance字段不会传回客户端，请客户端做处理
* tagid (0：全部；一级分类底下的二级分类，有二级则直接传二级)
* uid (必传)
* page
* count
* cityid

### 返回字段
* avatar_err_path
* code
* business
    - avatar ( 用户头像)
    - uid
    - username,name,namestatus ( username for login, name for nickname, namestatus: 0 for no nickname, 1 for have;)
    - lng, lat
    - distance ( 距离，单位: m)
    - address
    - business ( 商家名，当前请使用name做商家名)
    - businessfield (description for business)
    - viewnum
    - hot ( 温度)
    -  商家不存在红心数，请移除之前设计
    - feedfriendnum (粉丝数量)
    - 暂时没有评价字段
    - 暂时没有转发字段

####返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "business": [{"username": "15013296747", "distance": 32705.061187827701, "referrals": 0, "uid": 13, "business": "", "friendnum": 1, "businessfield": "", "viewnum": 215, "groupid": 3, "feedfriendnum": 13, "hot": 228, "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/13_avatar_big.jpg", "address": "", "lat": "23.1289940000", "lng": "113.2868950000", "namestatus": 1, "name": "\u554a\u5b9d"}]}

<h2 id="tjsplb">推荐商品列表</h2>
按照地理距离进行排序，获取用户GPS信息，用户选择距离范围，大分类、小分类

### 请求参数
/goodslist?distance=1&lat=23&lng=113&tagid=0&page=1&count=10&uid=13&cityid=3

* uid （务必传uid）
* lat
* lng
* distance (0,0.1,0.3,0.5,0.8,1,2,3: 全部，0.1~3km), 若无法获取位置服务，则直接传distance为0即可；此时distance字段不会传回客户端，请客户端做处理
* tagid (0：全部；一级分类底下的二级分类，有二级则直接传二级)
* uid
* page
* count
* cityid

### 返回字段
* code
* avatar_err_path
* goods:
    - idtype
    - p_tagid, tagid (parent tag id, tag id)
    - tag (will be parsed later)
    - tagname
    - image_[1,2,3,4]_link
    - image_[1,2,3,4]
    - feedid
    - id
    - love （喜欢、收藏次数, 红心数量）
    - loveruser
    - isloved （是否已经喜欢、收藏）
    - hot ( 温度)
    - reblognum ( 转发数量)
    - replynum ( 评价数量)
    - fuid
    - fusername
    - uid
    - avatar ( 用户头像, 商品头像请使用image)
    - groupid (3 for vip)
    - username
    - subject ( 商品名称)
    - message
    - price （价格）
    - click_1 ( 评分)
    - lat, lng
    - distance ( 距离, 单位：米)
    - dateline

#### 返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "goods": [{"idtype": "goodsid", "image_2_link": "", "p_tagid": 0, "image_3_link": "", "feedid": 2605, "tag": "a:2:{i:301;s:6:\"\u76d8\u5939\";i:302;s:9:\"\u51b0\u7bb1\u8d34\";}", "fuid": 831, "loveuser": "1", "message": "\u5355\u4ef7\uff1a22\u5143<br>", "id": 305, "uid": 1, "image_1": "attachment/201203/10/19_1331359149QL94.jpg", "image_3": "", "image_2": "", "target_ids": "", "image_4": "", "title": "\u53d1\u5e03\u4e86", "dateline": 1332674478, "isend": 1, "cityid": 3, "hot": 7, "fid": 30, "subject": "\u5fae\u6ce2\u7089\u4e13\u7528\u76d8\u5939\\\u53a8\u623f\u7b80\u4fbf\u9694\u70ed\u624b\u5957 &amp;\u51b0\u7bb1\u8d34 3\u53ea", "friend": 0, "username": "aifaxian", "starttime": 0, "distance": 32705.061187827701, "price": "22.00", "oprice": "0.00", "obprice": "0.00", "replynum": 2, "lat": "23.1289940000", "lng": "113.2868950000", "endtime": 0, "icon": "", "reblognum": 0, "image_4_link": "", "fusername": "13560937654", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/01_avatar_big.jpg", "tagname": "\u76d8\u5939", "appid": 1, "deadline": 0, "bprice": "0.00", "tagid": 301, "image_1_link": ""}]}

<h2 id="yhqlb">优惠券列表</h2>
按照地理距离进行排序，获取用户GPS信息，用户选择距离范围，大分类、小分类
### 请求参数
/couponlist?distance=1&lat=23&lng=113&tagid=0&page=1&count=10&uid=1&cityid=3     
同商品列表
### 返回字段
同商品列表,多出字段：   

* oprice (原价)
* bprice （现价）
* obprice （折扣）
* starttime (开始时间)
* endtime （结束时间）


#### 返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "coupons": [{"idtype": "couponsid", "image_2_link": "", "love": 0, "uid": 731, "image_3_link": "", "feedid": 3940, "tag": "a:2:{i:399;s:6:\"\u996e\u98df\";i:16;s:6:\"\u7f8e\u98df\";}", "fuid": 0, "loveuser": "1", "message":\u79cd", "isloved": false, "id": 111, "p_tagid": 0, "image_1": "attachment/201204/6/731_1333703816ZYAW.jpg", "image_3": "", "image_2": "", "checked": 0, "image_4": "", "title": "\u53d1\u5e03\u4e86", "dateline": 1333705663, "isend": 1, "cityid": 3, "hot": 1, "click_1": 0, "location": "", "fid": 111, "subject": "\u91d1\u8bb0\u996e\u98df\u5e97 9\u6298\uff08\u6d77\u9c9c\u9664\u5916\uff09", "groupid": 3, "friend": 0, "username": "13829123658", "starttime": 0, "price": "0.00", "oprice": "0.00", "obprice": "9.00", "replynum": 0, "target_ids": "", "lat": "23.1289940000", "lng": "113.2868950000", "endtime": 0, "icon": "", "reblognum": 0, "name": "\u4fe1\u606f\u7ba1\u7406\u5458", "image_4_link": "", "fusername": "", "avatar": "http://atfaxian.com/center/data/avatar/000/00/07/31_avatar_big.jpg", "tagname": "\u7f8e\u98df", "appid": 1, "deadline": 0, "bprice": "0.00", "tagid": 16, "image_1_link": ""}]}

<h2 id="tjsjlb">推荐商家列表</h2>
###  请求参数
/recbusinesslist?lat=23&lng=113&uid=10

* uid
* lat
* lng

###  返回字段
参见商家列表   
####返回json范例


<h2 id="tjbq">推荐标签</h2>
###  请求参数
/rectags

###  返回字段
* tagid
* tagname

####返回json范例
{"code": 0, "recommandation": [{"tagid": 16, "tagname": "\u7f8e\u98df"},]}

<h2 id="hdlb">活动列表</h2>
### 请求参数
/eventlist?page=1&count=10

* uid
* page
* count

### 返回字段
* code
* event:
    - eventid
    - name ( 发起人)
    - title (标题)
    - cover （封面）
    - location (地点)
    - starttime, endtime （开始结束时间）
    - membernum （参与人数）
    - love （收藏人数）
    - isloved （是否已收藏）
    - ismember ( 是否已参加)
    - isrec (是否已推荐)

#### 返回json范例
{"code": 0, "event": [{"eventid": 34, "endtime": 1334671200, "love": 1, "title": "\u97e9\u56fd5D\u52a8\u611f\u4f53\u9a8c\u9986   6\u6298\u4f18\u60e0", "cover": "attachment/201203/16/209_13318884491gt5.jpg", "location": "\u5e7f\u5dde\u5730\u738b\u5e7f\u573a", "starttime": 1331949600, "membernum": 1, "loveuser": "247", "isloved": false}]}

<h2 id="xq">分享／照片／投票／爆料/商品/优惠券/活动详情</h2>
动态详细信息
### 请求参数
/details?uid=3&id=30&idtype=blogid

* uid
* id (original content id)
* idtype (eventid, blogid, goodsid, couponsid, pid, discloseid, photoid) 

    TODO: friend 0 for public, 1 for friend visible, 2 for private

### 返回字段
* code
* avatar_err_path
* idtype ( 方便客户端进行后续接口请求，如评论列表，需要同时传id／idtype)
* details
    - avatar
    - uid
    - groupid (groupid为3的标识vip)
    - username
    - name
    - fuid (转载自uid)
    - fusername (转载自username)
    - fname (转载自用户昵称)
    - love (收藏数量)
    - isloved (true or false 标识是否已喜欢（收藏）)
    - click_1 (评分字段)
    - isclicked (是否已评分)
    - reblognum (转载次数)
    - replynum (回复条数)
    - id
    - fid (原始id)
    - classid
    - subject
    - message
    - hot
    - hotuser
    - color
    - imgs
        + 'http://atfaxian.com/attachment/xxxx.jpg.middle.jpg'
    - dateline
    - IF pid: option
        + id
        + votenum
        + option
    - isvoted (是否已投票)
* lovers
    - uid
    - avatar
* shares
    - uid
    - avatar
* comments
    - uid
    - name 
    - avatar 
    - message
    - dateline
* IF eventid OR couponsid: **members**
    - uid
    - username
    - avatar
    - ...
    - 其中，验证码由uid+dateline拼接而成

### 返回json范例
{"idtype": "blogid", "avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "details": {"classid": 0, "love": 0, "uid": 14, "hotuser": "", "magiccall": 0, "pic": "", "related": "", "viewnum": 2, "tag": "", "fuid": 0, "message": "", "isloved": false, "lng": "0E-10", "subject": "\u534e\u590f\u5927\u9152\u5e97\u6843\u6e90\u5385", "topicid": 0, "dateline": 1330576043, "relatedtime": 0, "cityid": 0, "click_3": 0, "hot": 0, "click_1": 0, "click_4": 0, "click_5": 0, "click_2": 0, "groupid": 6, "friend": 0, "username": "13826025981", "fid": 30, "picflag": 0, "reblognum": 0, "replynum": 0, "lat": "0E-10", "loveuser": "", "password": "", "magiccolor": 0, "magicpaper": 0, "noreply": 0, "name": "", "fusername": "", "postip": "59.42.108.14", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/14_avatar_big.jpg", "target_ids": "", "blogid": 30},"lovers": [{"uid": 250, "avatar": "http://atfaxian.com/center/data/avatar/000/00/02/50_avatar_big.jpg"}],"shares": [{"uid": 195, "avatar": "http://atfaxian.com/center/data/avatar/000/00/01/95_avatar_big.jpg"},],"comments": [{"name": "13826044425", "dateline": 1332085426, "message": "\u633a\u597d\u770b\u7684\u554a", "avatar": "http://atfaxian.com/center/data/avatar/000/00/03/91_avatar_big.jpg", "uid": 391},]}   
**IF pid:**      
"option": [{"votenum": 0, "id": 10, "option": "\u4e0a\u4e5d\u8def"},]
**IF eventid OR couponsid:**
"members": [{"eventid": 258, "username": "13751894491", "uid": 10, "exchange": 1, "dateline": 1334735708, "fellow": 0, "status": 2, "avatar": "http://center.atfaxian.com/data/avatar/000/00/00/10_avatar_big.jpg", "template": "\u987b\u586b\u5199\u62a5\u540d\u8005\u59d3\u540d\u3001\u624b\u673a\u53f7\u7801\r\nindy 13751894491"},] 

<h2 id="yhxq">用户详情</h2>
用户详细信息
### 请求参数
/userdetails/10?uid=1

* /数字  (为要查看用户id)
* uid (若uid==数字，则视为查看自身详情)

### 返回字段
* avatar_err_path
* code
* details
    - avatar ( 用户头像)
    - uid
    - username,name,namestatus ( username for  登录名, name for  用户名, namestatus: 0 for no nickname, 1 for have;)
    - groupid ( 3 for 加V)
    - hot ( 温度)
    - lng, lat
    - distance (unit: m)
    - address
    - business ( name of shop)
    - businessfield (description for business)
    - domain ( domain for user space)
    - social_part:
        + friendnum ( 关注数)
        + viewnum ( 空间访问数)
        + notenum ( 通知数量)
        + eventinvitenum ( 活动邀请数量)
        + mtaginvitenum ( group invited num)
        + myinvitenum ( invite num)
        + pokenum ( number of say hi)
        + doingnum ( 个人心情数量)
        + blognum ( 个人分享数量)
        + photonum ( 个人图片数量)
        + goodsnum ( 商家商品数量)
        + couponsnum ( 商家商品数量)
        + threadnum ( number of thread)
        + pullnum ( 个人投票数量)
        + disclosenum ( 个人爆料数量)
        + eventnum ( 商家活动数量)
        + sharenum ( 请忽略)
        + *following* (只有提供了uid，且uid非用户id时，会出现，表示是否已关注)
        + *befollowed* (只有提供了uid，且uid非用户id时，会出现，表示是否被关注)

    - newpm (0 for no new private message; 1 for have) 
    - newemail (new email)
    - email
    - mobile ( phone number)
    - qq
    - msn
    - note, spacenote ( 最新个人心情)
    - tag ( 标签字典，格式：{'tagid':'tagname'}，点击此标签，将显示此标签底下的动态列表，传tagid即可。)
    - referrals ( 请忽略)
    - credit ( 积分)
    - experience (经验值)
    - lovenum (红心数，表示该用户收藏帖子数量)
    - feedfriendnum ( 粉丝数量)
    - level (等级)
    - toeventnum (参与活动数量)
    - tocouponsnum (参与优惠券数量)

####  返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "details": {"addfriend": 0, "mobile_p": 0, "businessfield": "", "myinvitenum": 0, "eventnum": 9, "goodsnum": 23, "dateline": 1326676802, "theme": "", "msnrobot": "", "residecity": "\u5e7f\u5dde", "addsize": 0, "regip": "127.0.0.1", "lastlogin": 1333957329, "spacenote": "\u4e0d\u5e72\u4e86", "qq": "", "resideprovince": "", "name": "\u7231\u53d1\u73b0", "level": 5, "marry": 0, "groupid": 1, "birthmonth": 3, "newpm": 0, "mtaginvitenum": 0, "msncstatus": 0, "domain": "", "albumnum": 1, "idcard": "", "sex": 0, "lovenum": 38, "lng": "113.2868950000", "attachsize": 59484512, "disclosenum": 3, "mood": 0, "feedfriendnum": 839, "tagid": 0, "authstr": "", "lastpost": 1333690328, "email": "", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/01_avatar_big.jpg", "business": "", "sendmail": "", "address": "", "updatetime": 1333690328, "couponsnum": 8, "experience": 2241, "doingnum": 6, "credit": 2043, "nocss": 0, "threadnum": 1, "menunum": 0, "note": "\u4e0d\u5e72\u4e86", "pokenum": 0, "videopic": "", "lastsend": 0, "newemail": "", "photonum": 28, "privacy":", "eventinvitenum": 0, "pollnum": 18, "msn": "", "magicstar": 0, "friend":44", "username": "aifaxian", "blognum": 24, "videostatus": 0, "lastsearch": 0, "flag": 1, "referrals": 0, "addfriendnum": 0, "uid": 1, "ip": 113111058, "residemall": "\u5730\u738b\u5e7f\u573a", "birthyear": 2012, "viewnum": 1049, "tag": {"64": "\u5a31\u4e50", "65": "\u767e\u8d27", "34": "\u7535\u5b50", "6": "\u6444\u5f71", "66": "\u5176\u5b83", "16": "\u7f8e\u98df", "21": "\u7cbe\u54c1", "25": "\u7f8e\u5bb9", "63": "\u670d\u88c5"}, "birthprovince": "\u5e7f\u4e1c", "sharenum": 0, "magicexpire": 0, "cityid": 0, "hot": 1888, "birthcity": "\u5e7f\u5dde", "timeoffset": "", "css": "", "notenum": 0, "friendnum": 500, "birthday": 19, "blood": "", "feedfriend":",15", "lat": "23.1289940000", "mobile": "", "emailcheck": 0, "namestatus": 1}}

<h2 id="sxlb">私信列表</h2>
用户查看自身私信通信列表, 包含inbox/outbox，具体怎么排列要看客户端怎么处理，这个再讨论，目前我分为两个列表按照时间先后顺序排列，以供使用；每次请求数量还未定，现在全部返回有点凶残哦。
### 请求参数
/pmlist?uid=1   

* uid  

###  返回字段
* avatar_err_path
* code
* inbox; outbox
    + dateline
    + new (1: unread; 0: read;)
    + msgfromid, msgfrom (userid and username that send the message)
    + msgtoid (userid that get the message)
    + folder (maybe ignore now)
    + subject, message ( you know, I guess)
    + user part: (we make it like conversation, so I will offer the user avatar for the one sends message)
        - avatar

####  json example
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "outbox": [{"fromappid": 1, "dateline": 1331287450, "related": 0, "folder": "inbox", "msgfrom": "aifaxian", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/01_avatar_big.jpg", "msgtoid": 12, "new": 1, "message": "\u4f60\u597d\u554a", "pmid": 1, "delstatus": 0, "msgfromid": 1, "subject": "\u4f60\u597d\u554a"},], "code": 0, "inbox": [{"fromappid": 0, "dateline": 1331287450, "related": 0, "folder": "inbox", "msgfrom": "aifaxian", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/12_avatar_big.jpg", "msgtoid": 1, "new": 0, "message": "\u4f60\u597d\u554a", "pmid": 2, "delstatus": 0, "msgfromid": 12, "subject": "\u4f60\u597d\u554a"}]}

<h2 id="pllb">评论列表</h2>
 两种请求，一个是对当前文章（分享/商品等）的评论；另一个是这个用户所发表的评论汇总。
### 请求参数
* /commentlist?uid=1&page=1&count=10
    - uid (当前用户id)
* /commentlist?id=23&idtype=blogid&page=1&count=10
    - id ( 源文章id)
    - idtype (原文章类型，blogid；photoid等)

### 返回字段

* avatar_err_path
* code
* authorid, author, avatar (user who post the comment's id and username, avatar)
* message
* dateline

####  json example
{"code": 0, "comments": [{"author": "13945667832", "authorid": 9, "dateline": 1330508508, "message": "\u597d\u6837\u7684\u554a\u3002", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/09_avatar_big.jpg"}]}

<h2 id='tzxt'>通知系统</h2>
获取通知，包括数量/内容
### 请求参数
/notice?uid=10&new=true

* uid
* new (true: unread notification; false: all notifications)

### 返回字段
* code
* count (number of notifications)
* notice:
    * type [blogcomment, doing, event, eventcomment, friend, goodscomment, mtag, photocomment, system]
    * authorid, author
    * note (description of the notification)
    * dateline

#### json 范例
{"count": 12, "notice": [{"uid": 12, "author": "aifaxian", "dateline": 1331653884, "note": "\u5c06\u4f60\u8bbe\u4e3a\u4e86\u7fa4\u7ec4 \<\a href=\"space.php?do=mtag&tagid=3\" target=\"_blank\">\u5730\u738b\u5e7f\u573a<\/a> \u7684\u7fa4\u4e3b", "authorid": 1, "new": 1, "type": "mtag", "id": 41}]

<h2 id='wdsclb'>我的收藏列表</h2>
即红心列表
### 请求参数
/mylikes/1?uid=10&page=1&count=10

* 数字 (查看对象uid)
* uid (客户端的uid)
* page
* count

### 返回字段
见[动态列表](#dtlb)

<h2 id='wdfeed'>我的心情、爆料、分享、照片、投票、商品、优惠券、活动等</h2>
你懂的
### 请求参数
/myfeed/1?uid=10&idtype=blogid&page=1&count=10

* 数字 (查看对象uid)
* uid (客户端的uid)
* idtype (列表类型，如爆料，分享等)
    - doid 心情，
    - blogid 分享，
    - photoid 照片，
    - pid，投票，
    - discloseid 爆料，
    - goodsid 商品，
    - couponsid 优惠，
    - eventid 活动
* page
* count

### 返回字段
见[动态列表](#dtlb)

<h2 id="wdcy">我参与的活动／优惠券列表</h2>
### 请求参数
/mytips/1?idtype=eventid&uid=1&page=1&count=10

* 数字 （查看对象uid）
* uid (客户端的uid)
* page
* count

### 返回字段
字段同[逛街列表](#gg)，多出字段：

* idtype == eventid:
    - code
    - event
        + eventid
        + username
        + uid
        + exchange
        + fellow
        + status
        + dateline
        + template
* idtype == couponsid:
    - code
    - coupons
        + couponsid
        + uid
        + username
        + name
        + istrue
        + residence
        + idcard
        + isexchange
        + sex
        + member
        + phone
        + ischecked
        + income

#### json example
* event   
{"code": 0, "event": [{"eventid": 258, "username": "13535597218", "uid": 11, "exchange": 0, "dateline": 1334734454, "fellow": 0, "status": 2, "template": "\u5c0f\u6b23,13535597218"}, ]}
* coupons   
{"code": 0, "coupons": [{"username": "13535597218", "couponsid": 157, "uid": 11, "istrue": 0, "residence": "", "dateline": 1334734205, "idcard": 0, "isexchange": 0, "sex": 0, "member": 1, "phone": "13535597218", "ischecked": 0, "income": "0.00", "name": "meixin"},]}

<h2 id='wdgzlb'>我的关注列表</h2>
你懂得
### 请求参数
/myfollowings/1?uid=10&page=1&count=10

* 数字 (查看对象uid)
* uid (客户端的uid)
* page
* count

### 返回字段
见[商家列表](#sjlb)

<h2 id='wdfslb'>我的粉丝列表</h2>
你懂得
### 请求参数
/myfollowers/1?uid=10&page=1&count=10

* 数字 (查看对象uid)
* uid (客户端的uid)
* page
* count

### 返回字段
见[商家列表](#sjlb)

<h2 id='cslb'>城市列表</h2>
### 请求参数
/citylist
### 返回字段
* code
* citys
    + cityid
    + title
    + note

#### json example
{"citys": [{"cityid": 5, "note": "\u63ed\u9633\u5546\u5708\u805a\u96c6\u5730", "title": "\u63ed\u9633"}, ]}

<h2 id="ss">搜索</h2>
搜索接口：
目前提供用户搜索：关注／粉丝／商家   
目前提供逛街搜索：商品／优惠券   
### 请求参数
* /s/u/阿?type=follwing&uid=1&page=1&count=10
* /s/u/阿?type=follwer&uid=1&page=1&count=10
* /s/u/阿?type=business&uid=1&page=1&count=10&lng=1&lat=1
* /s/u/阿?type=all&uid=1&page=1&count=10&lng=1&lat=1
* /s/g/nike?lng=1&lat=1&uid=1
* /s/c/nike?lng=1&lat=1&uid=1

* 将提供接口
    + u 用户
    + f 动态
    + g 商品
    + c 优惠券
* 关键字
* type 
    + u
        - all
        - following
        - follower
        - business
* uid 客户端uid
* page
* count

### 返回字段
* code
* result
    + u
        - 同[用户列表](#yhlb)
    + g 
        - 同[商品列表](#tjsplb)
    + c
        - 同[优惠券列表](#yhqlb)

#### json example
***

<h2 id='tjlb'>推荐列表</h2>
顶部推荐列表    
使用时请根据idtype来进行标题选择。
### 请求参数
/recs?page=1&count=8

### 返回字段
* code
* rec
    + id
    + idtype
    + subject
    + image_1

#### json example
{"rec": [{"image_1": "attachment/201204/13/2225243_1334291353ww5V.jpg", "idtype": "eventid", "hot": 0, "id": 200, "subject": "\u96f7\u6d1b\u65af\u5929\u4f7f \u5168\u573a\u624b\u888b5\u6298\uff0c\u771f\u76ae\u94b1\u530549\u5143"},], "code": 0}

<h2 id='tjyh'>推荐用户</h2>
获取底部推荐用户列表
### 请求参数
/users/hot?page=1&count=10

### 返回字段
* code
* users
    + uid
    + username
    + name
    + hot

#### json example
{code: 0,users: [{username: "aifaxian",hot: 1468,uid: 1,name: "爱发现"},]}

<h2 id='sqlb'>商圈列表</h2>
在请求商圈页面之前请请求此接口以获取商圈列表
### 请求参数
/mall
* cityid (当前城市id)

### 返回字段
* code
* malls
    - tagid (商圈id)
    - tagname (商圈名称)

#### json example
{"code": 0, "malls": [{"tagid": 5, "tagname": "\u5bb6\u4e50\u798f\u5e7f\u573a"},]

<h2 id='sq'>商圈页面</h2>
商圈综合页面,包括商圈信息，商圈内商家列表，商圈内商品列表，商圈内活动及优惠券列表，以及各列表的分页请求
### 请求参数
1. /mall/5   
    - 数字 （商圈id）

2. /mall/5?type=tips?page=1&count=4   
    - type (tips: 活动及优惠券)
    - page
    - count

3. /mall/5?type=tags?tagid=6&page=1&count=4   
    - type (tags: 各一级分类下的各种动态)
    - tagid (一级分类id, 请参考标签接口说明)

4. /mall/5?type=shops?page=1&count=4   
    - type (shops: 商家列表)

### 返回字段
1. 全部信息:
    + details (商圈信息):
        - tagid
        - tagname (商圈名称)
        - pic (商圈图片)
        - announcement (公告)
        - threadnum
        - membernum (注册商家)
        - recommend 
        - postnum (动态数量)
    + 2
    + tags (各类动态列表):
        - 标签id
          + 3
    + 4
2. tips 活动及优惠券信息
    + tips (活动及优惠券):
        - events (活动):
            + id
            + idtype
            + subject (标题)
            + image_1 (图片)
        - coupons (优惠):
            + id
            + idtype
            + subject (标题)
            + image_1 (图片)
3. tags (动态列表)
    + uid
    + username
    + name
    + id
    + idtype
    + image_1
    + subject
        
4. shops (商家列表)
    - uid
    - name
    - username

#### json example
{"shops": [{"username": "aifaxian", "uid": 1, "name": "\u7231\u53d1\u73b0"}], "code": 0, "tips": {"events": [{"image_1": "attachment/201203/15/1_1331818806zIpv.jpg", "idtype": "eventid", "id": 10, "subject": "\u5730\u738b\u5e7f\u573a\u201c\u7231\u53d1\u73b0\u201d\u4e3b\u9898\u8d2d\u7269\u6d3b\u52a8"},], "coupons": []},"tags": [{"6": [{"username": "aifaxian", "idtype": "photoid", "uid": 1, "image_1": "attachment/201203/16/205_1331880482ztlS.jpg", "name": "\u7231\u53d1\u73b0", "id": 76, "subject": ""},}]}], "details": {"threadperm": 0, "announcement": "", "closeapply": 0, "viewperm": 0, "fieldid": 4, "tagid": 5, "pic": "", "postperm": 0, "joinperm": 0, "moderator": "", "postnum": 0, "tagname": "\u5bb6\u4e50\u798f\u5e7f\u573a", "recommend": 0, "close": 0, "threadnum": 0, "membernum": 1}}
    
---

<h2 id="yhzc">用户注册</h2>
URL格式： <站点URL>/capi/do.php?ac=register&username=XXXXXXXXX&password=XXXXX&seccode=XXXXX&registersubmit=true
### 请求参数
* ac:register
* registersubmit：true
* username: 电话号码
* password：密码
* seccode：验证码

### 注册成功返回JSON(样例）
{"code":0,"data":{"uid":17,"credit":10,"experience":null,"cityid":"6"},"msg":"\u6ce8\u518c\u6210\u529f\u4e86\uff0c\u8fdb\u5165\u8bbe\u7f6e\u5f15\u5bfc","action":"registered"}
### 返回字段
* code: 0，成功；1，失败
* data: 包括的返回数据，uid:开通用户的id，credit:增加的积分， experience：增加的经验, cityid: 有道接口判断的城市位置，返回对应城市列表的id
* msg：提示信息，与站点的提示信息一致
* action：代表操作的类型

<h2 id="yzm">获取验证码</h2>
URL格式： <站点URL>/capi/do.php?ac=register&op=getseccode&mobile=XXXXXXXXX
### 请求参数
* ac:register
* op:getseccode
* mobile: XXXXXXXXX
### 获取返回JSON(样例）
{"code":0,"data":{"seccode":"EKJJ","authcode":"53bcPlA1c25b259WT86L4JuEGW8RSkAvVbXLfVp6d6kL"},"msg":"succeed","action":"succeed"}
* code: 0，成功；1，失败
* data: 包括的返回数据，seccode-验证码， authcode-UCHOME加密串
* msg：提示信息，与站点的提示信息一致
* action：代表操作的类型

<h2 id="yhdl">用户登录</h2>
用户操作
### 请求参数
/login?name=aifaxian&pwd=12345

* name
* pwd
* TODO:
    * openapi (新浪微博登陆)

### 返回字段
* Success:
    * code: 0
    * user:
        * uid
* Fail:
    * code: 1
    * msg 

#### json example
{"msg": "wrong password or wrong username", "code": 1}

<h2 id="yhzx">用户注销</h2>
 *请自行了断！*


<h2 id="sctx">上传头像</h2>
URL格式： <站点URL>/capi/cp.php?ac=avatar
注意：当前仅支持POST!!!

### POST范例
```
<!DOCTYPE HTML><html><head><meta charset="utf-8"><title>上传头像</title></head><body>
<form action="cp.php?ac=avatar" method="post" enctype="multipart/form-data">
	<input type="file" name="Filedata"/>
	<input type="submit"  name="submit"  value="提交"/>
	<input type="hidden" name="ac" value="avatar" />
	<input type="hidden" name="uid" value="XXX" />
	<input type="hidden" name="avatartype" value="virtual" />
    <input type="hidden" name="avatarsubmit" value="true" />
</form>
</body>
</html>
```
### 请求参数
* Filedata:上传的图片
* uid: 用户id
* ac:avatar
* avatarsubmit: true
### 获取返回JSON(样例）
{"code":0,"data":{"url":{"big":"http:\/\/localhost:8080\/fx\/center\/data\/avatar\/000\/00\/00\/01_avatar_big.jpg","middle":"http:\/\/localhost:8080\/fx\/center\/data\/avatar\/000\/00\/00\/01_avatar_middle.jpg","small":"http:\/\/localhost:8080\/fx\/center\/data\/avatar\/000\/00\/00\/01_avatar_small.jpg"},"msg":"\u4e0a\u4f20\u6210\u529f","reward":{"credit":0,"experience":0},"dateline":"1335245380"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
* code: 0，成功；1，失败
* data: 
	- url:成功返回真正url（big：代表大图，middle：代表中图，small:代表小图），否则为错误码。-1：用户ID为空；-2：图片尺寸过小; -3:图片数据为空; -4:上传失败;
	- msg:对应的提示消息
* reward：积分，null代表修改图片，否则为第一次上传，数值代表增加的积分值
* dateline：上传时间
* action: 操作结果，统一为do_success
* msg: 操作的提示语，统一为"操作完成了"

<h2 id="sjtjsz">关注商家设置</h2>
URL格式： <站点URL>/capi/space.php?do=guid&shopsubmit=true&me=2&uid[]=1&uid[]=2&uid[]=10
### 请求参数
* do:guid
* shopsubmit：true
* uid: 代表要关注的商家，为数组，按uid[]依次传入
* me: 用户id，代表行为主体


### 设置成功返回JSON(样例）
{"code":0,"data":[],"msg":"\u8bbe\u7f6e\u6210\u529f","action":"\u8bbe\u7f6e\u6210\u529f"}
### 返回字段
* code: 0，成功；1，失败
* data: 包括的返回数据，这里暂时为空
* msg：提示信息，与站点的提示信息一致，“设置成功”
* action：代表操作的类型， “设置成功”


<h2 id="xqahsz">兴趣爱好设置</h2>
URL格式： <站点URL>/capi/space.php?do=guid&hobbitssubmit=true&uid=15&tags=摄影 美食 精品 百货 美容 电子
### 请求参数
* do:guid
* hobbitssubmit：true
* uid: 用户id
* tags：用户设置的标签，空格隔开，后台Update操作，可以多次提交

### 设置成功返回JSON(样例）
{"code":0,"data":[],"msg":"\u8bbe\u7f6e\u6210\u529f","action":"\u8bbe\u7f6e\u6210\u529f"}
### 返回字段
* code: 0，成功；1，失败
* data: 包括的返回数据，这里暂时为空
* msg：提示信息，与站点的提示信息一致，“设置成功”
* action：代表操作的类型， “设置成功”


<h2 id="fbtp1">发布图片（上传图片）</h2>
URL格式： <站点URL>/capi/cp.php?ac=upload
注意：当前仅支持POST!!!

### POST范例
```
<html><head><meta charset="utf-8"><title>上传图片</title></head><body>
<form action="cp.php?ac=upload" method="post" enctype="multipart/form-data">
<input type="file" name="Filedata">
<input type="hidden" name="op" value="uploadphoto">
<input type="hidden" name="uid" value="XXXX">
<input type="hidden" name="username" value="XXXX">
<input type="hidden" name="photosubmit" value="true">
<input type="hidden" name="topicid" value="XXXX(注释好像默认0,请确认）">
<input type="hidden" name="ac" value="upload">
<input type="submit" name="submit" value="提交">
</form></body>
</html>
```
### 请求参数
* Filedata:上传的图片
* uid: 用户id
* username: 用户名
* photosubmit:true (好像是多余的，请求确认）
* op: uploadphoto
* topicid: XXXX(注释好像默认0,请确认）
* ac: upload

### 设置成功返回JSON(样例）
{"code":0,"data":{"pic":575},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: pic 返回图片所在数据库的id号
* msg：提示信息，与站点的提示信息一致，“操作完成了”
* action：代表操作的类型， “操作完成了”
### 注意
由于（function_image.php)makethumb中调用imagecreatefromjpeg，这个受内存限制，太大的图会导致页面提交出错，且无法
捕获错误信息，客户端对无响应做处理


<h2 id="fbtp2">发布图片（提交）</h2>
URL格式： <站点URL>/capi/cp.php?ac=photo&message=小明你好&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&photosubmit=true&makefeed=1&topicid=0&title[580]=&uid=XX&username=XXX
### 请求参数
* ac:photo
* photosubmit：true
* uid: 用户id
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed
* title[]: 第一阶段产生的图像id作为下标
* message: 图片描述
* tags：图片的标签

### 设置成功返回JSON(样例）
{"code":0,"data":["photoid":100],"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回上传的图片photoid
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="fbtp3">发布图片（编辑）</h2>
URL格式： <站点URL>/capi/cp.php?ac=photo&photoid=100&message=小明你好&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&photosubmit=true&makefeed=1&topicid=0&picid=580&uid=XX&username=XXX
### 请求参数
* ac:photo
* photoid：需要修改的图片photoid
* photosubmit：true
* uid: 用户id
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed
* picid: 第一阶段产生的图像id
* message: 图片描述
* tags：图片的标签

### 设置成功返回JSON(样例）
{"code":0,"data":["photoid":100],"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回上传的图片photoid
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
###注意
修改其实和提交一样，只是多传了一个photoid

<h2 id="fbtp4">发布图片（删除）</h2>
URL格式： <站点URL>/capi/cp.php?ac=photo&op=delete&photoid=33&deletesubmit=true&uid=XXX
### 请求参数
* ac:photo
* photoid：需要删除的图片photoid
* deletesubmit：true
* op: delete
* uid: 图片所属用户id
### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":10,"experience":10},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
### 设置失败返回JSON(样例）
{"code":1,"data":[],"msg":"\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u64cd\u4f5c","action":"failed_to_delete_operation"}


<h2 id="fbfx1">发布分享（上传图片）</h2>
URL格式： <站点URL>/capi/cp.php?ac=upload
注意：当前仅支持POST!!!

### POST范例
```
<html><head><meta charset="utf-8"><title>上传分享图片</title></head><body>
<form action="cp.php?ac=upload" method="post" enctype="multipart/form-data">
<input type="file" name="Filedata"/>
<input type="hidden" name="op" value="uploadpic" />
<input type="hidden" name="uid" value="1" />
<input type="hidden" name="topicid"  value="0" />
<input type="hidden" name="ac"  value="upload" />
<input type="submit"  name="submit"  value="提交"/>
</form></body></html>
```
### 请求参数
* Filedata:上传的图片
* uid: 用户id
* username: 用户名
* op: uploadpic 注意与发布图片（上传图片）区分
* topicid: XXXX(注释好像默认0,请确认）
* ac: upload

### 设置成功返回JSON(样例）
{"code":0,"data":{"pic":588,"picpath":"attachment\/201204\/20\/1_1334927560RO0m.jpg"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: pic 返回图片所在数据库的id号 picpath:为图片在服务器的URL
* msg：提示信息，与站点的提示信息一致，“操作完成了”
* action：代表操作的类型， “操作完成了”
### 注意
由于（function_image.php)makethumb中调用imagecreatefromjpeg，这个受内存限制，太大的图会导致页面提交出错，且无法
捕获错误信息，客户端对无响应做处理


<h2 id="fbfx2">发布分享（提交）</h2>
URL格式： <站点URL>/capi/cp.php?ac=blog&subject=测试分享&message=小明你好\<img src="attachment/201204/20/1_1334925429OD0V.jpg"/\>&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&blogsubmit=true&makefeed=1&topicid=0&picid=580&uid=XX&username=XXX
### 请求参数
* ac:blog
* blogsubmit：true
* uid: 用户id
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed
* picid: 第一阶段产生的图像id
* message: 分享描述(message如何包含图片，必须分二阶段，先上传图片，然后在message中插入\<img src="picpath"/\>, picpath为第一阶段返回值)
* subject: 分享的标题
* tags：图片的标签

### 设置成功返回JSON(样例）
{"code":0,"data":{"subject":"\u6d4b\u8bd5\u5206\u4eab","classid":null,"cityid":"7","lat":"23.1405830000","lng":"113.3455640000","friend":0,"password":null,"noreply":0,"picflag":0,"pic":"attachment\/201204\/20\/1_1334925429OD0V.jpg","topicid":0,"checked":0,"uid":"1","username":"aifaxian","dateline":"1335098648","blogid":52,"credit":0,"experience":0},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 提交成功后分享的相关信息, 其中credit为增加的积分，experience为增加的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"


<h2 id="fbfx3">发布分享（编辑）</h2>
URL格式： <站点URL>/capi/cp.php?ac=blog&blogid=26subject=测试分享&message=小明你好\<img src="attachment/201204/20/1_1334925429OD0V.jpg"/\>&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&blogsubmit=true&makefeed=1&topicid=0&picid=580&uid=XX&username=XXX
### 请求参数
* ac:blog
* blogsubmit：true
* uid: 用户id
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed
* picid: 第一阶段产生的图像id
* message: 分享描述(message如何包含图片，必须分二阶段，先上传图片，然后在message中插入\<img src="picpath"/\>, picpath为第一阶段返回值)
* subject: 分享的标题
* tags：图片的标签
* blogid: 分享的id号

### 设置成功返回JSON(样例）
{"code":0,"data":{"subject":"\u6d4b\u8bd5\u5206\u4eab","classid":null,"cityid":null,"lat":"23.1405830000","lng":"113.3455640000","friend":0,"password":null,"noreply":0,"picflag":0,"pic":"attachment\/201204\/20\/1_1334925429OD0V.jpg","topicid":0,"checked":0,"uid":"1","username":"aifaxian","dateline":"1334927846","blogid":26},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 提交成功后分享的相关信息
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
###注意
修改其实和提交一样，只是多传了一个blogid

<h2 id="fbfx4">发布分享（删除）</h2>
URL格式： <站点URL>/capi/cp.php?ac=blog&op=delete&blogid=26&deletesubmit=true&uid=XXX
### 请求参数
* ac:blog
* blogid：需要删除的分享id
* deletesubmit：true
* op: delete
* uid: 分享所属用户id
### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":10,"experience":10},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
### 设置失败返回JSON(样例）
{"code":1,"data":[],"msg":"\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u64cd\u4f5c","action":"failed_to_delete_operation"}

<h2 id="fbbl1">发布爆料（上传图片）</h2>
URL格式： <站点URL>/capi/cp.php?ac=upload
注意：当前仅支持POST!!!

### POST范例
```
<html><head><meta charset="utf-8"><title>上传分享图片</title></head><body>
<form action="cp.php?ac=upload" method="post" enctype="multipart/form-data">
<input type="file" name="Filedata"/>
<input type="hidden" name="op" value="uploadpic" />
<input type="hidden" name="uid" value="1" />
<input type="hidden" name="topicid"  value="0" />
<input type="hidden" name="ac"  value="upload" />
<input type="submit"  name="submit"  value="提交"/>
</form></body></html>
```
### 请求参数
* Filedata:上传的图片
* uid: 用户id
* username: 用户名
* op: uploadpic 注意与发布图片（上传图片）区分
* topicid: XXXX(注释好像默认0,请确认）
* ac: upload

### 设置成功返回JSON(样例）
{"code":0,"data":{"pic":588,"picpath":"attachment\/201204\/20\/1_1334927560RO0m.jpg"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: pic 返回图片所在数据库的id号 picpath:为图片在服务器的URL
* msg：提示信息，与站点的提示信息一致，“操作完成了”
* action：代表操作的类型， “操作完成了”
### 注意
由于（function_image.php)makethumb中调用imagecreatefromjpeg，这个受内存限制，太大的图会导致页面提交出错，且无法
捕获错误信息，客户端对无响应做处理
是的，如果你留意了。。。它居然和发布分享是一样的！

<h2 id="fbbl2">发布爆料（提交）</h2>
URL格式： <站点URL>/capi/cp.php?ac=disclose&subject=我要爆料&message=小明你好\<img src="attachment/201204/20/1_1334925429OD0V.jpg"/\>&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&disclosesubmit=true&makefeed=1&topicid=0&picid=580&uid=XX&username=XXX&lat=23.1405830000&lng=113.3455640000
### 请求参数
* ac:disclose
* disclosesubmit：true
* uid: 用户id
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed
* picid: 第一阶段产生的图像id
* message: 分享描述(message如何包含图片，必须分二阶段，先上传图片，然后在message中插入\<img src="picpath"/\>, picpath为第一阶段返回值)
* subject: 分享的标题
* tags：图片的标签
* lat:经度
* lng:位置

### 设置成功返回JSON(样例）
{"code":0,"data":{"subject":"\u6211\u8981\u7206\u6599\u3001","classid":null,"friend":0,"cityid":null,"lat":"23.1405830000","lng":"113.3455640000","password":null,"noreply":0,"picflag":0,"pic":"attachment\/201204\/20\/1_1334925429OD0V.jpg","topicid":0,"checked":0,"uid":"XX","username":"XXX","dateline":"1334929734","discloseid":5},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 提交成功后爆料的相关信息
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="fbfx3">发布爆料（编辑）</h2>
URL格式： <站点URL>/capi/cp.php?ac=disclose&discloseid=5&subject=我要爆料2&message=小明你好\<img src="attachment/201204/20/1_1334925429OD0V.jpg"/\>&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&disclosesubmit=true&makefeed=1&topicid=0&picid=580&uid=XX&username=XXX&lat=23.1405830000&lng=113.3455640000
### 请求参数
* ac:disclose
* disclosesubmit：true
* uid: 用户id
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed
* picid: 第一阶段产生的图像id
* message: 分享描述(message如何包含图片，必须分二阶段，先上传图片，然后在message中插入\<img src="picpath"/\>, picpath为第一阶段返回值)
* subject: 分享的标题
* tags：爆料的标签
* lat:经度
* lng:位置
* discloseid: 爆料id

### 设置成功返回JSON(样例）
{"code":0,"data":{"subject":"\u6211\u8981\u7206\u65992\u3001","classid":null,"friend":0,"cityid":null,"lat":"23.1405830000","lng":"113.3455640000","password":null,"noreply":0,"picflag":0,"pic":"attachment\/201204\/20\/1_1334925429OD0V.jpg","uid":"0","username":"XXX","discloseid":"5"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 提交成功后爆料的相关信息
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
###注意
修改其实和提交一样，只是多传了一个discloseid

<h2 id="fbbl4">发布爆料（删除）</h2>
URL格式： <站点URL>/capi/cp.php?ac=disclose&op=delete&discloseid=5&deletesubmit=true&uid=XXX
### 请求参数
* ac:disclose
* discloseid：需要删除的分享id
* deletesubmit：true
* op: delete
* uid: 爆料所属用户id
### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":10,"experience":10},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
### 设置失败返回JSON(样例）
{"code":1,"data":[],"msg":"\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u64cd\u4f5c","action":"failed_to_delete_operation"}

<h2 id="fbtp">发布投票</h2>
URL格式： <站点URL>/capi/cp.php?ac=poll&subject=你觉得明天会下雨吗&option[]=会&option[]=不会&option[]=难说&option[]=谁知道呢&maxchoice=1&pollsubmit=true&makefeed=1&topicid=0&tags=测试 艺术&credit=0&percredit=0&expiration=2012-04-22&friend=0&uid=XXX&username=XXX
### 请求参数
* ac:poll
* pollsubmit：true
* subject：投票主题
* option[]：投票项，最多不超过20个
* maxchoice: 1单选 2可选2个 3可选3个 ... 8可选8个
* makefeed：1
* topicid：0
* tags：爆料的标签
* credit：悬赏积分
* percredit：平摊悬赏积分
* expiration：截止时间
* friend: 隐私,0全站公开 1仅好友可见 2仅自己可见（当然不会有给自己的投票）
* uid: 用户id
* username: 用户名

### 发布成功返回JSON(样例）
{"code":0,"data":{"credit":2,"experience":2},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="fbxq">发布心情</h2>
URL格式： <站点URL>/capi/cp.php?ac=doing&message=晴天真好[em:14:]&spacenote=true&addsubmit=true&topicid=0&uid=XXX&username=XXX
### 请求参数
* ac: doing
* message: 心情内容
* spacenote:true
* addsubmit:true
* topicid:0
* uid:用户id
* username:用户名

### 发布成功返回JSON(样例）
{"code":0,"data":{"credit":3,"experience":3},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="cqxq">删除心情</h2>
URL格式： <站点URL>/capi/cp.php?ac=doing&op=delete&deletesubmit=true&doid=XXX&uid=XXX&username=XXXX
### 请求参数
* ac: doing
* op: delete
* deletesubmit: true
* doid: 心情id
* uid: 操作的用户id
* username: 用户名
### 发布成功返回JSON(样例）
{"code":0,"data":{"credit":2,"experience":2},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"




<h2 id="fbsp1">发布商品（上传图片）</h2>
URL格式： <站点URL>/capi/cp.php?ac=upload
注意：当前仅支持POST!!!

### POST范例
```
<html><head><meta charset="utf-8"><title>上传分享图片</title></head><body>
<form action="cp.php?ac=upload" method="post" enctype="multipart/form-data">
<input type="file" name="Filedata"/>
<input type="hidden" name="op" value="uploadpic" />
<input type="hidden" name="uid" value="1" />
<input type="hidden" name="topicid"  value="0" />
<input type="hidden" name="ac"  value="upload" />
<input type="submit"  name="submit"  value="提交"/>
</form></body></html>
```
### 请求参数
* Filedata:上传的图片
* uid: 用户id
* username: 用户名
* op: uploadpic 注意与发布图片（上传图片）区分
* topicid: XXXX(注释好像默认0,请确认）
* ac: upload

### 设置成功返回JSON(样例）
{"code":0,"data":{"pic":588,"picpath":"attachment\/201204\/20\/1_1334927560RO0m.jpg"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: pic 返回图片所在数据库的id号 picpath:为图片在服务器的URL
* msg：提示信息，与站点的提示信息一致，“操作完成了”
* action：代表操作的类型， “操作完成了”
### 注意
由于（function_image.php)makethumb中调用imagecreatefromjpeg，这个受内存限制，太大的图会导致页面提交出错，且无法
捕获错误信息，客户端对无响应做处理
是的，如果你留意了。。。它居然和发布分享是一样的！

<h2 id="fbsp2">发布商品（提交）</h2>
URL格式： <站点URL>/capi/cp.php?ac=goods&subject=好商品&price=15&message=小明你好<img src="attachment/201204/20/1_1334925429OD0V.jpg"/>&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&goodssubmit=true&makefeed=1&topicid=0&phone_send=1&pm_send=1&puid[]=2&puid[]=3&uid=XX&username=XXX
### 请求参数
* ac:goods
* goodssubmit：true
* uid: 用户id
* puid: 发送短信，消息的用户id列表
* phone_send：手机短信
* pm_send: 站内短信
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed，默认1
* message: 商品描述(message如何包含图片，必须分二阶段，先上传图片，然后在message中插入\<img src="picpath"/\>, picpath为第一阶段返回值)
* subject: 标题
* price：价格
* tags：图片的标签

### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":0,"experience":0},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="fbsp3">发布商品（编辑）</h2>
URL格式： <站点URL>/capi/cp.php?ac=goods&goodsid=17&price=15&subject=好商品&message=小明你好<img src="attachment/201204/20/1_1334925429OD0V.jpg"/>&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&goodssubmit=true&makefeed=1&topicid=0&uid=XX&username=XXX
### 请求参数
* ac:goods
* goodssubmit：true
* uid: 用户id
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed，默认1
* message: 商品描述(message如何包含图片，必须分二阶段，先上传图片，然后在message中插入\<img src="picpath"/\>, picpath为第一阶段返回值)
* subject: 标题
* price：价格
* tags：图片的标签
* goodsid:17
###注意
修改其实和提交一样，只是多传了一个goodsid

### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":0,"experience":0},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="fbsp4">发布商品（删除）</h2>
URL格式： <站点URL>/capi/cp.php?ac=goods&goodsid=17&op=delete&deletesubmit=true&uid=XXX
### 请求参数
* ac:goods
* goodsid：需要删除的分享id
* deletesubmit：true
* op: delete
* uid: 商品所属用户id
### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":0,"experience":0},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
### 设置失败返回JSON(样例）
{"code":1,"data":[],"msg":"\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u64cd\u4f5c","action":"failed_to_delete_operation"}


<h2 id="fbyhq1">发布优惠券（上传图片）</h2>
URL格式： <站点URL>/capi/cp.php?ac=upload
注意：当前仅支持POST!!!

### POST范例
```
<html><head><meta charset="utf-8"><title>上传优惠券图片</title></head><body>
<form action="cp.php?ac=upload" method="post" enctype="multipart/form-data">
<input type="file" name="Filedata"/>
<input type="hidden" name="op" value="uploadpic" />
<input type="hidden" name="uid" value="1" />
<input type="hidden" name="topicid"  value="0" />
<input type="hidden" name="ac"  value="upload" />
<input type="submit"  name="submit"  value="提交"/>
</form></body></html>
```
### 请求参数
* Filedata:上传的图片
* uid: 用户id
* username: 用户名
* op: uploadpic 注意与发布图片（上传图片）区分
* topicid: XXXX(注释好像默认0,请确认）
* ac: upload

### 设置成功返回JSON(样例）
{"code":0,"data":{"pic":588,"picpath":"attachment\/201204\/20\/1_1334927560RO0m.jpg"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: pic 返回图片所在数据库的id号 picpath:为图片在服务器的URL
* msg：提示信息，与站点的提示信息一致，“操作完成了”
* action：代表操作的类型， “操作完成了”
### 注意
由于（function_image.php)makethumb中调用imagecreatefromjpeg，这个受内存限制，太大的图会导致页面提交出错，且无法
捕获错误信息，客户端对无响应做处理
是的，如果你留意了。。。它居然和发布分享是一样的！

<h2 id="fbyhq2">发布优惠券（提交）</h2>
URL格式： <站点URL>/capi/cp.php?ac=coupons&subject=华润超市打扣&oprice=124&bprice=34&obprice=2.7&starttime=2012-04-21 10:25&endtime=2012-04-22 10:25&rule_1=1&rule_2=1&rule_3=0&rule_4=0&rule_5=0&rule_6=0&rule_7=0&rule_8=0&rule_9=0&rule_10=10&rule_11=9&message=坑die牛奶大降价呀<img src="attachment/201204/20/1_1334925429OD0V.jpg"/>&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&couponssubmit=true&makefeed=1&topicid=0&phone_send=1&pm_send=1&puid[]=2&puid[]=3&uid=XX&username=XXX
### 请求参数
* ac:coupons
* couponssubmit：true
* uid: 用户id
* puid: 发送短信，消息的用户id列表
* phone_send：手机短信
* pm_send: 站内短信
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed，默认1
* message: 商品描述(message如何包含图片，必须分二阶段，先上传图片，然后在message中插入\<img src="picpath"/\>, picpath为第一阶段返回值)
* subject: 标题
* oprice：原价
* bprice: 优惠价
* obprice：折扣，(原价-优惠价)/优惠价,应该是自动生成的
* starttime：开始时间
* endtime: 结束时间
* rule_1：规则 姓名，取值范围{0,1}
* rule_2：规则 电话，取值范围{0,1}
* rule_3：规则 身份证号码，取值范围{0,1}
* rule_4：规则 性别，取值范围{0,1}
* rule_5：规则 现居住地，取值范围{0,1}
* rule_6：规则 收入情况，取值范围{0,1}
* rule_7：规则 家庭人数，取值范围{0,1}
* rule_8：规则 手机归属下载条件， 当前取值范围（0：全部可下载）
* rule_9：规则 人数限制，取值范围>=0，0代表无人数限制
* rule_10：规则 获得金币数
* rule_11：规则 扣除金币数
* tags：标签


### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":5,"experience":5},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="fbyhq3">发布优惠券（编辑）</h2>
URL格式： <站点URL>/capi/cp.php?ac=coupons&couponsid=6&subject=华润超市打扣&oprice=124&bprice=34&obprice=2.7&starttime=2012-04-21 10:25&endtime=2012-04-22 10:25&rule_1=1&rule_2=1&rule_3=0&rule_4=0&rule_5=0&rule_6=0&rule_7=0&rule_8=0&rule_9=0&rule_10=10&rule_11=9&message=坑die牛奶大降价呀<img src="attachment/201204/20/1_1334925429OD0V.jpg"/>&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&couponssubmit=true&makefeed=1&topicid=0&phone_send=1&pm_send=1&puid[]=2&puid[]=3&uid=XX&username=XXX
### 请求参数
* ac:coupons
* couponssubmit：true
* uid: 用户id
* puid: 发送短信，消息的用户id列表
* phone_send：手机短信
* pm_send: 站内短信
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed，默认1
* message: 商品描述(message如何包含图片，必须分二阶段，先上传图片，然后在message中插入\<img src="picpath"/\>, picpath为第一阶段返回值)
* subject: 标题
* oprice：原价
* bprice: 优惠价
* obprice：折扣，(原价-优惠价)/优惠价,应该是自动生成的
* starttime：开始时间
* endtime: 结束时间
* rule_1：规则 姓名，取值范围{0,1}
* rule_2：规则 电话，取值范围{0,1}
* rule_3：规则 身份证号码，取值范围{0,1}
* rule_4：规则 性别，取值范围{0,1}
* rule_5：规则 现居住地，取值范围{0,1}
* rule_6：规则 收入情况，取值范围{0,1}
* rule_7：规则 家庭人数，取值范围{0,1}
* rule_8：规则 手机归属下载条件， 当前取值范围（0：全部可下载）
* rule_9：规则 人数限制，取值范围>=0，0代表无人数限制
* rule_10：规则 获得金币数
* rule_11：规则 扣除金币数
* tags：标签
* couponsid：优惠id
###注意
修改其实和提交一样，只是多传了一个couponsid

### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":0,"experience":0},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="fbyhq4">发布优惠券（删除）</h2>
URL格式： <站点URL>/capi/cp.php?ac=coupons&couponsid=6&op=delete&deletesubmit=true&uid=XXX
### 请求参数
* ac:coupons
* couponsid：需要删除的优惠id
* deletesubmit：true
* op: delete
* uid: 商品所属用户id
### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":10,"experience":10},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
### 设置失败返回JSON(样例）
{"code":1,"data":[],"msg":"\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u64cd\u4f5c","action":"failed_to_delete_operation"}


<h2 id="fbhd1">发布活动（上传图片）</h2>
URL格式： <站点URL>/capi/cp.php?ac=upload
注意：当前仅支持POST!!!

### POST范例
```
<html><head><meta charset="utf-8"><title>上传活动图片</title></head><body>
<form action="cp.php?ac=upload" method="post" enctype="multipart/form-data">
<input type="file" name="Filedata"/>
<input type="hidden" name="op" value="uploadpic" />
<input type="hidden" name="uid" value="1" />
<input type="hidden" name="topicid"  value="0" />
<input type="hidden" name="ac"  value="upload" />
<input type="submit"  name="submit"  value="提交"/>
</form></body></html>
```
### 请求参数
* Filedata:上传的图片
* uid: 用户id
* username: 用户名
* op: uploadpic 注意与发布图片（上传图片）区分
* topicid: XXXX(注释好像默认0,请确认）
* ac: upload

### 设置成功返回JSON(样例）
{"code":0,"data":{"pic":588,"picpath":"attachment\/201204\/20\/1_1334927560RO0m.jpg"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: pic 返回图片所在数据库的id号 picpath:为图片在服务器的URL
* msg：提示信息，与站点的提示信息一致，“操作完成了”
* action：代表操作的类型， “操作完成了”
### 注意
由于（function_image.php)makethumb中调用imagecreatefromjpeg，这个受内存限制，太大的图会导致页面提交出错，且无法
捕获错误信息，客户端对无响应做处理
是的，如果你留意了。。。它居然和发布分享是一样的！
如果你很有耐心地把所有发布听上传图片接口看完了，为了弥补你阅读上的耗时，我决定告诉你其实你完全可以把这个在前端封装成一个接口以重用


<h2 id="fbhd2">发布活动（提交）</h2>
URL格式： <站点URL>/capi/cp.php?ac=event&title=一起去华润超市shopping&starttime=2012-04-21 12:25&endtime=2012-04-22 10:25&deadline=2012-04-21 12:25&location=广州&classid=1&tagid=1&detail=坑die牛奶大降价呀<img src="attachment/201204/20/1_1334925429OD0V.jpg"/>&pic=attachment/201204/20/1_1334925429OD0V.jpg&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&eventsubmit=true&makefeed=1&topicid=0&phone_send=1&pm_send=1&puid[]=2&puid[]=3&uid=XX&username=XXX
### 请求参数
* ac:event
* eventsubmit：true
* uid: 用户id
* puid: 发送短信，消息的用户id列表
* phone_send：手机短信
* pm_send: 站内短信
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed，默认1
* detail: 活动描述(message如何包含图片，必须分二阶段，先上传图片，然后在message中插入\<img src="picpath"/\>, picpath为第一阶段返回值)
* title: 标题(注意，这里不是subject，是title）
* location：活动地点
* classid：活动分类，传分类id，默认分类（1生活聚会，2出行旅游，3电影演出，4比赛运动，5教育讲座，6其它）
* starttime：开始时间
* endtime: 结束时间
* deadline: 报名截止时间
* tagid：关联的商圈 商圈id
* tags：标签
* pic: 图片的路径，例如：attachment/201204/20/1_1334925429OD0V.jpg
* limitnum：活动人数
* gcityid：手机归属 0全部，3 广州 4东莞 5 揭阳 6佛山 7深圳
* rule_get：获得金币数
* rule_lost: 扣除金币数
* allowinvite：是否允许邀请，默认为1
* allowpic： 是否允许参与者共享活动照片，默认为1
* allowpost: 是否允许所有人发留言，默认为1
* verify： 参加活动是否需要审批 取值0或1
* allowfellow： 允许参加者携带朋友，携带朋友数会占用活动参与者名额 取值0或1
* template：报名信息

### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":0,"experience":0},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="fbhd3">发布活动（编辑）</h2>
URL格式： <站点URL>/capi/cp.php?ac=event&eventid=13&title=一起去百佳超市shopping&starttime=2012-04-21 12:25&endtime=2012-04-22 10:25&deadline=2012-04-21 12:25&location=广州&classid=1&tagid=1&detail=坑die牛奶大降价呀<img src="attachment/201204/20/1_1334925429OD0V.jpg"/>&tags=测试%20借贷%20艺术%20蜗居%20情人%20世纪光棍节%20压力&eventsubmit=true&makefeed=1&topicid=0&phone_send=1&pm_send=1&puid[]=2&puid[]=3&uid=XX&username=XXX
### 请求参数
* ac:event
* eventsubmit：true
* uid: 用户id
* puid: 发送短信，消息的用户id列表
* phone_send：手机短信
* pm_send: 站内短信
* username: 用户名
* topicid：热闹，好像默认都为0
* makefeed：是否产生feed，默认1
* detail: 活动描述(message如何包含图片，必须分二阶段，先上传图片，然后在message中插入\<img src="picpath"/\>, picpath为第一阶段返回值)
* title: 标题(注意，这里不是subject，是title）
* location：活动地点
* classid：活动分类，传分类id，默认分类（1生活聚会，2出行旅游，3电影演出，4比赛运动，5教育讲座，6其它）
* starttime：开始时间
* endtime: 结束时间
* deadline: 报名截止时间
* tagid：关联的商圈 商圈id
* tags：标签
* eventid: 活动id
###注意
修改其实和提交一样，只是多传了一个eventid

### 设置成功返回JSON(样例）
{"code":0,"data":[],"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="fbhd4">发布活动（删除）</h2>
URL格式： <站点URL>/capi/cp.php?ac=event&eventid=13&op=delete&deletesubmit=true&uid=XXX
### 请求参数
* ac:event
* eventid：需要删除的活动id
* deletesubmit：true
* op: delete
* uid: 商品所属用户id
### 设置成功返回JSON(样例）
{"code":0,"data":{"credit":6,"experience":6},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
### 设置失败返回JSON(样例）
{"code":1,"data":[],"msg":"\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u64cd\u4f5c","action":"failed_to_delete_operation"}
### 不存在活动失败返回JSON（样例）
{"code":1,"data":[],"msg":"\u6d3b\u52a8\u4e0d\u5b58\u5728\u6216\u5df2\u88ab\u5220\u9664","action":"event_does_not_exist"}

<h2 id="pl">评论</h2>
URL格式： <站点URL>/capi/cp.php?ac=comment&message=你好爱发现&id=71&idtype=discloseid&commentsubmit=true&uid=2225860&username=XXXXX
### 请求参数
* ac:comment
* id:评论对应的id号
* idtype:id代表的类型，用于区别不同的评论，取值范围
	- uid 评论空间
	- blogid 评论分享
	- goodsid 评论商品
	- couponsid: 评论优惠卷
	- photoid：评论图片
	- sid: 评论（待定）
	- pid：评论投票
	- eventid：评论活动
* uid:XXX
* username:XXXX
* message: 消息
### 设置成功返回JSON(样例）
{"code":0,"data":[],"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据，暂无内容
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"


<h2 id="xh">喜欢</h2>
URL格式： <站点URL>/capi/do.php?ac=ajax&op=feedlove&type=1&id=11&idtype=blogid&uid=XXX&username=XXXX
### 请求参数
* ac:ajax
* op:feedlove
* id:喜欢对应的id号
* idtype:id代表的类型，用于区别不同的评论，取值范围
	- uid 喜欢空间
	- blogid 喜欢分享
	- goodsid 喜欢商品
	- couponsid: 喜欢优惠卷
	- photoid：喜欢图片
	- sid: 喜欢（待定）
	- pid：喜欢投票
	- eventid：喜欢活动
* uid:XXX
* username:XXXX
### 设置成功返回JSON(样例）
{"code":0,"data":[],"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据，暂无内容
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"


<h2 id="zf1">转发（分享）</h2>
URL格式： <站点URL>/capi/cp.php?ac=reblog&blogid=1&makefeed=1&uid=XXX&username=XXXXX
### 请求参数
* ac:reblog
* blogid:要转发分享的id
* uid:操作的用户id
* username:操作的用户名
* makefeed:产生feed 1产生，0不产生

### 设置成功返回JSON(样例）
{"code":0,"data":{"subject":"\u592e\u884c\u65b0\u89c4\u6548\u679c\u663e\u73b0 \u94f6\u884c\u538b\u529b\u9661\u589e\u501f\u8d37\u96be\u4e0a\u52a0\u96be\uff08\u6d4b\u8bd5\uff09","classid":null,"cityid":"7","replynum":null,"lat":"23.1405830000","lng":"113.3455640000","checked":null,"friend":0,"password":"","noreply":0,"picflag":0,"pic":"attachment\/201201\/16\/1_1326679970Hk2I.jpg","topicid":0,"uid":"1","username":"aifaxian","dateline":"1326679970","blogid":29},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据，转发的分享内容
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="zf2">转发（优惠券）</h2>
URL格式： <站点URL>/capi/cp.php?ac=recoupons&couponsid=1&makefeed=1&uid=XXX&username=XXXXX
### 请求参数
* ac:recoupons
* couponsid:要转发优惠券的id
* uid:操作的用户id
* username:操作的用户名
* makefeed: 产生feed,1产生，0不产生
### 设置成功返回JSON(样例）
{"code":0,"data":{"subject":"\u592e\u884c\u65b0\u89c4\u6548\u679c\u663e\u73b0 \u94f6\u884c\u538b\u529b\u9661\u589e\u501f\u8d37\u96be\u4e0a\u52a0\u96be","oprice":"1200.00","bprice":"1000.00","obprice":"1.20","starttime":"1329395760","endtime":"1330518960","classid":null,"cityid":null,"replynum":"0","lat":"0.0000000000","lng":"0.0000000000","checked":null,"friend":1,"password":"","noreply":0,"picflag":0,"pic":"attachment\/201202\/15\/1_1329309440MJJ4.jpg","topicid":0,"uid":"4","username":"aifaxian","dateline":"1329309453","couponsid":10},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据，转发的分享内容
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="zf3">转发（爆料）</h2>
URL格式： <站点URL>/capi/cp.php?ac=redisclose&discloseid=1&makefeed=1&disclosesubmit=true&uid=XXX&username=XXX
### 请求参数
* ac:redisclose
* discloseid:要转发爆料的id
* disclosesubmit:true
* uid:操作的用户id
* username:操作的用户名
* makefeed: 产生feed,1产生，0不产生
### 设置成功返回JSON(样例）
{"code":0,"data":{"subject":"23423423","classid":null,"replynum":"0","friend":0,"cityid":null,"lat":"23.140583000","lng":"113.345564000","checked":"0","password":"","noreply":0,"picflag":0,"pic":"","topicid":0,"uid":"4","username":"aifaxian","dateline":"1334847214","discloseid":6},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据，转发的分享内容
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="zf4">转发（活动）</h2>
URL格式： <站点URL>/capi/cp.php?ac=reevent&eventid=1&makefeed=1&eventsubmit=true&uid=XXX&username=XXX
### 请求参数
* ac:reevent
* eventid:要转发爆料的id
* eventsubmit:true
* uid:操作的用户id
* username:操作的用户名
* makefeed: 产生feed,1产生，0不产生
### 设置成功返回JSON(样例）
{"code":0,"data":{"eventid":"17","topicid":"0","uid":"4","username":"aifaxian","dateline":"1335027317","title":"\u6d4b\u8bd5\u53d1\u5e03\u5546\u54c1\uff0c\u8d27\u771f\uff0c\u4e0d\u6ee1\u610f\u53ef\u9000\u8d27","classid":"2","province":"\u4e0a\u6d77","city":"\u9ec4\u6d66","location":"\u4e3a\u5bf9\u65b9\u5c31\u770b\u770b\u4f60","poster":"","thumb":"0","remote":"0","deadline":"1330189200","starttime":"1330275600","endtime":"1330376400","public":"0","membernum":"1","follownum":"0","viewnum":"0","grade":"2","recommendtime":"0","tagid":"0","picnum":"0","threadnum":"0","cityid":"0","updatetime":"1335027317","lat":"0.0000000000","lng":"0.0000000000","recommendnum":"0","checked":"","replynum":"","detail":"\u8def\u7ebf\u8bf4\u660e:
\u8d39\u7528\u8bf4\u660e:
\u88c5\u5907\u8981\u6c42:
\u4ea4\u901a\u5de5\u5177:
\u96c6\u5408\u5730\u70b9:
\u8054\u7cfb\u65b9\u5f0f:
\u6ce8\u610f\u4e8b\u9879:
","template":"","limitnum":"0","verify":"0","allowpic":"1","allowpost":"1","allowinvite":"1","allowfellow":"0","hot":"1","hotuser":"4","love":"0","loveuser":"","tag":"","fid":"0","fuid":"1","fusername":"aifaxian","reeventnum":"1","topindex":"0","tuid":"","gcityid":"","rule_get":"","rule_lost":""},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据，转发的活动内容
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="zf5">转发（商品）</h2>
URL格式： <站点URL>/capi/cp.php?ac=regoods&goodsid=1&makefeed=1&goodssubmit=true&uid=XXX&username=XXX
### 请求参数
* ac:regoods
* goodsid:要转发商品的id
* goodssubmit:true
* uid:操作的用户id
* username:操作的用户名
* makefeed: 产生feed,1产生，0不产生
### 设置成功返回JSON(样例)
{"code":0,"data":{"subject":"\u592e\u884c\u65b0\u89c4\u6548\u679c\u663e\u73b0 \u94f6\u884c\u538b\u529b\u9661\u589e\u501f\u8d37\u96be\u4e0a\u52a0\u96be","price":"0","classid":null,"replynum":"0","cityid":null,"lat":"0.0000000000","lng":"0.0000000000","checked":null,"friend":1,"password":"","noreply":0,"picflag":0,"pic":"attachment\/201202\/13\/1_1329139114Pv8p.jpg","topicid":0,"uid":"4","username":"aifaxian","dateline":"1329141778","goodsid":19},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据，转发的活动内容
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="zf6">转发（投票）</h2>
URL格式： <站点URL>/capi/ac=repoll&pid=1&makefeed=1&pollsubmit=true&uid=XXX&username=XXX
### 请求参数
* ac:repoll
* pid:要转发投票的id
* pollsubmit:true
* uid:操作的用户id
* username:操作的用户名
* makefeed: 产生feed,1产生，0不产生
### 设置成功返回JSON(样例)
{"code":0,"data":{"pid":"11","notify":"0","message":"","summary":"","option":"","invite":"","hotuser":"4","fid":"","fuid":"1","fusername":"aifaxian","hot":"0","love":"","loveuser":"","repollnum":"1","topicid":"0","uid":"4","username":"aifaxian","subject":"123","voternum":"0","replynum":"0","multiple":"0","maxchoice":"1","sex":"0","noreply":"0","credit":"0","percredit":"0","expiration":"1335542399","lastvote":"0","dateline":"1335028727","friend":"0","cityid":null,"lat":null,"lng":null,"checked":"0"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据，转发的活动内容
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="zf7">转发（图片）</h2>
URL格式： <站点URL>/capi/cp.php?ac=rephoto&photoid=1&makefeed=1&photosubmit=true&uid=XXXX&username=XXXX
### 请求参数
* ac:rephoto
* photoid:要转发投票的id
* photosubmit:true
* uid:操作的用户id
* username:操作的用户名
* makefeed: 产生feed,1产生，0不产生
### 设置成功返回JSON(样例)
{"code":0,"data":{"subject":"","classid":null,"replynum":"0","cityid":null,"lat":"0.0000000000","lng":"0.0000000000","checked":null,"friend":0,"password":"","picflag":"0","pic":"","picid":"","noreply":0,"topicid":0,"uid":"4","username":"aifaxian","dateline":"1329819571","photoid":35},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据，转发的活动内容
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="hdcy">活动参与</h2>
URL格式：<站点URL>/capi/cp.php?ac=event&eventid=1&op=join&makefeed=1&uid=xxx&username=xxx&joinsubmit=true
## 请求参数
* ac:event
* eventid:要参与的活动id
* joinsubmit:true
* uid:操作的用户id
* username:操作的用户名
* op:join
* makefeed: 产生feed,1产生，0不产生
### 设置成功返回JSON(样例)
{"code":0,"data":{"eventid":"1","topicid":"0","uid":"1","username":"aifaxian","dateline":"1329231228","title":"\u6d4b\u8bd5\u53d1\u5e03\u5546\u54c1\uff0c\u8d27\u771f\uff0c\u4e0d\u6ee1\u610f\u53ef\u9000\u8d27","classid":"2","province":"\u4e0a\u6d77","city":"\u9ec4\u6d66","location":"\u4e3a\u5bf9\u65b9\u5c31\u770b\u770b\u4f60","poster":"","thumb":"0","remote":"0","deadline":"1330189200","starttime":"1330275600","endtime":"1330376400","public":"1","membernum":"1","follownum":"0","viewnum":"0","grade":"2","recommendtime":"1331828032","tagid":"0","picnum":"0","threadnum":"0","cityid":"0","updatetime":"1329231228","lat":"0.0000000000","lng":"0.0000000000","recommendnum":"29","checked":null,"replynum":null,"detail":"\u8def\u7ebf\u8bf4\u660e:
\u8d39\u7528\u8bf4\u660e:
\u88c5\u5907\u8981\u6c42:
\u4ea4\u901a\u5de5\u5177:
\u96c6\u5408\u5730\u70b9:
\u8054\u7cfb\u65b9\u5f0f:
\u6ce8\u610f\u4e8b\u9879:
","template":"","limitnum":"0","verify":"0","allowpic":"1","allowpost":"1","allowinvite":"1","allowfellow":"0","hot":"1","hotuser":"4","love":"0","loveuser":"","tag":"\u7ed8\u753b \u6587\u827a","fid":"0","fuid":"0","fusername":"","reeventnum":"1","topindex":"9","tuid":"","gcityid":null,"rule_get":null,"rule_lost":null},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据，活动内容
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="hdcj">活动推荐</h2>
URL格式：<站点URL>/capi/do.php?ac=ajax&id=1&op=addevent&uid=XXX
## 请求参数
* ac:ajax
* id:活动id
* op:addevent
* uid:推荐的用户id

### 设置成功返回JSON(样例)
{"code":0,"data":{"recommendnum":31,"eventid":"1"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据
	- recommendnum: 当前推荐数
	- eventid: 活动id
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="gz">关注</h2>
社交操作
URL格式： <站点URL>/capi/do.php?ac=ajax&op=addfriend&uid=15&suid=16
### 请求参数
* ac:ajax
* op:addfriend
* uid: 要加的好友id
* suid: 本人用户id

### 获取返回JSON(样例）
{"code":0,"data":[],"msg":"进行的操作完成了","action":"do_success"}
{"code":1,"data":[],"msg":"do_failed","action":"do_failed"}
* code: 0，成功；1，失败
* data: 包括的返回数据，这里无
* msg：提示信息，与站点的提示信息一致
* action：代表操作的类型 do_success代表成功， do_failed代表失败
atfaxian/capi/cp.php?ac=coupons&idcard=440281198407150412&couponsid=151&op=download&phone=13751341409&name=丘文峰&income=1000&member=1&sex=1&residence=广州&downloadsubmit=true&uid=41&username=13751341409
http://atfaxian.com/capi/cp.php?ac=coupons&op=checkdownload&couponsid=151&uid=41&ischecked=0&istrue=1&isexchange=0&oldisexchange=0&checksubmit=true&suid=211&susername=18620050490
<h2 id="xzyhq">下载优惠券</h2>
URL格式： <站点URL>/capi/cp.php?ac=coupons&idcard=xxxxxxxxxxxxxxxxxxx&couponsid=160&op=download&phone=XXXXXXXXX&name=XXX&income=1000&member=1&sex=1&residence=广州&downloadsubmit=true&uid=XXX&username=XXX
请求参数
* ac:coupons
* couponsid:优惠券id
* op:download
* sex:性别，1男0女
* residence:居住地
* income: 收入
* member：家庭人数，取值范围1-8
* name: 姓名
* phone：电话
* downloadsubmit：true
* uid: 用户id
* username: 用户名
* idcard:身份证号

### 获取返回JSON(样例）
{"code":0,"data":[],"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据,暂无返回数据
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="yzyhq">验证优惠券</h2>
URL格式： <站点URL>/capi/cp.php?ac=coupons&op=checkdownload&couponsid=160&uid=41&ischecked=1&istrue=1&isexchange=0&oldisexchange=0&checksubmit=true&suid=XXX
请求参数
* ac:coupons
* op:checkdownload
* couponsid:优惠券id
* uid:被验证的用户id
* ischecked: 通过审核：1通过0不通过
* istrue: 确认有效: 1有效0无效
* isexchange: 确认兑付 1兑付0不兑付
* oldisexchange：是否减少优惠券 好像默认为0（请求确认）
* checksubmit：true
* suid:优惠券作者用户id，当仅且当其为优惠券作者时才能执行审核
### 获取返回JSON(样例）
{"code":0,"data":{"couponsid":"221","uid":"11","username":"13535597218","name":"","phone":"","idcard":"0","sex":"1","residence":"","income":"0.00","member":"0","istrue":"0","ischecked":"1","isexchange":"0","dateline":"1335371983","seccode":"111335371983","avatar":"http:\/\/center.atfaxian.com\/data\/avatar\/000\/00\/00\/11_avatar_small.jpg"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据,验证成员信息，avatar代表小头像，seccode代表验证码（当前仅当ischecked时有效）
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="bqsz">标签设置</h2>
URL格式： <站点URL>/capi/space.php?do=guid&hobbitssubmit=true&uid=15&tags=摄影 美食 精品 百货 美容 电子
### 请求参数
* do:guid
* hobbitssubmit：true
* uid: 用户id
* tags：用户设置的标签，空格隔开，后台Update操作，可以多次提交
### 获取返回JSON(样例）
{"code":0,"data":[],"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据,暂无返回数据
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
### 说明
其实和兴趣爱好设置一样

<h2 id="pf">评分（分享、活动、商品、优惠券、投票、爆料、图片）</h2>
URL格式：<站点URL>/capi/do.php?ac=ajax&op=playstar&id=1&idtype=blogid&oldnum=0&num=4&uid=XXXX&username=XXXX
### 请求参数
* ac:playstar
* id:评分对应的id号
* idtype:指明id号所属，取值范围：
	- blogid 评分分享
	- goodsid 评分商品
	- couponsid: 评分优惠卷
	- photoid：评分图片
	- pid：评分投票
	- eventid：评论活动
* oldnum: 原分数
* num: 打分的分值
	- 计算公式 newnum= (oldnum + num*20)/2;若oldnum置空， 则newnum = num*20
	- newnum为得分，后台自动按提交的oldnum，与num值计算
* uid: 打分的用户id
* username: 打分的用户名
### 获取返回JSON(样例）
{"code":0,"data":{"newnum":80},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据,newnum为最终分值
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 class="fdxx">发短消息</h2>
URL格式：<站点URL>/capi/cp.php?ac=pm&op=send&pmsubmit=true&touid=0&pmid=0&message=你好爱发现&tusername=XXXX(电话）&uid=XXX&username=XXXX
### 请求参数
* ac: pm
* op: send
* pmsubmit:true
* tusername: 逗号分隔的用户名列表
* message: 短消息内容
* touid: 接收方用户id，如果此值不为0，则tusername无效
* pmid: 必须为0
### 获取返回JSON(样例）
{"code":0,"data":[],"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据,newnum为最终分值
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"
### 短时间内发布短消息拒绝(样例）
"code":1,"data":[],"msg":"\u4e24\u6b21\u53d1\u9001\u77ed\u6d88\u606f\u592a\u5feb\uff0c\u8bf7\u7a0d\u7b49\u4e00\u4e0b\u518d\u53d1\u9001","action":"message_can_not_send2"}

<h2 class="dfhd">确定兑付活动</h2>
URL格式：<站点URL>/capi/cp.php?ac=event&op=exchange&eventid=648&uid=XXX&exchangesubmit=true
### 请求参数
* ac:event
* op:exchange
* exchangesubmit:true
* eventid:活动id
* uid:兑付给用户，使用该用户id
### 获取返回JSON(样例）
{"code":0,"data":{"experience":0},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的数据,experience兑付的经验值
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 class="dl">登陆</h2>
URL格式：<站点URL>/capi/do2.php?ac=loginmobile&username=XXXXXX&password=XXXXXX
### 返回字段
你懂的。。。。

<h2 class="xgnc">修改昵称</h2>
URL格式：<站点URL>/capi/cp.php?ac=profile&uid=XXXXXX&name=XXXXXX
### 请求参数
* uid: 用户的id
* name: 要设置的昵称
### 获取返回JSON(样例）
{"code":0,"data":[],"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 获取返回JSON(失败样例）
{"code":1,"data":[],"msg":"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u6307\u5b9a\u7684\u7528\u6237\u7a7a\u95f4\u4e0d\u5b58\u5728\u3002","action":"space_does_not_exist"}

<h2 class="yq">邀请</h2>
URL格式：<站点URL>/capi/cp.php?ac=invite&smsinvite=true&uid=X&username=XXXXX&code=X786XX&name=雷生&phonenum=XXXXXXXXX
### 请求参数
* ac:invite
* smsinvite:true
* uid:发邀请的用户id
* username:发邀请的用户名(真名，非电话号码）
* code:随机的6位密码
* name：被邀请人的姓名
* phonenum：被邀请人的电话号码，同时也作为平台的注册号

### 获取返回JSON(样例）
{"code":0,"data":[],"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 获取返回JSON(失败样例，邀请的人已注册）
{"code":1,"data":[],"msg":"\u624b\u673a\u53f7\u7801\u5df2\u7ecf\u5b58\u5728","action":"user_name_already_exists"}

<h2 id="tp">投票</h2>
URL格式：<站点URL>/capi/cp.php?ac=poll&uid=XXX&username=XXX&pid=26&option[]=97&votesubmit=true&op=vote
### 请求参数
* ac:poll
* votesubmit:true
* op:vote
* uid:投票的用户id
* username:投票的用户名
* option[]：投票的选项，对应polloption表的option
### 获取返回JSON(样例）
{"code":0,"data":{"pid":"26","notify":"0","message":"","summary":"","option":"a:2:{i:0;s:12:\"\u5df4\u585e\u7f57\u90a3\";i:1;s:6:\"\u753b\u5bb6\";}","invite":"","hotuser":"","fuid":"0","fusername":"","fid":"26","hot":"0","love":"0","loveuser":"","tag":"","repollnum":"0","topicid":"0","uid":"2225242","username":"15017547294","subject":"\u5927\u6218","voternum":"0","replynum":"0","multiple":"0","maxchoice":"1","sex":"0","noreply":"0","credit":0,"percredit":0,"expiration":"0","lastvote":"0","dateline":"1335332363","friend":"0","cityid":"3","lat":"23.1289942815","lng":"113.2868957520","checked":"0","click_1":"0"},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 返回的投票的数据,credit投票的积分增长
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="sctp">删除投票</h2>
URL格式： <站点URL>/capi/cp.php?ac=poll&op=delete&deletesubmit=true&pid=XXX&uid=XXX&username=XXXX
### 请求参数
* ac: doing
* op: poll
* deletesubmit: true
* pid: 投票id
* uid: 操作的用户id
* username: 用户名
### 发布成功返回JSON(样例）
{"code":0,"data":{"credit":2,"experience":2},"msg":"\u8fdb\u884c\u7684\u64cd\u4f5c\u5b8c\u6210\u4e86","action":"do_success"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- credit：减少的积分
	- experience：减少的经验
* msg：提示信息，与站点的提示信息一致，"操作完成了"
* action：代表操作的类型， "操作完成了"

<h2 id="zhmm1">找回密码（获取验证码）</h2>
URL格式：<站点URL>/capi/do.php?ac=lostpasswd&lostpwsubmit=true&username=XXXX
### 请求参数
* ac:lostpasswd
* lostpwsubmit:true
* username:XXXXX
### 获取返回JSON(样例）
{"code":0,"data":{"uid":"9","username":"13751341409","seccode":"OEz2ak"},"msg":"\u53d6\u56de\u5bc6\u7801\u7684\u65b9\u6cd5\u5df2\u7ecf\u901a\u8fc7 \u77ed\u4fe1 \u53d1\u9001\u5230\u60a8\u7684\u624b\u673a\u4e2d\uff0c
\u8bf7\u5728 3 \u5929\u4e4b\u5185\u4fee\u6539\u60a8\u7684\u5bc6\u7801\u3002","action":"getpasswd_send_succeed"}
### 返回字段
* code: 0，成功；1，失败
* data: 
	- uid: 返回的用户id(uid)
	- username：用户名（手机号）
	- seccode 验证码
* msg：提示信息，与站点的提示信息一致，"取回密码的方法已经通过 短信 发送到您的手机中，<br />请在 3 天之内修改您的密码。"
* action：代表操作的类型， "getpasswd_send_succeed"


<h2 id="zhmm2">找回密码（重置）</h2>
URL格式：<站点URL>/capi/do.php?ac=lostpasswd&resetsubmit=true&uid=3&newpasswd1=XXXX&newpasswd2=XXXX
### 请求参数
* ac:lostpasswd
* resetsubmit：true
* uid:需要重置的用户id（在获取验证码时有返回）
* newpasswd1:第一次输入的密码
* newpasswd2:第二次输入的密码
* 说明：是的，你不需要验证两次输入的密码是否正确，这件事神奇地给第三方完成了
### 获取返回JSON(样例）
{"code":0,"data":[],"msg":"\u60a8\u7684\u5bc6\u7801\u5df2\u91cd\u65b0\u8bbe\u7f6e\uff0c\u8bf7\u4f7f\u7528\u65b0\u5bc6\u7801\u767b\u5f55\u3002","action":"getpasswd_succeed"}
### 返回字段
* code: 0，成功；1，失败
* data: 没有返回值
* msg：提示信息，与站点的提示信息一致，"您的密码已重新设置，请使用新密码登录。"
* action：代表操作的类型， "getpasswd_succeed"

<h2 id="ss">搜索</h2>
操作
### 请求参数
* key_words
(余下同列表请求参数)
    
### 返回字段
(同列表返回字段)
