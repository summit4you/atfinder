Ext.define('Af.detailarticle.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-detailarticle-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'detailarticlepanel',
		// scroll: true,
		items:[
			{
				xtype: 'navigationbar',
				docked: 'top', 
				title: '<b>详&nbsp;&nbsp;情</b>',
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
			},	]
	},
	initComponent: function(){
		Af.detailarticle.panel.superclass.initComponent.call(this);
	}
});