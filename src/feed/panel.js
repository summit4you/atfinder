Ext.regModel('Article', {
   fields: ['usrImg', 'username', 'score', 'class', 'address', 'review', 'fans', 'distance', 'hot']
});

var store = new Ext.data.JsonStore({
   model: 'Article',
   //sorters: 'username',

   getGroupString: function(record) {
       return record.get('username')[0];
   },

   data: [
       {usrImg: 'resources/themes/images/default/friends/1.png',   username: '王品台塑牛排', score:'90', title:'西式餐馆', address:'天河粤垦路188号', review:'0', fans:'0', distance:'0.8', hot:'270', isset:'1'},
       {usrImg: 'resources/themes/images/default/friends/2.png',   username: '日本鱼子饭', score:'120', title:'日式餐馆', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.9', hot:'159', isset:'1'},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: 'AngleSimple', score:'217', title:'艺术蛋糕', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.5', hot:'346', isset:'0'},
       {usrImg: 'resources/themes/images/default/friends/4.png',   username: '日本小丸子', score:'321', title:'日式餐馆', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.9', hot:'215', isset:'0'},
       {usrImg: 'resources/themes/images/default/friends/5.png',   username: '王品台塑牛排', score:'90', title:'西式餐馆', address:'天河粤垦路188号', review:'0', fans:'0', distance:'0.8', hot:'270', isset:'1'}
   ]
});

Ext.define('Af.feed.panel', {
	
	extend: 'Ext.Panel',
	xtype: 'af-feed-panel',
	config: {
		cls: 'af-feed-panel',
		height: '960',
		width: '640',
		layout: 'vbox',
		id: 'feedpanel',
		items: [
		// top bar
		{
			xtype: 'navigationbar',
			title: '<b>动&nbsp;&nbsp;态</b>',
			ui: 'af',
			layout: 'vbox',
			height: 30,
			items: [
				{
					xtype: 'panel',
					flex:0.14
				},
				{
					xtype: 'spacer',
					cls: 'login-toolbar-spacer',
					width: 1,
					//flex:0.003
					
               	},
				{
					xtype: 'panel',
					flex: 0.64
				},
				{
					xtype: 'spacer',
					cls: 'login-toolbar-spacer',
					width: 1,
					//align : 'right',
					//flex:0.003,
				},
				{
					xtype: 'panel',
					cls: 'login-right-button',
                    items: [{
                            xtype: 'button',
                            baseCls: 'x-button-af',
                            height: 100,
                            docked: 'right',
							html: '<img src="resources/themes/images/default/feed_r1_c32.png" width="29px"></img>'
                            }],
					flex:0.14
				},
			]
		},
		// switch bar
		// horizontal boxs
		 
		// articles list
		{
			xtype: 'list',
			cls: 'articles-list',
			selectedCls: 'articles-list-selectd',
			itemTpl: '<div class="user" style="float:left;"><img src={usrImg} width="60px" style="float:left;"/><span style="float:left;margin-top:65px; margin-left:-60px; ">{username}</span></div> <div class="article"><div class="article-title">{title}</div><div class="hot">{article-hot}</div><div class="article-content">{address}</div><div class="article-time">{distance}</div><div class="article-actions"></div></div>',
			store: store,
			flex: 1,
		}		
		]
	},
	initComponent: function() {
		
			   Af.feed.panel.superclass.initComponent.apply(this);
	},
});
