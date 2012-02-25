
Ext.define('Af.discover.panel', {
	
	extend: 'Ext.Panel',
	xtype: 'af-discover-panel',
	config: {
		height: '960',
		width: '640',
		layout: 'vbox',
		id: 'discoverpanel',
		scrollable: {
					direction: 'vertical'
		},
		items: [
// top bar
			{
				xtype: 'titlebar',
				ui: 'af',
				docked: 'top', 
				height: 30,
				title: '<b>发&nbsp;&nbsp;现</b>',
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
					}
				]
			},
// bottom bar
			{
				xtype : 'toolbar',
            	docked: 'bottom', 	
				height: 45,
				ui: 'af',
				layout: {
					type:'hbox',
					align:'center'
				},
				items:[
					{
						xtype: 'spacer',
						//width: 25,
						//flex: 50/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/feed_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 30,
						//flex: 61/640,
						flex: 0.0953125
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/shopping_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						cls: 'button',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/s_heart_icon.png" width="37"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.125
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/activi_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 30,
						//flex: 60/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/me_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 26,
						//flex: 52/640,
						flex: 0.08125
                	},
				]
			},
// forward button			
			{
				xtype: 'panel',
				cls: 'discover-forward-button',
				id: 'discover-forward-button',
				html: '<img src="resources/themes/images/default/discover/discover_r7_c80.png"></img>',
				listeners: { // TODO: not works
					click:{
						fn: function() {
							alert('3');
							Ext.getCmp('discover-carousel').setActiveItem(1-Ext.getCmp('discover-carousel').getActiveIndex());
						},
						element: 'element' //  sencha touch 2 RC change please see http://www.sencha.com/forum/showthread.php?176239-HOWTO-Adding-Event-Listeners-to-Component-Elements element: 'element'
					},
				},
				
			},
// content
			{
				xtype:'carousel',
				// TODO: use height: '850' will be nothing out.
				//height: 650,
				flex: 1,
				indicator:false,
				id:'discover-carousel',
				
				listeners:{
					activeitemchange: function(o, v, ov){
						if (o.getActiveIndex()==0){
							Ext.getCmp('discover-forward-button').setHtml('<img src="resources/themes/images/default/discover/discover_r7_c80.png"></img>');
						}else{
							Ext.getCmp('discover-forward-button').setHtml('<img src="resources/themes/images/default/discover/discover_r29_c82.png"></img>');
						}
					}
				},
				activeItem: 0, // TODO: not works
				items:[
						{
							xtype: 'panel',
							ui: 'af',
							layout: 'vbox',
							items: [
								{
									xtype: 'panel',
									cls: 'discover-title',
									html: '<img src="resources/themes/images/default/discover/discover_r1_c21.png"></img>'
								},
								{
									xtype: 'panel',
									cls: 'discover-buttons',
									layout: 'hbox',
									items: [
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r7_c41.png"></img>'
										},
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r7_c61.png"></img>'
										}
									]
								},
								{
									xtype: 'panel',
									cls: 'discover-buttons',
									layout: 'hbox',
									items: [
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r22_c41.png"></img>'
										},
									]
								},
							]
							
						},
						{
							xtype: 'panel',
							ui: 'af',
							layout: 'vbox',
							items: [
								{
									xtype: 'panel',
									cls: 'discover-title',
									html: '<img src="resources/themes/images/default/discover/discover_r26_c19.png"></img>'
								},
								{
									xtype: 'panel',
									cls: 'discover-buttons',
									layout: 'hbox',
									items: [
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r31_c41.png"></img>'
										},
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r31_c61.png"></img>'
										}
									]
								},
								{
									xtype: 'panel',
									cls: 'discover-buttons',
									layout: 'hbox',
									items: [
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r39_c41.png"></img>'
										},
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r39_c61.png"></img>'
										}
									]
								},
								{
									xtype: 'panel',
									cls: 'discover-buttons',
									layout: 'hbox',
									items: [
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r57_c41.png"></img>'
										},
									]
								},
								
							]
							
						}
					],
			},
		]
	}
});
