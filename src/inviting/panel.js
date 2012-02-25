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
				xtype: 'titlebar',
				docked: 'top', 
				title: '<b>邀请好友</b>',
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
							clearIcon: true,
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
							clearIcon: true,
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
						pressedCls: 'inviting-cbutton-pressed',
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
	initialize: function(){
		this.callParent();
	}
});