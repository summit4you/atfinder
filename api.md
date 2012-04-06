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
/feed?page=1&count=10 

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
    * id (original content id)
    * uid (user who post this id)
    * username (user's name)
    * fid (original content share from id)
    * fuid (share from user)
    * fusername (share from user's name)
    * subject (subject of feed)
    * message (feed content)
    * title (ignore this now)
    * dateline
    * hot
    * lng
    * lat
    * replynum
    * reblognum (share num)
    * avatar (user avatar)

    TODO: lovenum
    TODO: name
    TODO: level color definition

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
/businesslist?distance=100&lat=23&lng=113&page=1&count=10

* lat
* lng
* distance (0,0.1,0.3,0.5,0.8,1,2,3: 全部，0.1~3km), 若无法获取位置服务，则直接传distance为0即可；此时distance字段不会传回客户端，请客户端做处理
* tagid (0：全部；一级分类底下的二级分类，有二级则直接传二级)
* uid
* page
* count

### 返回字段
* avatar_err_path
* code
* business
    - avatar
    - uid
    - username,name,namestatus ( username for login, name for nickname, namestatus: 0 for no nickname, 1 for have;)
    - groupid ( 3 for business)
    - lng, lat
    - distance (unit: m)
    - address
    - business ( name of shop)
    - businessfield (description for business)
    - viewnum
    - referrals (??seems like number of user liked by)
    - feedfriendnum ( followers number)

####返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "business": [{"username": "15013296747", "distance": 32705.0611878277, "referrals": 0, "uid": 13, "business": "", "businessfield": "", "groupid": 3, "viewnum": 178, "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/13_avatar_big.jpg", "address": "", "lat": "23.1289940000", "lng": "113.2868950000", "namestatus": 1, "name": "\u554a\u5b9d"}]}

<h2 id="tjsplb">推荐商品列表</h2>
按照地理距离进行排序，获取用户GPS信息，用户选择距离范围，大分类、小分类

### 请求参数
/goodslist?distance=1&lat=23&lng=113&tagid=0&page=1&count=10

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
    - loveruser
    - hot
    - reblognum
    - replynum
    - fuid
    - fusername
    - uid
    - avatar
    - username
    - subject
    - message
    - lat, lng
    - dateline

#### 返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "goods": [{"idtype": "goodsid", "image_2_link": "", "p_tagid": 0, "image_3_link": "", "feedid": 2605, "tag": "a:2:{i:301;s:6:\"\u76d8\u5939\";i:302;s:9:\"\u51b0\u7bb1\u8d34\";}", "fuid": 831, "loveuser": "1", "message": "\u5355\u4ef7\uff1a22\u5143<br>", "id": 305, "uid": 1, "image_1": "attachment/201203/10/19_1331359149QL94.jpg", "image_3": "", "image_2": "", "target_ids": "", "image_4": "", "title": "\u53d1\u5e03\u4e86", "dateline": 1332674478, "isend": 1, "cityid": 3, "hot": 7, "fid": 30, "subject": "\u5fae\u6ce2\u7089\u4e13\u7528\u76d8\u5939\\\u53a8\u623f\u7b80\u4fbf\u9694\u70ed\u624b\u5957 &amp;\u51b0\u7bb1\u8d34 3\u53ea", "friend": 0, "username": "aifaxian", "starttime": 0, "distance": 32705.061187827701, "price": "22.00", "oprice": "0.00", "obprice": "0.00", "replynum": 2, "lat": "23.1289940000", "lng": "113.2868950000", "endtime": 0, "icon": "", "reblognum": 0, "image_4_link": "", "fusername": "13560937654", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/01_avatar_big.jpg", "tagname": "\u76d8\u5939", "appid": 1, "deadline": 0, "bprice": "0.00", "tagid": 301, "image_1_link": ""}]}

<h2 id="yhqlb">优惠券列表</h2>
按照地理距离进行排序，获取用户GPS信息，用户选择距离范围，大分类、小分类
### 请求参数
/couponlist?distance=1&lat=23&lng=113&tagid=0&page=1&count=10   
同商品列表
### 返回字段
同商品列表

#### 返回json范例
{"avatar_err_path": "http://atfaxian.com/center/images/noavatar_big.gif", "code": 0, "coupons": [{"idtype": "couponsid", "image_2_link": "", "p_tagid": 0, "image_3_link": "", "feedid": 2591, "tag": "a:1:{i:16;s:6:\"\u7f8e\u98df\";}", "fuid": 0, "loveuser": "", "message": "", "id": 34, "uid": 664, "image_1": "http://www.atfaxian.com/attachment/201203/24/664_1332576661ULmO.jpg", "image_3": "", "image_2": "", "target_ids": "", "image_4": "", "title": "\u53d1\u5e03\u4e86", "dateline": 1332576713, "isend": 1, "cityid": 3, "hot": 0, "fid": 34, "subject": "\u4e1c\u839e\u5e02\u7231\u9152\u8f69\u9152\u4e1a\u6709\u9650\u516c\u53f8", "friend": 0, "username": "13925571208", "starttime": 0, "distance": 32705.061187827701, "price": "0.00", "oprice": "0.00", "obprice": "0.00", "replynum": 0, "lat": "23.1289940000", "lng": "113.2868950000", "endtime": 0, "icon": "", "reblognum": 0, "image_4_link": "", "fusername": "", "avatar": "http://atfaxian.com/center/data/avatar/000/00/06/64_avatar_big.jpg", "tagname": "\u7f8e\u98df", "appid": 1, "deadline": 0, "bprice": "0.00", "tagid": 16, "image_1_link": ""}], "goods": [{"idtype": "goodsid", "image_2_link": "", "p_tagid": 0, "image_3_link": "", "feedid": 2605, "tag": "a:2:{i:301;s:6:\"\u76d8\u5939\";i:302;s:9:\"\u51b0\u7bb1\u8d34\";}", "fuid": 831, "loveuser": "1", "message": "\u5355\u4ef7\uff1a22\u5143<br>", "id": 305, "uid": 1, "image_1": "attachment/201203/10/19_1331359149QL94.jpg", "image_3": "", "image_2": "", "target_ids": "", "image_4": "", "title": "\u53d1\u5e03\u4e86", "dateline": 1332674478, "isend": 1, "cityid": 3, "hot": 7, "fid": 30, "subject": "\u5fae\u6ce2\u7089\u4e13\u7528\u76d8\u5939\\\u53a8\u623f\u7b80\u4fbf\u9694\u70ed\u624b\u5957 &amp;\u51b0\u7bb1\u8d34 3\u53ea", "friend": 0, "username": "aifaxian", "starttime": 0, "distance": 32705.061187827701, "price": "22.00", "oprice": "0.00", "obprice": "0.00", "replynum": 2, "lat": "23.1289940000", "lng": "113.2868950000", "endtime": 0, "icon": "", "reblognum": 0, "image_4_link": "", "fusername": "13560937654", "avatar": "http://atfaxian.com/center/data/avatar/000/00/00/01_avatar_big.jpg", "tagname": "\u76d8\u5939", "appid": 1, "deadline": 0, "bprice": "0.00", "tagid": 301, "image_1_link": ""}]}

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
* activity_id
* title
* img
* hoster
* time
* location
* like_num
* participate_num

#### 返回json范例
{"code": 0, "event": [{"idtype": "eventid", "image_2_link": "", "uid": 417, "image_3_link": "", "feedid": 1418, "tag": "a:3:{i:64;s:6:\"\u5a31\u4e50\";i:99;s:6:\"\u7535\u5f71\";i:193;s:6:\"\u4f53\u9a8c\";}", "fuid": 209, "message": "", "id": 102, "subject": "\u97e9\u56fd5D\u52a8\u611f\u4f53\u9a8c\u9986   6\u6298\u4f18\u60e0", "image_1": "attachment/201203/16/209_13318884491gt5.jpg", "image_3": "", "image_2": "", "target_ids": "", "image_4": "", "title": "\u53d1\u5e03\u4e86", "dateline": 1332127337, "cityid": 0, "hot": 23, "fid": 34, "friend": 0, "username": "13759984621", "starttime": 0, "price": "0.00", "oprice": "0.00", "obprice": "0.00", "replynum": 0, "lat": "0E-10", "loveuser": "247", "endtime": 0, "icon": "", "reblognum": 3, "image_4_link": "", "fusername": "13570570234", "lng": "0E-10", "appid": 1, "deadline": 0, "bprice": "0.00", "isend": 1, "image_1_link": ""}]}

<h2 id="xq">动态/商品/优惠券/活动详情</h2>
动态详细信息
### 请求参数
/details?uid=3&id=30&idtype=blogid

* uid
* id (original content id)
* idtype (eventid, blogid, goodsid, couponsid, pid, discloseid, photoid) 

    TODO: photoid, need to query pictures from pic table
    TODO: need score field
    TODO: reblog information
    TODO: friend 0 for public, 1 for friend visible, 2 for private

### 返回字段
* blogid (can be eventid, goodsid, etc)
* time
* uid
* username
* fuid
* fid
* subject
* message
* lng
* lat
* hot
* viewnum
* replynum
* reblognum
* dateline
* like_list[{uid,uimg}...]
* share_list[{uid,uimg}...]
* comment_list[{uid,uimg,uname,cid,ccontent}...] 

### 返回json范例
{"code": 0, "details": {"classid": 0, "love": 0, "uid": 14, "hotuser": "", "magiccall": 0, "pic": "", "related": "", "viewnum": 2, "tag": "", "fuid": 0, "message": "ddfdsfsdf", ", "lng": "0E-10", "subject": "\u534e\u590f\u5927\u9152\u5e97\u6843\u6e90\u5385", "topicid": 0, "dateline": 1330576043, "relatedtime": 0, "cityid": 0, "click_3": 0, "hot": 0, "click_1": 0, "click_4": 0, "click_5": 0, "click_2": 0, "friend": 0, "username": "13826025981", "fid": 30, "picflag": 0, "reblognum": 0, "replynum": 0, "lat": "0E-10", "loveuser": "", "password": "", "magiccolor": 0, "magicpaper": 0, "noreply": 0, "fusername": "", "postip": "59.42.108.14", "target_ids": "", "blogid": 30}}

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
