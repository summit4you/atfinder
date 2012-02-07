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
				cls: 'login-logo-panel',
				html:'<img src="resources/themes/images/default/logo_icon.png" height="45px"/>'
			},
			{
				
			}
		
		]
	},
	initComponent: function(){
		Af.login.panel.superclass.initComponent.call(this);
	}
});