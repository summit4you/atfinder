Ext.regModel('Article', {
   fields: ['usrImg', 'username', 'share', 'class', 'address', 'review', 'like', 'time', 'hot', 'vip']
});

var store = new Ext.data.JsonStore({
   model: 'Article',
   //sorters: 'username',

   getGroupString: function(record) {
       return record.get('username')[0];
   },

   data: [
       {usrImg: 'resources/themes/images/default/friends/1.png',   username: '水木灵', share:'90', title:'西式餐馆', address:'天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号', review:'0', like:'0', time:'0.8', hot:'60', vip:'1'},
       {usrImg: 'resources/themes/images/default/friends/2.png',   username: '水木灵', share:'120', title:'日式餐馆', address:'天河粤垦路188号', review:'2', like:'32', time:'0.9', hot:'159', vip:'1'},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: '水木灵', share:'217', title:'艺术蛋糕', address:'天河粤垦路188号', review:'2', like:'32', time:'0.5', hot:'9', vip:'0'},
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
		{
	        xtype: 'navigationbar',
            //ui: 'af',
            layout: {
            	type: 'vbox',
            	pack: 'center',
            	align: 'stretch',
            },
            height:22,
            items: [
                    {
						xtype:'button',
						cls: 'shopping-cbutton',
						baseCls: 'x-button-af',
                        html: '全&nbsp;&nbsp;部',
						flex:1,
                    },
                    {
						xtype:'button',
						cls: 'shopping-cbutton-red',
						baseCls: 'x-button-af',
                        html: '好&nbsp;&nbsp;友',
						flex:1,
                    },
                    {
						xtype:'button',
						cls: 'shopping-cbutton',
						baseCls: 'x-button-af',
                        html: '附&nbsp;&nbsp;近',
						flex:1,
                    }
                ]
		}, 
		// switch status bar
		{
			xtype: 'panel',
			cls: 'feed-switch-status',
			
			 layout: 'hbox',
			
			style: 'background-color: #188fdd;',
			items:[
				{
					xtype:'spacer',
					flex:1
				},
				{
					id:'a_1',
					xtype: 'panel',
					flex: 1,
					style: 'background-color: red;',
				
				},
				{
					xtype:'spacer',
					flex:1
				}
			],
			
			flex: 0.005
		},
		// horizontal boxs
        {
            xtype: 'panel',
            cls: 'feed-content-card',
            flex: 1,
            layout: 'card',
            items: [
    		// articles list
	            	{
	            		xtype: 'list',
	            		cls: 'feed-list',
	            		selectedCls: 'feed-list-selectd',
	            		itemTpl: new Ext.XTemplate('<div class="feed-user" >',
	            		'<img src={usrImg} width="60px" />',
	            		'<img class="user-vip" <tpl if="vip==0">style="display:none;"</tpl> src="resources/themes/images/default/v.png"/>',
	            		'<div class="username" >{username}</div></div>',
	            		'<div class="feed-article-angle"><img style="margin-left:10px; margin-top: -8px;" src="resources/themes/images/default/article_angle.png"/></div>',
	            		'<div class="row">',
	            		'<div class="',
	            		'<tpl if="hot &gt; 0">hot-color-gray</tpl> ',
	            		'<tpl if="hot &gt; 10">hot-color-lightpink</tpl> ',
	            		'<tpl if="hot &gt; 30">hot-color-pink</tpl> ',
	            		'<tpl if="hot &gt; 100">hot-color-red</tpl> ',
	            		'">{hot}℃</div>',
	            		'<div class="title" >{title}</div>',
	            		'<div class="content" >{address}',
	            		'</div><div class="time">{time}分钟前</div>',
	            		'<div class="actions" ><a href="#"><img src="resources/themes/images/default/feed_like.png" style=""/>{like}</a><a href="#"><img src="resources/themes/images/default/feed_comment.png" style=""/>{review}</a><a href="#"><img src="resources/themes/images/default/feed_share.png" style=""/>{share}</a></div>',
	            		'</div>'), 
	            		store: store,
	            		flex: 1,
	            	},		
                    {
                        html: "First item"
                    },
                    {
                        html: "First item"
                    },
                ]
        },
		 
		
// bottom bar
			{
				xtype : 'navigationbar',
            	docked: 'bottom', 	
				height: 45,
				ui: 'af',
				layout: 'vbox',
				items:[
					{
						xtype: 'spacer',
						//width: 25,
						//flex: 50/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/feed_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 30,
						//flex: 61/640,
						flex: 0.0953125
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/shopping_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/heart_icon.png" width="37"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.125
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/activi_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 30,
						//flex: 60/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/me_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 26,
						//flex: 52/640,
						flex: 0.08125
                	},
				]
			},
		]
	},
	initComponent: function() {
		
			   Af.feed.panel.superclass.initComponent.apply(this);
	},
});
