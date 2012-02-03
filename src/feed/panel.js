Ext.define('Af.feed.panel', {
	
	extend: 'Ext.Panel',
	xtype: 'af-feed-panel',
	config: {
		cls: 'af-feed-panel',
		height: '960',
		width: '640',
		layout: 'vbox',
		id: 'feedpanel',
		items: [{
			xtype: 'navigationbar',
			title: '动态',
			ui: 'af',
			layout: 'vbox',
			height: 30,
			items: [
				{
					xtype: 'panel',
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
                    items: [{
                            xtype: 'button',
                            cls: 'af-toolbar-right-button',
                            baseCls: 'x-button-af',
                            height: 100,
							html: '<img src="resources/themes/images/default/feed_r1_c32.png"></img>'
                            }],
					flex:0.14
				},
			]
		}
		]
	},
	initComponent: function() {
		
			   Af.feed.panel.superclass.initComponent.apply(this);
	},
});