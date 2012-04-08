爱发现数据接口需求
=========
root url: http://203.88.192.235:83/ 

版本：0.1  
作者：[何世友](mailto:ernest.he2009@gmail.com)
***
索引
--
*   [动态列表(全部，好友，附近)](#dtlb)
*   [标签列表](#bqlb)
*   [商家列表](#sjlb)
*   [推荐商品列表](#tjsplb)
*   [优惠券列表](#yhqlb)
*   [推荐商家列表](#tjsjlb)
*   [推荐标签](#tjbq)
*   [活动列表](#hdlb)
*   [动态/商品/优惠券/活动详情] (#xq)
*   [用户详情](#yhxq)
*   [私信列表](#sxlb)
*   [评论列表](#pllb)
*   (not this time)[留言列表](#lylb)
*   [通知系统](#tzxt)

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
/feed?page=1&count=10&uid=13   
+请注意，uid必传+

* uid
* page 默认为1
* count 默认为10

#### 返回字段  
* code (0 for success, 1 for error, msg for error message)
* avatar_err_path (use this url as avatar if error while loading avatar)
* feeds
    * idtype (eventid, blogid, goodsid, couponsid, pid, discloseid, photoid) 
    * image_[1,2,3,4]_link (1 - 4 images in each feed)
    * image_[1,2,3,4]..(1 - 4 images in each feed)
    * feedid
    * id (原文章id，查询此动态详情，请使用id + idtype)
    * uid (user who post this id)
    * groupid (3 标识vip)
    * username (用户名)
    * name (用户昵称，当用户昵称为空时，使用username，并将其中间四位号码改为*号)
    * fid (转载自原文章id)
    * fuid (转载自作者uid)
    * fusername (转载自作者用户名)
    * subject (标题)
    * message (feed content)
    * title (忽略此字段)
    * dateline
    * hot
    * lng
    * lat
    * hot (热度)
    * replynum （回复次数）
    * reblognum (转载次数)
    * love (喜欢、收藏次数)
    * isloved (true of false 标识是否已喜欢、收藏)
    * avatar (user avatar)

    TODO: level color definition

#### 返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "feeds": [{"idtype": "blogid", "image_2_link": "", "love": 0, "uid": 13, "image_3_link": "", "feedid": 3942, "tag": "a:2:{i:64;s:6:\"\u5a31\u4e50\";i:65;s:6:\"\u767e\u8d27\";}", "fuid": 376, "message": "\u7b2c", "isloved": false, "id": 588, "subject": "\u7b2c", "image_1": "http://atfaxian.com/attachment/201204/1/376_1333247843cF0K.jpg", "image_3": "", "image_2": "", "checked": 0, "image_4": "", "title": "\u53d1\u8868\u4e86", "dateline": 1333892242, "cityid": 3, "hot": 2, "click_1": 0, "location": "", "fid": 495, "groupid": 3, "friend": 0, "username": "15013296747", "starttime": 0, "price": "0.00", "oprice": "0.00", "obprice": "0.00", "replynum": 0, "target_ids": "", "lat": "23.1289940000", "loveuser": "1", "endtime": 0, "icon": "", "reblognum": 0, "name": "\u554a\u5b9d", "image_4_link": "", "fusername": "13682239450", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/13_avatar_big.jpg", "lng": "113.2868950000", "appid": 1, "deadline": 0, "bprice": "0.00", "isend": 1, "image_1_link": ""},], "code": 0}

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
/feed?lat=101.999&lng=-122.43&page=1&count=10&uid=13

* uid
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
/businesslist?distance=100&lat=23&lng=113&page=1&count=10

* lat
* lng
* distance (0,0.1,0.3,0.5,0.8,1,2,3: 全部，0.1~3km), 若无法获取位置服务，则直接传distance为0即可；此时distance字段不会传回客户端，请客户端做处理
* tagid (0：全部；一级分类底下的二级分类，有二级则直接传二级)
* uid (必传)
* page
* count

### 返回字段
* avatar_err_path
* code
* business
    - avatar
    - uid
    - username,name,namestatus ( username for login, name for nickname, namestatus: 0 for no nickname, 1 for have;)
    - lng, lat
    - distance (unit: m)
    - address
    - business ( name of shop)
    - businessfield (description for business)
    - viewnum
    - hot (热度)
    - feedfriendnum (粉丝数量)
    - 暂时没有评价字段

####返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "business": [{"username": "15013296747", "distance": 32705.061187827701, "referrals": 0, "uid": 13, "business": "", "friendnum": 1, "businessfield": "", "viewnum": 215, "groupid": 3, "feedfriendnum": 13, "hot": 228, "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/13_avatar_big.jpg", "address": "", "lat": "23.1289940000", "lng": "113.2868950000", "namestatus": 1, "name": "\u554a\u5b9d"}]}

<h2 id="tjsplb">推荐商品列表</h2>
按照地理距离进行排序，获取用户GPS信息，用户选择距离范围，大分类、小分类

### 请求参数
/goodslist?distance=1&lat=23&lng=113&tagid=0&page=1&count=10&uid=13

* uid （务必传uid）
* lat
* lng
* distance (0,0.1,0.3,0.5,0.8,1,2,3: 全部，0.1~3km), 若无法获取位置服务，则直接传distance为0即可；此时distance字段不会传回客户端，请客户端做处理
* tagid (0：全部；一级分类底下的二级分类，有二级则直接传二级)
* uid
* page
* count

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
    - love （喜欢、收藏次数）
    - loveruser
    - isloved （是否已经喜欢、收藏）
    - hot
    - reblognum
    - replynum
    - fuid
    - fusername
    - uid
    - avatar
    - groupid (3 for vip)
    - username
    - subject
    - message
    - price （价格）
    - lat, lng
    - dateline

#### 返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "goods": [{"idtype": "goodsid", "image_2_link": "", "p_tagid": 0, "image_3_link": "", "feedid": 2605, "tag": "a:2:{i:301;s:6:\"\u76d8\u5939\";i:302;s:9:\"\u51b0\u7bb1\u8d34\";}", "fuid": 831, "loveuser": "1", "message": "\u5355\u4ef7\uff1a22\u5143<br>", "id": 305, "uid": 1, "image_1": "attachment/201203/10/19_1331359149QL94.jpg", "image_3": "", "image_2": "", "target_ids": "", "image_4": "", "title": "\u53d1\u5e03\u4e86", "dateline": 1332674478, "isend": 1, "cityid": 3, "hot": 7, "fid": 30, "subject": "\u5fae\u6ce2\u7089\u4e13\u7528\u76d8\u5939\\\u53a8\u623f\u7b80\u4fbf\u9694\u70ed\u624b\u5957 &amp;\u51b0\u7bb1\u8d34 3\u53ea", "friend": 0, "username": "aifaxian", "starttime": 0, "distance": 32705.061187827701, "price": "22.00", "oprice": "0.00", "obprice": "0.00", "replynum": 2, "lat": "23.1289940000", "lng": "113.2868950000", "endtime": 0, "icon": "", "reblognum": 0, "image_4_link": "", "fusername": "13560937654", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/01_avatar_big.jpg", "tagname": "\u76d8\u5939", "appid": 1, "deadline": 0, "bprice": "0.00", "tagid": 301, "image_1_link": ""}]}

<h2 id="yhqlb">优惠券列表</h2>
按照地理距离进行排序，获取用户GPS信息，用户选择距离范围，大分类、小分类
### 请求参数
/couponlist?distance=1&lat=23&lng=113&tagid=0&page=1&count=10&uid=13      
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
    - title (标题)
    - cover （封面）
    - location (地点)
    - starttime, endtime （开始结束时间）
    - membernum （参与人数）
    - love （收藏人数）
    - isloved （是否已收藏）
    - TODO：是否已参加，是否已推荐
#### 返回json范例
{"code": 0, "event": [{"eventid": 34, "endtime": 1334671200, "love": 1, "title": "\u97e9\u56fd5D\u52a8\u611f\u4f53\u9a8c\u9986   6\u6298\u4f18\u60e0", "cover": "attachment/201203/16/209_13318884491gt5.jpg", "location": "\u5e7f\u5dde\u5730\u738b\u5e7f\u573a", "starttime": 1331949600, "membernum": 1, "loveuser": "247", "isloved": false}]}

<h2 id="xq">动态/商品/优惠券/活动详情</h2>
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
* details
    - avatar
    - uid
    - groupid (groupid为3的标识vip)
    - username
    - name
    - fuid
    - fusername
    - love (收藏数量)
    - isloved (true or false 标识是否已喜欢（收藏）)
    - click_1 (评分字段)
    - reblognum (转载次数)
    - replynum (回复条数)
    - id
    - fid
    - classid
    - subject
    - message
    - dateline

* like_list[{uid,uimg}...]
* share_list[{uid,uimg}...]
* comment_list[{uid,uimg,uname,cid,ccontent}...] 

### 返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "details": {"classid": 0, "love": 0, "uid": 14, "hotuser": "", "magiccall": 0, "pic": "", "related": "", "viewnum": 2, "tag": "", "fuid": 0, "message": "", "isloved": false, "lng": "0E-10", "subject": "\u534e\u590f\u5927\u9152\u5e97\u6843\u6e90\u5385", "topicid": 0, "dateline": 1330576043, "relatedtime": 0, "cityid": 0, "click_3": 0, "hot": 0, "click_1": 0, "click_4": 0, "click_5": 0, "click_2": 0, "groupid": 6, "friend": 0, "username": "13826025981", "fid": 30, "picflag": 0, "reblognum": 0, "replynum": 0, "lat": "0E-10", "loveuser": "", "password": "", "magiccolor": 0, "magicpaper": 0, "noreply": 0, "name": "", "fusername": "", "postip": "59.42.108.14", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/14_avatar_big.jpg", "target_ids": "", "blogid": 30}}

<h2 id="yhxq">用户详情</h2>
用户详细信息
### 请求参数
/userdetails?uid=10

* uid  (uid  为要查看用户id)
* user_id (若uid==user_id，则视为查看自身详情)

### 返回字段
* avatar_err_path
* code
* details
    - avatar
    - uid
    - username,name,namestatus ( username for login, name for nickname, namestatus: 0 for no nickname, 1 for have;)
    - groupid ( 3 for business)
    - lng, lat
    - distance (unit: m)
    - address
    - business ( name of shop)
    - businessfield (description for business)
    - domain ( domain for user space)
    - social_part:
        + friendnum
        + viewnum
        + notenum (number of notice)
        + eventinvitenum (event invite num)
        + mtaginvitenum ( group invited num)
        + myinvitenum ( invite num)
        + pokenum ( number of say hi)
        + doingnum ( number of mood)
        + blognum ( number of share)
        + photonum (number of photo)
        + goodsnum
        + couponsnum
        + threadnum ( number of thread)
        + pullnum
        + disclosenum
        + eventnum
        + sharenum ( what the hell?)
    - newpm (0 for no new private message; 1 for have) 
    - newemail (new email)
    - email
    - mobile ( phone number)
    - qq
    - msn
    - note, spacenote ( the latest personal note and the latest space status)
    - tag (taglist)
    - referrals (seems like number of user liked by)
    - lovenum ( number of articles loved by user)
    - feedfriendnum ( followers number)

####  返回json范例
{"code": 0, "details": {"addfriend": 0, "businessfield": "", "myinvitenum": 0, "eventnum": 2, "goodsnum": 0, "dateline": 1330507023, "theme": "", "msnrobot": "", "residecity": "\u5e7f\u5dde", "addsize": 0, "regip": "113.111.122.40", "lastlogin": 1332755232, "spacenote": "", "qq": "", "resideprovince": "", "name": "Lafere", "marry": 2, "groupid": 6, "birthmonth": 3, "newpm": 0, "mtaginvitenum": 0, "msncstatus": 0, "domain": "", "albumnum": 3, "idcard": "", "sex": 2, "lovenum": 0, "lng": "113.2868950000", "attachsize": 756165, "disclosenum": 0, "mood": 0, "feedfriendnum": 2, "tagid": 0, "authstr": "", "lastpost": 1332752295, "email": "13751894491@atfaxian.com", "avatar": 0, "business": "", "sendmail": "", "address": "", "updatetime": 1332752295, "couponsnum": 0, "experience": 156, "doingnum": 0, "credit": 2286, "nocss": 0, "threadnum": 0, "menunum": 0, "note": "", "pokenum": 0, "videopic": "", "lastsend": 0, "newemail": "", "photonum": 0, "privacy": "", "eventinvitenum": 0, "pollnum": 0, "msn": "", "magicstar": 0, "friend": "", "username": "13751894491", "blognum": 5, "videostatus": 0, "lastsearch": 0, "flag": 0, "referrals": 0, "addfriendnum": 0, "uid": 10, "ip": 113111057, "residemall": "\u5730\u738b\u5e7f\u573a", "birthyear": 2012, "viewnum": 33, "tag": ["\u6444\u5f71", "\u7f8e\u98df", "\u7cbe\u54c1", "\u7535\u5b50", "\u5176\u5b83"], "birthprovince": "", "sharenum": 0, "magicexpire": 0, "cityid": 0, "hot": 33, "birthcity": "", "timeoffset": "", "css": "", "notenum": 0, "friendnum": 0, "birthday": 23, "blood": "", "feedfriend": "734,12", "lat": "23.1289940000", "mobile": "", "emailcheck": 0, "namestatus": 1}}


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

<h2 id="sjtjsz">关注商家设置</h2>
设置操作
### 请求参数
* shop_ids [id,id,id...]
* uid

### 返回字段
* uid
* status (成功与否)


<h2 id="xqahsz">兴趣爱好设置</h2>
设置操作
### 请求参数
/tagsettings?uid=12&tag=6&tag=... [tag  可多个]
* uid
* tag [id,id...]

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
