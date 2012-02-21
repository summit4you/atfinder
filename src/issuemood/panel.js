Ext.define('Af.issuemood.panel', {
	extend: 'Ext.Panel',
	xtype: 'af-issuemood-panel',
	config: {
		height: '960',
		width: '640',
		layout: 'vbox',
		id: 'issuemoodpanel',
		scroll: true,
		cls: 'af-issuemood-panel',
		items: [
			{
				xtype: 'navigationbar',
				docked: 'top', 
				title: '<b>发布心情</b>',
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
	initComponent: function(){
		Af.issuemood.panel.superclass.initComponent.call(this);
	}
});
