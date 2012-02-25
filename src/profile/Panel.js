Ext.define('Af.profile.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-profile-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'profilepanel',
		scrollable: {
        	direction: 'vertical'
   		},
		items:[
			{
				xtype: 'titlebar',
				docked: 'top', 
				title: 'Me',
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
						html: '<div style="text-align:left"><img src="resources/themes/images/default/setting_icon.png" height="25px"></img></div>',	
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
				xtype: 'panel',
				layout: 'hbox',
				height: 75,
				items: [
					{
						xtype: 'panel',
						width:75,
						html: '<img src="resources/themes/images/default/user_img.png" style="width:100%;height:100%;"/>',
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
									html: '<ul><li class="name">赵亚轩</li><li><span>等级：</span><span class="level"><img src="resources/themes/images/default/level_star.png"/></span><span class="level"><img src="resources/themes/images/default/level_star.png"/></span><span class="level"><img src="resources/themes/images/default/level_star.png"/></span></li><li><span>积分：</span>2571</li></ul>'
								},
								{
									xtype: 'panel',
									cls: 'hot-panel',
									width: 40,
									html: '381',
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
				html:'<div class="profile-panel-content">今天的天气很好啊~发现了一家很好的甜品店，真的很好吃啊...</div><div class="profile-panel-subject"><ul><li><a href="#">#美食</a></li><li><a>#衣服</a></li><li><a>#衣服</a></li></ul><div>'
			},
			{
				xtype: 'panel',
				cls: 'profile-panel-1',
				html:'<div class="profile-panel-content">西式餐馆&nbsp;&nbsp;&nbsp;&nbsp;地址: 天河粤垦路188号<br/>距离：0.8km..</div><div class="profile-panel-subject"><ul><li><a>#美食</a></li></ul><div>'
			},
			{
				xtype: 'panel',
				cls: 'profile-panel-1',
				html: '<div class="profile-panel-row-bottom"><div class="profile-panel-cell-left">关&nbsp;&nbsp;注&nbsp;&nbsp;<b>336</b></div><div class="profile-panel-cell-right">&nbsp;<img src="resources/themes/images/default/like.png" width="16" height="16"/>&nbsp;&nbsp;&nbsp;<b>1046</b></div></div><div class="profile-panel-row"><div class="profile-panel-cell-left">粉&nbsp;&nbsp;丝&nbsp;&nbsp;<b>457</b></div><div class="profile-panel-cell-right">留&nbsp;&nbsp;言&nbsp;&nbsp;<b>602</b></div></div>'
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
				xtype: 'panel',
				cls: 'profile-class-title',
				html: '<b>好&nbsp;&nbsp;友</b>'
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
						html: '<img src="resources/themes/images/default/me_find_icon.png" width="21"/><span class="class-title">寻找好友</span>',
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
						html: '<img src="resources/themes/images/default/me_invite_icon.png" width="21"/><span class="class-title">邀请好友</span>',
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
				html: '<b>客户端</b>'
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
						html: '<img src="resources/themes/images/default/me_setting_icon.png" width="21"/><span class="class-title">系统设置</span>',
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
						html: '<img src="resources/themes/images/default/me_account_icon.png" width="21"/><span class="class-title">帐户管理</span>',
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
						html: '<img src="resources/themes/images/default/me_bind_icon.png" width="21"/><span class="class-title">绑定</span><span style="padding-left:25px"><img src="resources/themes/images/default/me_weibo_icon.png" width="24"/></span>',
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
						html: '<img src="resources/themes/images/default/me_advice_icon.png" width="21"/><span class="class-title">意见反馈</span>',
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
						html: '<img src="resources/themes/images/default/me_about_icon.png" width="21"/><span class="class-title">关于</span>',
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
				html: '<b>支持爱发现</b>'
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
						html: '去给爱发现打个分，评价一下',
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
						html: '精品应用推荐',
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
				xtype: 'button',
				cls: 'cbutton',
				baseCls: 'x-button-af',
				pressedCls: 'cbutton-pressed',
				height: '35px',
				flex:1,
				html: '<div style="height:35px;line-height:35px;"><img src="resources/themes/images/default/me_off.png" height="18px"></img></div>'
			},
			{
				xtype : 'toolbar',
            	docked: 'bottom', 	
				height: 45,
				ui: 'af',
				layout: {
					type:'hbox',
					align:'center',
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
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/feed_icon.png" width="25"></img>',
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
						html: '<img src="resources/themes/images/default/shopping_icon.png" width="25"></img>',
						
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
						html: '<img src="resources/themes/images/default/heart_icon.png" width="29"></img>',
						
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
						html: '<img src="resources/themes/images/default/activi_icon.png" width="25"></img>',
						
					},
					{
						xtype: 'spacer',
						//width: 30,
						//flex: 60/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/s_me_icon.png" width="26"></img>',
					},
					{
						xtype: 'spacer',
						//width: 26,
						//flex: 52/640,
						flex: 0.08125
                	},
				]
			}
		]
	},
	initialize: function(){
		this.callParent();
	}
});