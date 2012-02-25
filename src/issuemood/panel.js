Ext.define('Af.issuemood.panel', {
	extend: 'Ext.Panel',
	xtype: 'af-issuemood-panel',
	config: {
		height: '960',
		width: '640',
		layout: 'vbox',
		id: 'issuemoodpanel',
		scrollable: {
					direction: 'vertical'
		},
		cls: 'af-issuemood-panel',
		items: [
			{
				xtype: 'titlebar',
				docked: 'top', 
				title: '<b>发布心情</b>',
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
						html: '<img src="resources/themes/images/default/return_icon.png" width="29px"></img>',
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
						html: '<img src="resources/themes/images/default/enter_icon.png" width="25px"></img>',
						width: 45,
					}
					
				
				]
			},
			// form
			{
				xtype: 'formpanel',
				cls: 'issuemood-formpanel',
				items: [
					{
						xtype: 'panel',
						cls: 'issuemood-panel',
						items: [
						{
							xtype: 'textareafield',
							id: 'mood',
							name: 'mood',
							placeHolder: '吐吧吐吧...',
							//useClearIcon: true,
						}],
					},
					{
						xtype: 'button',
						cls: 'login-cbutton',
						pressedCls: 'login-cbutton-pressed',
						baseCls: 'x-button-af',
						height: '30px',
						html: '<b>发&nbsp;&nbsp;布</b>',
					},
				]
			},
			
		]
	},
	initialize: function(){
		this.callParent();
	}
});
