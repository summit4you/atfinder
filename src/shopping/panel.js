Ext.regModel('Buyer', {
   fields: ['usrImg', 'username', 'score', 'class', 'address', 'review', 'fans', 'distance', 'hot']
});

var store = new Ext.data.JsonStore({
   model: 'Buyer',
   //sorters: 'username',

   getGroupString: function(record) {
       return record.get('username')[0];
   },

   data: [
       {usrImg: 'resources/themes/images/default/friends/1.png',   username: '王品台塑牛排', score:'90', class:'西式餐馆', address:'天河粤垦路188号', review:'0', fans:'0', distance:'0.8', hot:'270', isset:'1'},
       {usrImg: 'resources/themes/images/default/friends/2.png',   username: '日本鱼子饭', score:'120', class:'日式餐馆', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.9', hot:'159', isset:'1'},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: 'AngleSimple', score:'217', class:'艺术蛋糕', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.5', hot:'346', isset:'0'},
       {usrImg: 'resources/themes/images/default/friends/4.png',   username: '日本小丸子', score:'321', class:'日式餐馆', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.9', hot:'215', isset:'0'},
       {usrImg: 'resources/themes/images/default/friends/5.png',   username: '王品台塑牛排', score:'90', class:'西式餐馆', address:'天河粤垦路188号', review:'0', fans:'0', distance:'0.8', hot:'270', isset:'1'}
   ]
});

Ext.define('Af.shopping.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-shopping-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'shoppingpanel',
		scroll: true,
		items:[
			{
				xtype: 'navigationbar',
				docked: 'top', 
				title: '<b>逛&nbsp;&nbsp;街</b>',
				ui: 'af',
				layout: 'vbox',
				height: 30,
				items: [
					{
						xtype: 'panel',
						cls: 'login-left-button',
						items:[
							{
								xtype:'button',
								
								baseCls: 'x-button-af',
								height:100,
								docked:'left',
								html: '<img src="resources/themes/images/default/return_icon.png" width="29px"></img>'
							}
						],
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
						//align :'right',
						items:[
							{
								xtype:'button',
								baseCls: 'x-button-af',
								height: 100,
								docked:'right',
								html: '<img src="resources/themes/images/default/shopping_sort_r10_c12.png" width="25px"></img>'
							}
						],
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
            defaults:{
            	flex: 1,
            	style: 'background: none; border:none;',
            },
            style: 'background: #333333;',
            items: [
                    {
                        html: '商&nbsp;&nbsp;家'
                    },
                    {
                        html: '<font color="red">推荐商品'
                    },
                    {
                        html: '优惠券'
                    }
                ]
		}, 
		// switch status bar
		{
			xtype: 'panel',
			cls: 'feed-switch-status',
			style: 'background-color: #188fdd;',
			html: '<div style="background-color:red;width:30%;margin: 0 auto;">&nbsp;</div>',
			flex: 0.005
		},
		// content
		{
			xtype: 'panel',
			flex: 1,
			layout: 'card',
			items: [
			{
				xtype: 'list',
				cls: 'friends-list',
				selectedCls:  'friends-list-selected',
				itemTpl: '<img src={usrImg} width="75px" style="float:left;"/><div style="float:left;"><div class="row" style="height:16px;line-height:16px;"><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span></div><div class="row" style="height:16px;line-height:16px;"><span class="class">{class}</span></div><div class="row"  style="height:16px;line-height:16px;"><span class="address">地址:{address}</span></div><div class="row" style="height:12px;line-height:12px;"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>   粉丝<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>   距离：{distance}km</span></div></div><div class="hot-panel <tpl if="hot &lt; 270">hot-bkcolor-blue</tpl> <tpl else">hot-bkcolor-red</tpl>" style="">{hot}℃<img src="resources/themes/images/default/right_angle.png" width="8px" style="top: 10px;right: 20px;position: relative;float:right; "/></div>',
				store: store,
			}
			]
		},
			//bottom bar
			{
				xtype : 'navigationbar',
            	docked: 'bottom', 	
				height: 40,
				ui: 'af3',
				layout: 'vbox',
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
	initComponent: function(){
		Af.shopping.panel.superclass.initComponent.call(this);
	}
});