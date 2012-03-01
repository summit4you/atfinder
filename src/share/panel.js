Ext.define("Article", 
	{
		extend: "Ext.data.Model", 
		
		fields: ['usrImg', 'username', 'share', 'class', 'address', 'review', 'like', 'time', 'hot', 'vip', 'title','content']
		
	}
);

var store = Ext.create("Ext.data.Store", {
   model: 'Article',
   //sorters: 'username',
   grouper: {groupFn: function(record) {
       return record.get('username')[0];
   }},
  

   data: [
       {usrImg: 'resources/themes/images/default/friends/1.png',   username: '水木灵', share:'90', title:'西式餐馆', address:'天河粤垦路188号天河粤粤垦路188号', review:'0', like:'0', time:'25分钟前', hot:'60', vip:'1', content:'今天表哥来了我们玩，已经长成小帅哥啦~我就决定带宝宝和小表哥去公园玩一下碰碰车~偷拍了几张照片╮(￣▽￣")╭ ...'},
       {usrImg: 'resources/themes/images/default/friends/2.png',   username: '水木灵', share:'120', title:'家有艺术家妈妈', address:'天河粤垦路188号', review:'2', like:'32', time:'25分钟前', hot:'159', vip:'1', content:''},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: '水木灵', share:'217', title:'艺术蛋糕', address:'天河粤垦路188号', review:'2', like:'32', time:'25分钟前', hot:'9', vip:'0', content:''},
   ]
});

Ext.define('Af.share.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-share-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'sharepanel',
		scrollable: {
					direction: 'vertical'
		},
		items:[
			{
				xtype: 'titlebar',
				docked: 'top', 
				title: '<b>分&nbsp;&nbsp;享</b>',
				ui: 'af',
				height: 30,
				items: [
					{ // I think this a bug....but it's important for layout T-T
						xtype:'button',
						cls: 'af-toolbar-button',
						baseCls: 'x-button-af',
						align: 'left',
					},
					{
						xtype:'button',
						cls: 'af-toolbar-button',
						baseCls: 'x-button-af',
						align: 'left',
						html: '<img src="resources/themes/images/default/return_icon.png" width="29px"></img>',
						width: 45,
							
					},
					{
						xtype: 'spacer',
						cls: 'login-toolbar-spacer',
						width: 1,
						
                	},
					{
						xtype: 'spacer',
						cls: 'login-toolbar-spacer',
						width: 1,
						align : 'right',
					},
					{
						xtype:'button',
						cls: 'af-toolbar-button',
						baseCls: 'x-button-af',
						align: 'right',
						width: 45,
					},
					
				]
			},
			{
					xtype: 'list',
					cls: 'feed-list',
					selectedCls: 'feed-list-selectd',
					itemTpl: new Ext.XTemplate('<div><div class="feed-user" >',
					'<img src={usrImg} width="60px" />',
					'<img class="user-vip" <tpl if="vip==0">style="display:none;"</tpl> src="resources/themes/images/default/v.png"/>',
					'<div class="username" >{username}</div></div>',
					'<div class="feed-article-angle"></div>',
					'<div class="feed-content">',
					'<div class="feed-title">',
						'<div class="',
							'<tpl if="hot &gt; 0">hot-color-gray</tpl> ',
							'<tpl if="hot &gt; 10">hot-color-lightpink</tpl> ',
							'<tpl if="hot &gt; 30">hot-color-pink</tpl> ',
							'<tpl if="hot &gt; 100">hot-color-red</tpl> ',
							'">{hot}℃</div>',
						'<tpl if="title"><div class="title">{title}</div></tpl>',
					'</div>',
					'<div class="feed-imgpanel">',
						'<div class="feed-img"><img src="resources/themes/images/default/feed/1.png" width="100%"/></div>',
						'<div class="feed-img"><img src="resources/themes/images/default/feed/2.png" width="100%"/></div>',
						'<div class="feed-img"><img src="resources/themes/images/default/feed/2.png" width="100%"/></div>',
					'</div>',
					'<div class="feed-img-count">14张</div>',
					'<div class="content">{content}</div>',
					'<div class="other"><span class="time">{time}</span><span class="actions" ><a href="#"><img src="resources/themes/images/default/feed_like.png" height="13px" style=""/>{like}</a><a href="#"><img src="resources/themes/images/default/feed_comment.png" style="" height="13px" />{review}</a><a href="#"><img src="resources/themes/images/default/feed_share.png" height="13px" style=""/>{share}</a></span></div>',
					'</div>',
					'</div>'), 
					store: store,
					flex: 1,
        	 },
			]
	},
	initialize: function(){
		this.callParent();
	}
});