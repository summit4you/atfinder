Ext.define("Message", 
	{
		extend: "Ext.data.Model", 
		fields: ['usrImg', 'username', 'share', 'class', 'address', 'review', 'like', 'time', 'hot', 'vip', 'title','content', 'isreply', 'replyname']
	}
);

var store0 = Ext.create("Ext.data.Store", {
   model: 'Message',
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

Ext.define("MessageEval", 
	{
		extend: "Ext.data.Model", 
		fields: ['usrImg', 'username', 'time', 'vip', 'content', 'isreply', 'replyname']
	}
);

var store = Ext.create("Ext.data.Store", {
   model: 'MessageEval',
   //sorters: 'username',
  
  

   data: [
       {usrImg: 'resources/themes/images/default/friends/1.png',   username: '水木灵', time:'25分钟前',  vip:'1', content:'今天表哥来了我们玩，已经长成小帅哥啦~我就决定带宝宝和小表哥去公园玩一下碰碰车~偷拍了几张照片╮(￣▽￣")╭ ...', isreply:0, replyname:''},
	   {usrImg: 'resources/themes/images/default/friends/1.png',   username: '王品台塑牛排', time:'48分钟前',  vip:'1', content:'谢谢哈~下次过来给你优惠...', isreply:1, replyname:'零零八'},
       {usrImg: 'resources/themes/images/default/friends/2.png',   username: '零零八',  time:'1小时前',  vip:'1', content:'Σ( ° △ °|||)︴呜啊! 这个太帅了!', isreply:0, replyname:''},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: '张起灵',    time:'2012-02-16',  vip:'0', content:'你们东西真的很好吃啊...我带了很多朋友过来光顾啊~他们都说很好吃!', isreply:0, replyname:''},
	   {usrImg: 'resources/themes/images/default/friends/1.png',   username: '王品台塑牛排', time:'48分钟前',  vip:'1', content:'谢谢哈~下次过来给你优惠...', isreply:1, replyname:'零零八'},
   ]
});

var store2 = Ext.create("Ext.data.Store", {
   model: 'MessageEval',
   //sorters: 'username',
  
  

   data: [
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: '零零八', time:'25分钟前',  vip:'1', content:'今天表哥来了我们玩，已经长成小帅哥啦~我就决定带宝宝和小表哥去公园玩一下碰碰车~偷拍了几张照片╮(￣▽￣")╭ ...', isreply:0, replyname:''},
	   {usrImg: 'resources/themes/images/default/friends/1.png',   username: '王品台塑牛排', time:'48分钟前',  vip:'1', content:'谢谢哈~下次过来给你优惠...', isreply:1, replyname:'零零八'},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: '零零八',  time:'1小时前',  vip:'1', content:'Σ( ° △ °|||)︴呜啊! 这个太帅了!', isreply:0, replyname:''},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: '零零八',    time:'2012-02-16',  vip:'1', content:'你们东西真的很好吃啊...我带了很多朋友过来光顾啊~他们都说很好吃!', isreply:0, replyname:''},
	   {usrImg: 'resources/themes/images/default/friends/1.png',   username: '王品台塑牛排', time:'48分钟前',  vip:'1', content:'谢谢哈~下次过来给你优惠...', isreply:1, replyname:'零零八'},
   ]
});

Ext.define('Af.message.panel', {
	
	extend: 'Ext.Panel',
	xtype: 'af-message-panel',
	config: {
		cls: 'af-feed-panel',
		height: '960',
		width: '640',
		layout: 'vbox',
		id: 'messagepanel',
		items: [
		// top bar
		{
			xtype: 'titlebar',
			title: '<b>消&nbsp;&nbsp;息</b>',
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
						html: '<div style="text-align:left"><img src="resources/themes/images/default/return_icon.png" width="29px"></img></div>'
							
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
			activeItem:0,
			items:[
				{
					title: '评&nbsp;&nbsp;价',
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
							},
							/*{
								xtype: 'list',
								cls: 'feed-list',
								selectedCls: 'feed-list-selectd',
								store: store,
								flex: 1,
							}*/
							{
								xtype: 'list',
								cls: 'eval-list',
								selectedCls: 'eval-list-selectd',
								itemTpl: new Ext.XTemplate('<tpl if="isreply==0"><div clsss="eval-list-item"><div class="eval-user">',
								'<img src={usrImg} width="60px" />',
								'<img class="user-vip" <tpl if="vip==0">style="display:none;"</tpl> src="resources/themes/images/default/v.png"/>',
								'</div>',
								'<div class="feed-article-angle"></div>',
								'<div class="eval-content">',
								'<div class="eval-username" >{username}</div>',
								'<div class="content">{content}</div>',
								'<div class="other"><span class="time">{time}</span></div>',
								'</div>',
								'</div></tpl>',
								'<tpl if="isreply==1"><div clsss="eval-list-item">',
								
								'<div class="eval-ruser">',
								'<img src={usrImg} width="60px" />',
								'<img class="user-vip" <tpl if="vip==0">style="display:none;"</tpl> src="resources/themes/images/default/v.png"/>',
								'</div>',
								'<div class="feed-article-rangle"></div>',
								'<div class="eval-content" style="margin-right:0px;">', /*float should address forwared */
								'<div class="eval-username" >{username}</div>',
								'<div class="content">回复&nbsp;<span class="replyname">{replyname}</span>：{content}</div>',
								'<div class="other"><span class="time">{time}</span></div>',
								'</div>',
								
								'</div>',
								'</div></tpl>'), 
								store: store,
								flex: 1,
        					},
					]
				},
				{
					title: '私&nbsp;&nbsp;信',
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
								cls: 'eval-list',
								selectedCls: 'eval-list-selectd',
								itemTpl: new Ext.XTemplate('<tpl if="isreply==0"><div clsss="eval-list-item"><div class="eval-user">',
								'<img src={usrImg} width="60px" />',
								'<img class="user-vip" <tpl if="vip==0">style="display:none;"</tpl> src="resources/themes/images/default/v.png"/>',
								'</div>',
								'<div class="feed-article-angle"></div>',
								'<div class="eval-content">',
								'<div class="eval-username" >{username}</div>',
								'<div class="content">{content}</div>',
								'<div class="other"><span class="time">{time}</span></div>',
								'</div>',
								'</div></tpl>',
								'<tpl if="isreply==1"><div clsss="eval-list-item">',
								
								'<div class="eval-ruser">',
								'<img src={usrImg} width="60px" />',
								'<img class="user-vip" <tpl if="vip==0">style="display:none;"</tpl> src="resources/themes/images/default/v.png"/>',
								'</div>',
								'<div class="feed-article-rangle"></div>',
								'<div class="eval-content" style="margin-right:0px;">', /*float should address forwared */
								'<div class="eval-username" >{username}</div>',
								'<div class="content">回复&nbsp;<span class="replyname">{replyname}</span>：{content}</div>',
								'<div class="other"><span class="time">{time}</span></div>',
								'</div>',
								
								'</div>',
								'</div></tpl>'), 
								store: store2,
								flex: 1,
        					},
					]
				},
				{
					title: '留&nbsp;&nbsp;言',
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
		

		]
	},
	initialize: function(){
		this.callParent();
	}
});
