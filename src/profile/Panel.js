Ext.define('Af.profile.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-profile-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'profilepanel',
		items:[
			{
				xtype: 'navigationbar',
				title: 'Me',
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
								cls: 'af-toolbar-button',
								baseCls: 'x-button-af',
								height:100,
								html: '<img src="resources/themes/images/default/setting_icon.png"></img>'
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
						cls: 'login-left-button',
						//align :'right',
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
				xtype : 'navigationbar',
            	docked: 'buttom', 	
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
						html: '<img src="resources/themes/images/default/heart_icon.png" width="29"></img>'
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
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/s_me_icon.png" width="25"></img>'
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
	initComponent: function(){
		Af.profile.panel.superclass.initComponent.call(this);
	}
});