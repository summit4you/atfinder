Ext.define('Af.login.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-login-panel',
	config: {
		cls: 'af-login-panel',
		height: '480',
		width: '320',
		layout:'vbox',
		id:'loginpanel',
		scroll: true,
		items:[
			{
				xtype: 'titlebar',
				height:30,
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
						width: 1,
						
                	},
					{
						xtype: 'spacer',
						cls: 'login-toolbar-spacer',
						width: 1,
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
				cls: 'login-logo-panel',
				html:'<img src="resources/themes/images/default/logo_icon.png" height="45px"/>'
			},
			{
				xtype: 'formpanel',
				cls: 'login-formpanel',
				items: [
					{
						xtype: 'panel',
						cls: 'login-number-panel',
						items: [
						{
							xtype: 'numberfield',
							name: 'phoneNumber',
							placeHolder: '15012378921',
							clearIcon: true,
						}],
						
					},
					{
						xtype: 'panel',
						cls: 'login-psw-panel',
						items: [
						{
							xtype: 'passwordfield',
							name: 'psw',
							placeHolder: '密码',
							clearIcon: true,
						}],
					},
					{
						xtype: 'panel',
						cls: 'login-verify-panel',
						layout:'hbox',
						items:[
							{
								xtype: 'passwordfield',
								name: '',
								placeHolder: '验证码',
								clearIcon: true,
								flex:1,
							},
							{
								xtype: 'button',
								cls: 'login-vbutton',
								pressedCls: 'login-vbutton-pressed',
								baseCls: 'x-button-af',
								html: '<b>获取验证码</b>',
								flex:1
							},
						]
					},
					{
						xtype: 'button',
						cls: 'login-cbutton',
						pressedCls: 'login-cbutton-pressed',
						baseCls: 'x-button-af',
						height: '30px',
						html: '<b>登&nbsp;&nbsp;录</b>',
					},
					{
						xtype: 'button',
						cls: 'login-cbutton',
						pressedCls: 'login-cbutton-pressed',
						baseCls: 'x-button-af',
						height: '30px',
						html: '<img src="resources/themes/images/default/sina_logo.png" height="20px" style="vertical-align:text-bottom;"/><b>新浪微博登陆</b>',
					},
					{
						xtype: 'button',
						cls: 'login-cbutton',
						pressedCls: 'login-cbutton-pressed',
						baseCls: 'x-button-af',
						height: '30px',
						html: '<b>马上注册一个</b>',
					},
					
				],
				flex:1
			},
			{
				xtype: 'panel',
				cls: 'login-rbutton-panel',
				items:[
					{
						xtype: 'button',
						cls: 'login-rbutton',
						docked: 'right',
						pressedCls: 'login-rbutton-pressed',
						baseCls: 'x-button-af',
						height: '30px',
						html: '<img src="resources/themes/images/default/q_icon2.png" height="30px"/>',
					}
				]
			},
		
		]
	},
	initialize: function(){
		this.callParent();
	}
});