Ext.define('Af.account.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-account-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'accountpanel',
		// scroll: true,
		items:[
			{
				xtype: 'navigationbar',
				docked: 'top', 
				title: '<b>绑&nbsp;&nbsp;定</b>',
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
			},	]
	},
	initComponent: function(){
		Af.account.panel.superclass.initComponent.call(this);
	}
});