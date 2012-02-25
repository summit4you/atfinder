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
			xtype: 'titlebar',
			title: '<b>动&nbsp;&nbsp;态</b>',
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
						html: '<div style="text-align:right"><img src="resources/themes/images/default/feed_r1_c32.png" width="29px"></img></div>'
					},
			]
		},
		{
			xtype:'tabpanel',
			tabBar:{
				docked: 'top', // will put the menu on the bottom of the screen
				cls: 'feed-tabbar',
				height:20,
				layout:{
					type:'hbox',	
					align:'center'
				},
				defaults:{
					flex:1,
					activeCls: 'af-tab-active',
					cls:'af-tab',
				}
			},
			activeItem:1,
			items:[
				{
					title: '全&nbsp;&nbsp;部',
					items:[
							{
								xtype:'panel',
								layout:'hbox',
								style: 'background-color: #188fdd;',
								height:2,
								items:[
									{
									xtype: 'panel',
									flex: 1,
									style: 'background-color: red;',
								
									},
									{
										xtype:'spacer',
										flex:1
									},
									{
										xtype:'spacer',
										flex:1
									}
								]		
							}
					]
				},
				{
					title: '好&nbsp;&nbsp;友',
					layout:'vbox',
					items:[
							{
								xtype:'panel',
								layout:'hbox',
								style: 'background-color: #188fdd;',
								height:2,
								items:[
									{
									xtype: 'panel',
									flex: 1,
									
								
									},
									{
										xtype:'spacer',
										flex:1,
										style: 'background-color: red;',
									},
									{
										xtype:'spacer',
										flex:1
									}
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
								'<div class="other"><span class="time">{time}</span><span class="actions" ><a href="#"><img src="resources/themes/images/default/feed_like.png" style=""/>{like}</a><a href="#"><img src="resources/themes/images/default/feed_comment.png" style=""/>{review}</a><a href="#"><img src="resources/themes/images/default/feed_share.png" style=""/>{share}</a></span></div>',
								'</div>',
								'</div>'), 
								store: store,
								flex: 1,
        					},
					]
				},
				{
					title: '附&nbsp;&nbsp;近',
					items:[
							{
								xtype:'panel',
								layout:'hbox',
								style: 'background-color: #188fdd;',
								height:2,
								items:[
									{
									xtype: 'panel',
									flex: 1,
									
								
									},
									{
										xtype:'spacer',
										flex:1
									},
									{
										xtype:'spacer',
										flex:1,
										style: 'background-color: red;',
									}
								]
							}
					]
				}
			],
			flex:1
		},
		// switch bar
		/*{
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
						handler: function(b, event){
							Ext.getCmp('feedbar').setActiveItem(Ext.getCmp('feedbar1'));
						}
                    },
                    {
						xtype:'button',
						cls: 'shopping-cbutton-red',
						baseCls: 'x-button-af',
                        html: '好&nbsp;&nbsp;友',
						flex:1,
						handler: function(b, event){
							Ext.getCmp('feedbar').setActiveItem(Ext.getCmp('feedbar2'));
						}
                    },
                    {
						xtype:'button',
						cls: 'shopping-cbutton',
						baseCls: 'x-button-af',
                        html: '附&nbsp;&nbsp;近',
						flex:1,
						handler: function(b, event){
							Ext.getCmp('feedbar').setActiveItem(Ext.getCmp('feedbar3'));
						}
                    }
                ]
		}, 
		// switch status bar
		{
			xtype: 'panel',	
			cls: 'feed-switch-status',
			layout: 'card',
			id:'feedbar',
			items:[
				{
					xtype: 'panel',
					cls: 'feed-switch-status',
					id:'feedbar1',
					layout: 'hbox',
					style: 'background-color: #188fdd;',
					items:[
						{
							id:'a_1',
							xtype: 'panel',
							flex: 1,
							style: 'background-color: red;',
						
						},
						{
							xtype:'spacer',
							flex:1
						},
						{
							xtype:'spacer',
							flex:1
						}
					],
				},
				{
					xtype: 'panel',
					cls: 'feed-switch-status',	
					layout: 'hbox',
					id:'feedbar2',
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
				},
				{
					xtype: 'panel',
					cls: 'feed-switch-status',	
					layout: 'hbox',
					id:'feedbar3',
					style: 'background-color: #188fdd;',
					items:[
						{
							xtype:'spacer',
							flex:1
						},
						
						{
							xtype:'spacer',
							flex:1
						},
						{
							id:'a_1',
							xtype: 'panel',
							flex: 1,
							style: 'background-color: red;',
						
						}
					],
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
        },*/
		 
		
// bottom bar
			{
				xtype : 'toolbar',
            	docked: 'bottom', 	
				height: 45,
				ui: 'af',
				layout: {
					type:'hbox',
					align:'center'
				},
				items:[
					{
						xtype: 'spacer',
						//width: 25,
						//flex: 50/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/s_feed_icon.png" width="30"></img>'
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
	initialize: function(){
		this.callParent();
	}
});
