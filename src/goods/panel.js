

Ext.define("Shopping", 
	{
		extend: "Ext.data.Model", 
		fields:  ['usrImg', 'username', 'score',  'price', 'star', 'review', 'fans', 'distance', 'hot']
	}
);

var store = Ext.create('Ext.data.Store',{
   model: 'Shopping',
   //sorters: 'username',

  
   
   data: [
       {usrImg: 'resources/themes/images/default/friends/1.png',   username: '雪花牛排', score:'90', price:'108', star:'3',  review:'2', fans:'32', distance:'0.8', hot:'270' },
       {usrImg: 'resources/themes/images/default/friends/2.png',   username: '日本鱼子饭', score:'120', price:'32', star:'4', review:'11', fans:'12', distance:'0.9', hot:'159',},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: 'Tiramisu', score:'217', price:'21', star:'5', review:'6', fans:'9', distance:'6.9', hot:'346'},
       {usrImg: 'resources/themes/images/default/friends/4.png',   username: '日本小丸子', score:'321', price:'6', star:'4', review:'21', fans:'32', distance:'4.2', hot:'215'},
       {usrImg: 'resources/themes/images/default/friends/5.png',   username: '王品台塑牛排', score:'94', price:'54', star:'3', review:'2', fans:'13', distance:'3', hot:'270'}
   ]
});



Ext.define('Af.goods.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-goods-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'goodspanel',
		scrollable: {
					direction: 'vertical'
		},
		items:[
			{
				xtype: 'titlebar',
				docked: 'top', 
				title: '<b>王品台塑牛排</b>',
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
				flex:1,
				items:[
					{
						title: '商&nbsp;&nbsp;品',
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
										flex:1,
										
									}
								]
							},
							{
								xtype: 'list',
								cls: 'shopping-list goods-list',
								selectedCls:  'shopping-list-selected',
								itemTpl: new Ext.XTemplate(
								'<div class="goods-list-item">',
								'<div class="goods-img">',
									'<img src={usrImg} width="75px"/>',
								'</div>',
								'<div class="goods-content">',
									'<div class="goods-name goods-content-row" ><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span>',
								'<div style="float:right; font-size:20px;"><span class="',
								' <tpl if="hot &lt; 270">hot-color-blue</tpl> <tpl if="hot &gt;= 270">hot-color-red</tpl>',
								' " style="float:left">{hot}</span><div class="hot-white-font ',
								'<tpl if="hot &lt; 270">hot-bkcolor-blue</tpl> <tpl else">hot-bkcolor-red</tpl>" style="float:right">℃</div>',
									'</div>',
									'<div class="goods-content-row">价格： ￥{price}</div>',
									'<div class="goods-content-row">评分： {[this.getStar(values.star)]}</div>',
									'<div class="goods-content-row"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>&nbsp;&nbsp;   粉丝<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>&nbsp;&nbsp; &nbsp;&nbsp;    距离：{distance}km</span></div>',
								'<div>',
								'</div>',
								{
									// XTemplate configuration:
       								disableFormats: true,
									// member functions:
									getStar: function(num){
									   var s = "";
									   for (var i=0; i<5; i++){
										   if (i>=num) s=s+'<img src="resources/themes/images/default/goods_star.png" height="10px"/>';
										   else s=s+'<img src="resources/themes/images/default/goods_star_full.png" height="10px"/>';
									   }
									   return s;
									}
								}
								),
								store: store,
								flex:1,
								onItemDisclosure : {
									handler: function(record, btn, index) {
										alert('jel');
									}
								},
							},
						]
					},
					{
						title: '优&nbsp;&nbsp;惠',
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
										flex:1,
										
									}
								]
							},
							{
								xtype: 'list',
								cls: 'shopping-list goods-list',
								selectedCls:  'shopping-list-selected',
								itemTpl: new Ext.XTemplate(
								'<div class="goods-list-item">',
								'<div class="goods-img">',
									'<img src={usrImg} width="75px"/>',
								'</div>',
								'<div class="goods-content">',
									'<div class="goods-name goods-content-row" ><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span>',
								'<div style="float:right; font-size:20px;"><span class="',
								' <tpl if="hot &lt; 270">hot-color-blue</tpl> <tpl if="hot &gt;= 270">hot-color-red</tpl>',
								' " style="float:left">{hot}</span><div class="hot-white-font ',
								'<tpl if="hot &lt; 270">hot-bkcolor-blue</tpl> <tpl else">hot-bkcolor-red</tpl>" style="float:right">℃</div>',
									'</div>',
									'<div class="goods-content-row">价格： ￥{price}</div>',
									'<div class="goods-content-row">评分： {[this.getStar(values.star)]}</div>',
									'<div class="goods-content-row"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>&nbsp;&nbsp;   粉丝<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>&nbsp;&nbsp; &nbsp;&nbsp;    距离：{distance}km</span></div>',
								'<div>',
								'</div>',
								{
									// XTemplate configuration:
       								disableFormats: true,
									// member functions:
									getStar: function(num){
									   var s = "";
									   for (var i=0; i<5; i++){
										   if (i>=num) s=s+'<img src="resources/themes/images/default/goods_star.png" height="10px"/>';
										   else s=s+'<img src="resources/themes/images/default/goods_star_full.png" height="10px"/>';
									   }
									   return s;
									}
								}
								),
								store: store,
								flex:1,
								onItemDisclosure : {
									handler: function(record, btn, index) {
										alert('jel');
									}
								},
							},
						]
					},
					{
						title: '活&nbsp;&nbsp;动',
						layout: 'vbox',
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
							},
							{
								xtype: 'list',
								cls: 'shopping-list goods-list',
								selectedCls:  'shopping-list-selected',
								itemTpl: new Ext.XTemplate(
								'<div class="goods-list-item">',
								'<div class="goods-img">',
									'<img src={usrImg} width="75px"/>',
								'</div>',
								'<div class="goods-content">',
									'<div class="goods-name goods-content-row" ><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span>',
								'<div style="float:right; font-size:20px;"><span class="',
								' <tpl if="hot &lt; 270">hot-color-blue</tpl> <tpl if="hot &gt;= 270">hot-color-red</tpl>',
								' " style="float:left">{hot}</span><div class="hot-white-font ',
								'<tpl if="hot &lt; 270">hot-bkcolor-blue</tpl> <tpl else">hot-bkcolor-red</tpl>" style="float:right">℃</div>',
									'</div>',
									'<div class="goods-content-row">价格： ￥{price}</div>',
									'<div class="goods-content-row">评分： {[this.getStar(values.star)]}</div>',
									'<div class="goods-content-row"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>&nbsp;&nbsp;   粉丝<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>&nbsp;&nbsp; &nbsp;&nbsp;    距离：{distance}km</span></div>',
								'<div>',
								'</div>',
								{
									// XTemplate configuration:
       								disableFormats: true,
									// member functions:
									getStar: function(num){
									   var s = "";
									   for (var i=0; i<5; i++){
										   if (i>=num) s=s+'<img src="resources/themes/images/default/goods_star.png" height="10px"/>';
										   else s=s+'<img src="resources/themes/images/default/goods_star_full.png" height="10px"/>';
									   }
									   return s;
									}
								}
								),
								store: store,
								flex:1,
								onItemDisclosure : {
									handler: function(record, btn, index) {
										alert('jel');
									}
								},
							},
					]
					}
				]
			},
	
		
		]
	},
	initialize: function(){
		this.callParent();
	}
});