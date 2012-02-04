Ext.define('Af.inviting.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-inviting-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'invitingpanel',
		// scroll: true,
		items:[
			{
				xtype: 'navigationbar',
				docked: 'top', 
				title: '<b>邀请好友</b>',
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
								html: '<img src="resources/themes/images/default/return_icon.png"></img>'
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
				xtype: 'formpanel',
				cls: 'inviting-formpanel',
				items: [
					{
						xtype: 'panel',
						cls: 'inviting-name-panel',
						items: [
						{
							xtype: 'textfield',
							name: 'name',
							placeHolder: '张筱雨',
							useClearIcon: true,
						}],
						
					},
					{
						xtype: 'panel',
						cls: 'inviting-phone-panel',
						items: [
						{
							xtype: 'numberfield',
							name: 'phonenumber',
							placeHolder: '15012378921',
							useClearIcon: true,
						}],
					},
					{
						xtype: 'panel',
						cls: 'inviting-tips-panel',
						html:'请填写对方手机号，无需注册',
					},
					{
						xtype: 'button',
						cls: 'inviting-cbutton',
						baseCls: 'x-button-af',
						height: '30px',
						html: '<b>邀&nbsp;&nbsp;请</b>',
					},
					{
						xtype: 'panel',
						cls: 'inviting-pre-title',
						html: '短信预览'
					},
					{
						xtype: 'panel',
						cls: 'inviting-pre-panle',
						html: '<div class="inviting-pre-content">张筱雨，我是谢子琪。我在爱发现上建立了个人主页，邀请你也加入并成为我的好友。你的账号是15012378921，初始密码是QD123456。</div>'
					}
				],
				flex:1
			}
		]
	},
	initComponent: function(){
		Af.inviting.panel.superclass.initComponent.call(this);
	}
});