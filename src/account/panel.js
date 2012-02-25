
function tapChangeButtonColor(button, event){
		if (button.getCls()=='account-button')
		{
			button.setCls('account-button-clicked');
		}else
		{
			button.setCls('account-button');
		}
}

Ext.define('Af.account.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-account-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'accountpanel',
		self: this,
		// scroll: true,
		items:[
			{
				xtype: 'titlebar',
				docked: 'top', 
				title: '<b>绑&nbsp;&nbsp;定</b>',
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
						html: '<div style="text-align:left"><img src="resources/themes/images/default/return_icon.png" height="25px"></img></div>',	
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
				cls: 'account-formpanel',
				items: [
					{
						xtype: 'panel',
						cls: 'account-number-panel',
						items: [
						{
							xtype: 'textfield',
							name: 'account',
							placeHolder: '帐号',
							clearIcon: true,
						}],
						
					},
					{
						xtype: 'panel',
						cls: 'account-psw-panel',
						items: [
						{
							xtype: 'passwordfield',
							name: 'psw',
							placeHolder: '密码',
							clearIcon: true,
						}],
					},
					{
						xtype: 'button',
						cls: 'account-cbutton',
						pressedCls: 'account-cbutton-pressed',
						baseCls: 'x-button-af',
						height: '30px',
						html: '<b>绑&nbsp;&nbsp;定</b>',
					},
					{
						xtype: 'panel',
						cls: 'account-button-panle',
						items: [
							{
								xtype:'button',
								cls:'account-button-clicked',
								baseCls: 'x-button-af',
								html: '<img src="resources/themes/images/default/account_weibo.png"></img>',
								handler: tapChangeButtonColor,
							},
							{
								xtype:'button',
								cls:'account-button',
								baseCls: 'x-button-af',
								html: '<img src="resources/themes/images/default/account_weibo2.png"></img>',
								handler: tapChangeButtonColor,
							},
							{
								xtype:'button',
								cls:'account-button',
								baseCls: 'x-button-af',
								html: '<img src="resources/themes/images/default/account_weibo3.png"></img>',
								handler: tapChangeButtonColor,
							},
							{
								xtype:'button',
								cls:'account-button',
								baseCls: 'x-button-af',
								html: '<img src="resources/themes/images/default/account_weibo4.png"></img>',
								handler: tapChangeButtonColor,
							}
						]
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