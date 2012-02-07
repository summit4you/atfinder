Ext.define('Af.detailusers.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-detailusers-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'detailuserspanel',
		scroll: true,
		items:[
			{
				xtype: 'navigationbar',
				docked: 'top', 
				title: '<b>用户详情</b>',
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
								html: '<img src="resources/themes/images/default/enter_icon.png" width="29px"></img>'
							}
						],
						flex:0.14
					},
				]
			},	
			{
				xtype: 'panel',
				layout: 'hbox',
				height: 75,
				items: [
					{
						xtype: 'panel',
						width:75,
						html: '<img src="resources/themes/images/default/user_img2.png" style="width:100%;height:100%;"/>',
					},
					{
						xtype: 'panel',
						style: 'background-color: #333333;',
						layout: "hbox",
						items:[
							
								{
									xtype: 'panel',
									cls: 'profile-infopanel',
									flex:1,
									html: '<ul><li class="name">王品台塑牛排</li><li><span>等级：</span><span class="level"><img src="resources/themes/images/default/level_star.png"/></span><span class="level"><img src="resources/themes/images/default/level_star.png"/></span><span class="level"><img src="resources/themes/images/default/level_star.png"/></span><span class="level"><img src="resources/themes/images/default/level_star.png"/></span><span class="level"><img src="resources/themes/images/default/level_star.png"/></span></li><li><span>积分：</span>2571</li></ul>'
								},
								{
									xtype: 'panel',
									cls: 'hot-panel',
									width: 40,
									html: '270',
								}
							
						],
						flex:1
					},
					{
						xtype: 'panel',
						style: 'background-color: #FF5580;',
						width: 20,
						html: '<img src="resources/themes/images/default/hot.png" style="width:100%;height:100%;"/>'
					}
				] 
			},
			{
				xtype: 'panel',
				cls: 'profile-panel-1',
				html:'<div class="profile-panel-content">西式餐馆&nbsp;&nbsp;&nbsp;&nbsp;地址: 天河粤垦路188号<br/>距离：0.8km..</div><div class="profile-panel-subject"><ul><li><a>#美食</a></li></ul><div>'
			},
			{
				xtype: 'panel',
				cls: 'profile-panel-1',
				html:'<div class="profile-panel-content">今天的天气很好啊~发现了一家很好的甜品店，真的很好吃啊...</div><div class="profile-panel-subject"><ul><li><a href="#">#美食</a></li><li><a>#衣服</a></li><li><a>#衣服</a></li></ul><div>'
			},
			{
				xtype: 'panel',
				cls: 'profile-panel-1',
				html: '<div class="profile-panel-row-bottom"><div class="profile-panel-cell-left">关&nbsp;&nbsp;注&nbsp;&nbsp;<b>268</b></div><div class="profile-panel-cell-right">&nbsp;<img src="resources/themes/images/default/like.png" width="16" height="16"/>&nbsp;&nbsp;&nbsp;<b>268</b></div></div><div class="profile-panel-row"><div class="profile-panel-cell-left">粉&nbsp;&nbsp;丝&nbsp;&nbsp;<b>184</b></div><div class="profile-panel-cell-right">留&nbsp;&nbsp;言&nbsp;&nbsp;<b>52</b></div></div>'
			},
			{
				xtype: 'panel',
				cls: 'profile-class-title',
				html: '<b>商&nbsp;&nbsp;家</b>'
			},
			{
				xtype: 'panel',
				cls: 'profile-class-panel',
				layout: 'vbox',
				//html:'<div class="profile-class-panel-row">43543543</div><div class="profile-class-panel-row-bottom">435435435</div>',
				items: [
					{
						xtype:'panel',
						cls: 'profile-class-panel-row',
						html: '<img src="resources/themes/images/default/me_gift_icon.png" width="21"/><span class="class-title">商品</span><span class="class-value">126</span>',
						items:[
							{
								xtype:'button',
								cls: 'rbutton',
								baseCls: 'x-button-af',
								docked: 'right',
								html: '<img src="resources/themes/images/default/rarrow.png" width="8"></img>'
							}
						]
					},
					{
						xtype:'panel',
						cls: 'profile-class-panel-row',
						html: '<img src="resources/themes/images/default/me_discount_icon.png" width="21"/><span class="class-title">优惠</span><span class="class-value">228</span>',
						items:[
							{
								xtype:'button',
								cls: 'rbutton',
								baseCls: 'x-button-af',
								docked: 'right',
								html: '<img src="resources/themes/images/default/rarrow.png" width="8"></img>'
							}
						]
					},
					{
						xtype:'panel',
						cls: 'profile-class-panel-row-bottom',
						html: '<img src="resources/themes/images/default/me_activi_icon.png" width="21"/><span class="class-title">活动</span><span class="class-value">176</span>',
						items:[
							{
								xtype:'button',
								cls: 'rbutton',
								baseCls: 'x-button-af',
								docked: 'right',
								html: '<img src="resources/themes/images/default/rarrow.png" width="8"></img>'
							}
						]
					}
				]
			},
			{
				xtype: 'panel',
				cls: 'profile-class-title',
				html: '<b>个&nbsp;&nbsp;人</b>'
			},
			{
				xtype: 'panel',
				cls: 'profile-class-panel',
				layout: 'vbox',
				style:'margin-bottom:15px',
				//html:'<div class="profile-class-panel-row">43543543</div><div class="profile-class-panel-row-bottom">435435435</div>',
				items: [
					{
						xtype:'panel',
						cls: 'profile-class-panel-row',
						html: '<img src="resources/themes/images/default/me_share_icon.png" width="21"/><span class="class-title">分享</span><span class="class-value">126</span>',
						items:[
							{
								xtype:'button',
								cls: 'rbutton',
								baseCls: 'x-button-af',
								docked: 'right',
								html: '<img src="resources/themes/images/default/rarrow.png" width="8"></img>'
							}
						]
					},
					{
						xtype:'panel',
						cls: 'profile-class-panel-row',
						html: '<img src="resources/themes/images/default/me_pic_icon.png" width="21"/><span class="class-title">图片</span><span class="class-value">228</span>',
						items:[
							{
								xtype:'button',
								cls: 'rbutton',
								baseCls: 'x-button-af',
								docked: 'right',
								html: '<img src="resources/themes/images/default/rarrow.png" width="8"></img>'
							}
						]
					},
					{
						xtype:'panel',
						cls: 'profile-class-panel-row',
						html: '<img src="resources/themes/images/default/me_vote_icon.png" width="21"/><span class="class-title">投票</span><span class="class-value">176</span>',
						items:[
							{
								xtype:'button',
								cls: 'rbutton',
								baseCls: 'x-button-af',
								docked: 'right',
								html: '<img src="resources/themes/images/default/rarrow.png" width="8"></img>'
							}
						]
					},
					{
						xtype:'panel',
						cls: 'profile-class-panel-row',
						html: '<img src="resources/themes/images/default/me_see_icon.png" width="21"/><span class="class-title">发现</span><span class="class-value">89</span>',
						items:[
							{
								xtype:'button',
								cls: 'rbutton',
								baseCls: 'x-button-af',
								docked: 'right',
								html: '<img src="resources/themes/images/default/rarrow.png" width="8"></img>'
							}
						]
					},
					{
						xtype:'panel',
						cls: 'profile-class-panel-row-bottom',
						html: '<img src="resources/themes/images/default/me_feel_icon.png" width="21"/><span class="class-title">心情</span><span class="class-value">360</span>',
						items:[
							{
								xtype:'button',
								cls: 'rbutton',
								baseCls: 'x-button-af',
								docked: 'right',
								html: '<img src="resources/themes/images/default/rarrow.png" width="8"></img>'
							}
						]
					}
				]
			},
			{
				//73 60 48 60 49 60 48 60 50 60 72
				xtype : 'navigationbar',
            	docked: 'bottom', 	
				height: 40,
				ui: 'af2',
				layout: 'vbox',
				items:[
					{
						xtype: 'spacer',
						//width: 25,
						//flex: 50/640,
						flex: 0.114
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-cbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/loc_icon.png" width="30px"></img><img src="resources/themes/images/default/loc_icon2.png" width="30px" style="display:none;"></img>'
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
						html: '<img src="resources/themes/images/default/edit_icon.png" width="30px"></img><img src="resources/themes/images/default/edit_icon2.png" width="30px" style="display:none;"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.077
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-cbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/phone_icon.png" width="30px"></img><img src="resources/themes/images/default/phone_icon2.png" width="30px" style="display:none;"></img>'
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
						html: '<img src="resources/themes/images/default/add_icon.png" width="30px"></img><img src="resources/themes/images/default/add_icon2.png" width="30px" style="display:none;"></img>'
					},
					{
						xtype: 'spacer',
						//width: 30,
						//flex: 60/640,
						flex: 0.078
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-cbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/email_icon.png" width="30px"></img><img src="resources/themes/images/default/email_icon2.png" width="30px" style="display:none;"></img>'
					},
					{
						xtype: 'spacer',
						//width: 26,
						//flex: 52/640,
						flex: 0.1125
                	},
				]
			}
		]
	},
	initComponent: function(){
		Af.detailusers.panel.superclass.initComponent.call(this);
	}
});