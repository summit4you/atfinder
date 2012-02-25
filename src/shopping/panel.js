

Ext.define("Shopping", 
	{
		extend: "Ext.data.Model", 
		fields:  ['usrImg', 'username', 'score', 'class', 'address', 'review', 'fans', 'distance', 'hot', 'cutoff', 'origin_price', 'price', 'validity']
	}
);

var store = Ext.create('Ext.data.Store',{
   model: 'Shopping',
   //sorters: 'username',

    grouper: {groupFn: function(record) {
       return record.get('username')[0];
   }},
   
   data: [
       {usrImg: 'resources/themes/images/default/friends/1.png',   username: '王品台塑牛排', score:'90', class:'西式餐馆', address:'天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号', review:'0', fans:'0', distance:'0.8', hot:'270', isset:'1', validity:'2012年3月1日前', origin_price:'135', price:'235', cutoff:'90'},
       {usrImg: 'resources/themes/images/default/friends/2.png',   username: '日本鱼子饭', score:'120', class:'日式餐馆', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.9', hot:'159', isset:'1',validity:'2012年3月1日前', origin_price:'135', price:'235', cutoff:'90'},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: 'AngleSimple', score:'217', class:'艺术蛋糕', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.5', hot:'346', isset:'0', validity:'2012年3月1日前', origin_price:'135', price:'235', cutoff:'90'},
       {usrImg: 'resources/themes/images/default/friends/4.png',   username: '日本小丸子', score:'321', class:'日式餐馆', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.9', hot:'215', isset:'0', validity:'2012年3月1日前', origin_price:'135', price:'235', cutoff:'90'},
       {usrImg: 'resources/themes/images/default/friends/5.png',   username: '王品台塑牛排', score:'90', class:'西式餐馆', address:'天河粤垦路188号', review:'0', fans:'0', distance:'0.8', hot:'270', isset:'1', validity:'2012年3月1日前', origin_price:'135', price:'235', cutoff:'90'}
   ]
});

function moveSlide(b, e){
	var p1 = Ext.get('a_1');
	Ext.Anim.run( p1, 'fade', {
		out: false,
		autoClear: true,
		direction : 'left',
		width:30,
		after: function(el) {
			
		}
	});
	
}

Ext.define('Af.shopping.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-shopping-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'shoppingpanel',
		scrollable: {
					direction: 'vertical'
		},
		items:[
			{
				xtype: 'titlebar',
				docked: 'top', 
				title: '<b>逛&nbsp;&nbsp;街</b>',
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
						html: '<img src="resources/themes/images/default/shopping_sort_r10_c12.png" width="25px"></img>',
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
				activeItem:1,
				flex:1,
				items:[
					{
						title: '商&nbsp;&nbsp;家',
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
								cls: 'shopping-list',
								selectedCls:  'shopping-list-selected',
								itemTpl: new Ext.XTemplate('<img src={usrImg} width="75px" style="float:left;"/>',
								'<div style="float:left;"><div class="row" style="height:16px;line-height:16px;"><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span></div><div class="row" style="height:16px;line-height:16px;"><span class="class">{class}</span></div><div class="row"  style="height:16px;line-height:16px;"><span class="address">地址:{address}</span></div><div class="row" style="height:12px;line-height:12px;"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>   粉丝<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>   距离：{distance}km</span></div></div><div class="hot-panel">',
								'<span class="',
								' <tpl if="hot &lt; 270">hot-color-blue</tpl> <tpl if="hot &gt;= 270">hot-color-red</tpl>',
								' ">{hot}</span><div class="hot-white-font ',
								'<tpl if="hot &lt; 270">hot-bkcolor-blue</tpl> <tpl else">hot-bkcolor-red</tpl>">℃',
								'</div></div>'),
								store: store,
								flex:1,
							},
						]
					},
					{
						title: '推荐商品',
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
								cls: 'shopping-list',
								selectedCls:  'shopping-list-selected',
								itemTpl: new Ext.XTemplate('<img src={usrImg} width="75px" style="float:left;"/>',
								'<div style="float:left;"><div class="row" style="height:16px;line-height:16px;"><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span></div><div class="row" style="height:16px;line-height:16px;"><span class="class">{class}</span></div><div class="row"  style="height:16px;line-height:16px;"><span class="address">地址:{address}</span></div><div class="row" style="height:12px;line-height:12px;"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>   转发<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>   距离：{distance}km</span></div></div><div class="hot-panel">',
								'<span class="',
								' <tpl if="hot &lt; 270">hot-color-blue</tpl> <tpl if="hot &gt;= 270">hot-color-red</tpl>',
								' ">{hot}</span><div class="hot-white-font ',
								'<tpl if="hot &lt; 270">hot-bkcolor-blue</tpl> <tpl else">hot-bkcolor-red</tpl>">℃',
								'</div></div>'),
								store: store,
								flex:1
							},
						]
					},
					{
						title: '优惠券',
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
								cls: 'coupon-list',
								selectedCls:  'coupon-list-selected',
								itemTpl: new Ext.XTemplate(
								'<img src={usrImg} width="75px" style="float:left;"/>',
								'<div style="float:left;"><div class="row" style="height:16px;line-height:16px;"><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span></div><div class="row" style="height:16px;line-height:16px;"><span class="validity">时效:{validity}</span></div><div class="row"  style="height:16px;line-height:16px;"><span class="price">原价：<s>￥{origin_price}</s>&nbsp;&nbsp;&nbsp;现价：￥{price}</span></div><div class="row" style="height:12px;line-height:12px;"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>   粉丝<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>   距离：{distance}km</span></div></div><div class="cutoff-panel">',
								'<div class="cutoff-white-font ',
								'<tpl if="hot &lt; 270">cutoff-bkcolor-blue</tpl> <tpl else">cutoff-bkcolor-red</tpl>',
								' ">{cutoff}折</div>',
								'<img class="cutoff-unfolder" src="resources/themes/images/default/coupon_unfolder.png"/>',
								'</div></div>'),
								store: store,
								flex:1,
							}
					]
					}
				]
			},
			// switch bar
		/*{
	        xtype: 'toolbar',
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
                        html: '商&nbsp;&nbsp;家',
						flex:1,
						handler: moveSlide
                    },
                    {
						xtype:'button',
						cls: 'shopping-cbutton-red',
						baseCls: 'x-button-af',
                        html: '推荐商品',
						flex:1,
						handler: moveSlide
                    },
                    {
						xtype:'button',
						cls: 'shopping-cbutton',
						baseCls: 'x-button-af',
                        html: '优惠券',
						flex:1,
						handler: moveSlide
                    }
                ]
		}, 
		// switch status bar
		{
			xtype: 'panel',
			cls: 'shopping-switch-status',
			
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
		// content
		{
			xtype: 'panel',
			flex: 1,
			layout: 'card',
			items: [
/*			// shop list
			{
				xtype: 'list',
				cls: 'shopping-list',
				selectedCls:  'shopping-list-selected',
				itemTpl: new Ext.XTemplate('<img src={usrImg} width="75px" style="float:left;"/>',
				'<div style="float:left;"><div class="row" style="height:16px;line-height:16px;"><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span></div><div class="row" style="height:16px;line-height:16px;"><span class="class">{class}</span></div><div class="row"  style="height:16px;line-height:16px;"><span class="address">地址:{address}</span></div><div class="row" style="height:12px;line-height:12px;"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>   粉丝<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>   距离：{distance}km</span></div></div><div class="hot-panel">',
				'<span class="',
				' <tpl if="hot &lt; 270">hot-color-blue</tpl> <tpl if="hot &gt;= 270">hot-color-red</tpl>',
				' ">{hot}</span><div class="hot-white-font ',
				'<tpl if="hot &lt; 270">hot-bkcolor-blue</tpl> <tpl else">hot-bkcolor-red</tpl>">℃',
				'</div></div>'),
				store: store,
			},
			// goods list
			{
				xtype: 'list',
				cls: 'shopping-list',
				selectedCls:  'shopping-list-selected',
				itemTpl: new Ext.XTemplate('<img src={usrImg} width="75px" style="float:left;"/>',
				'<div style="float:left;"><div class="row" style="height:16px;line-height:16px;"><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span></div><div class="row" style="height:16px;line-height:16px;"><span class="class">{class}</span></div><div class="row"  style="height:16px;line-height:16px;"><span class="address">地址:{address}</span></div><div class="row" style="height:12px;line-height:12px;"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>   粉丝<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>   距离：{distance}km</span></div></div><div class="hot-panel">',
				'<span class="',
				' <tpl if="hot &lt; 270">hot-color-blue</tpl> <tpl if="hot &gt;= 270">hot-color-red</tpl>',
				' ">{hot}</span><div class="hot-white-font ',
				'<tpl if="hot &lt; 270">hot-bkcolor-blue</tpl> <tpl else">hot-bkcolor-red</tpl>">℃',
				'</div></div>'),
				store: store,
			},
*/			// coupon list
			/*{
				xtype: 'list',
				cls: 'coupon-list',
				selectedCls:  'coupon-list-selected',
				itemTpl: new Ext.XTemplate(
				'<img src={usrImg} width="75px" style="float:left;"/>',
				'<div style="float:left;"><div class="row" style="height:16px;line-height:16px;"><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span></div><div class="row" style="height:16px;line-height:16px;"><span class="validity">时效:{validity}</span></div><div class="row"  style="height:16px;line-height:16px;"><span class="price">原价：<s>￥{origin_price}</s>&nbsp;&nbsp;&nbsp;现价：￥{price}</span></div><div class="row" style="height:12px;line-height:12px;"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>   粉丝<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>   距离：{distance}km</span></div></div><div class="cutoff-panel">',
				'<div class="cutoff-white-font ',
				'<tpl if="hot &lt; 270">cutoff-bkcolor-blue</tpl> <tpl else">cutoff-bkcolor-red</tpl>',
				' ">{cutoff}折</div>',
				'<img class="cutoff-unfolder" src="resources/themes/images/default/coupon_unfolder.png"/>',
				'</div></div>'),
				store: store,
			}
			]
		},*/
			//bottom bar
			{
				xtype : 'toolbar',
            	docked: 'bottom', 	
				height: 40,
				ui: 'af3',
				layout: {
					type:'hbox',
					align:'center'
				},
				items:[
					{
						xtype: 'spacer',
						//width: 25,
						//flex: 50/640,
						flex: 0.074
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-cbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/shopping_foot.png" width="120px"><span style="color:#dcc;margin-left:-115px;">附近0.8km</span>'
					},
					{
						xtype: 'spacer',
						//width: 30,
						//flex: 61/640,
						flex: 0.075
                	},
					
					{
						xtype: 'button',
						cls: 'af-toolbar-cbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/search_icon.png" width="30px"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.075
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-cbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/shopping_foot.png" width="120px"></img>'
					},
					
					{
						xtype: 'spacer',
						//width: 26,
						//flex: 52/640,
						flex: 0.0725
                	},
				]
			}
		]
	},
	initialize: function(){
		this.callParent();
	}
});