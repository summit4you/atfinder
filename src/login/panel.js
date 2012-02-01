Ext.define('Af.login.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-login-panel',
	config: {
		cls: 'af-login-panel',
		height: '480',
		width: '320',
		layout:'vbox',
		id:'loginpanel',
		items:[
			{
				xtype: 'navigationbar',
				ui: 'af',
				title: '登 陆',
				items:[
					{
						xtype: 'panel',
						cls: 'login-left-button',
					},
					{
						xtype: 'spacer',
						cls: 'login-toolbar-spacer',
						width: 2,
						
                	},
					{
						xtype: 'spacer',
						cls: 'login-toolbar-spacer',
						width: 2,
						align : 'right',
					},
					{
						xtype: 'panel',
						cls: 'login-left-button',
						align :'right',
					},
				]
			},
			{
							xtype: 'panel',
							flex: 0.089,
						},
						{
							xtype: 'panel',
							layout: 'hbox',
							flex: 0.11,
							items: [{
								xtype: 'image',
								src: 'resources/themes/images/default/login_logo.png',
								width: 284,
								height: 96,
								centered: true
								}],
							
						},
						{
							xtype: 'panel',
							flex: 0.056
						},
						{
							xtype: 'formpanel',
							items: [
								{
									xtype: 'panel',
									items: [
									{
										xtype: 'numberfield',
										name: 'phonenumber',
										placeHolder: '15012378921',
										useClearIcon: true,
										width:'82%',
										centered:true
									}],
									flex: 0.42
								},
								{
									xtype: 'panel',
									flex: 0.16
								},
								{
									xtype: 'panel',
									flex: 0.42,
									items: [
									{
										xtype: 'passwordfield',
										name: 'password',
										placeHolder: '密码',
										useClearIcon: true,
										width:'82%',
										centered:true
									}]
								},
							],
							flex:0.211,
						},
						{
							xtype: 'panel',
							flex: 0.056
						},
						{
							xtype: 'panel',
							layout: 'hbox',
							
							flex: 0.067,
							items: [
								{
									xtype: 'panel',
									flex: 1,
								},
								{
									xtype: 'button',
									width:'80%',
									cls: 'login-button',
									html: '登  录'
								},
								{
									xtype: 'panel',
									flex: 1,
								},
							]
							
						},
						{
							xtype: 'panel',
							flex: 0.067
						},
						{
							xtype: 'panel',
							layout: 'hbox',
							items: [
								{
									xtype: 'panel',
									flex: 1,
								},
								{
									xtype: 'button',
									width:'80%',
									cls: 'login-button',
									html: '<img src="resources/themes/images/default/sina_logo.png" width="49px" height="40px"></img>新浪微博登录'
								},
								{
									xtype: 'panel',
									flex: 1,
								},
							],
							flex: 0.067
						},
						{
							xtype: 'panel',
							flex: 0.056,
							
						},
						{
							xtype: 'panel',
							layout: 'hbox',
							items: [
								{
									xtype: 'panel',
									flex: 1,
								},
								{
									xtype: 'button',
									width:'80%',
									cls: 'login-button',
									html: '马上注册一个'
								},
								{
									xtype: 'panel',
									flex: 1,
								},
							],
							flex: 0.067
						},
						{
							xtype: 'panel',
							flex: 0.072
						},
						{
							xtype: 'panel',
							layout: 'hbox',
							
							items:[
								{flex:"1"},
								{ 
									xtype:"button",
									cls:'login-help-button',
									html:'<img src="resources/themes/images/default/login_help.png" width="49px" height="40px"></img>'
								}
							],
							flex: 0.067
						},
						{
							xtype: 'panel',
							flex: 0.015
						},
			
		]
	},
	initComponent: function(){
		Af.login.panel.superclass.initComponent.call(this);
	}
});