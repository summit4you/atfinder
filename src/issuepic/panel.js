function tagsButtonHandler(b, event){
	if (b.getCls()=="tag-cbutton"){
		b.setCls("tag-cbutton-pressed");
		
	}else{
		b.setCls("tag-cbutton");
	}
}
Ext.define('Af.issuepic.panel',{
	extend: 'Ext.Panel',
	xtype: 'af-issuepic-panel',
	config: {
		height: '960',
		width: '640',
		layout: 'vbox',
		cls: 'af-issuepic-panel',
		id: 'issuepicpanel',
		items: [
				{			
				xtype: 'navigationbar',
				docked: 'top', 
				title: '<b>发布图片</b>',
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
			// photo fetch part
			{
				xtype: 'formpanel',
				cls: 'issuepic-formpanel',
				items: [{
						xtype: 'panel',
						cls: 'photo-src',
						layout: 'hbox',
						items: [
							{
								xtype: 'panel',
								cls: 'form-label',
								html: '图片',
								flex: 1
							},
							{
								xtype: 'button',
								cls: 'form-button',
								pressedCls: 'form-button-pressed',
								baseCls: 'x-button-af',
								html: '拍&nbsp;&nbsp;照',
								flex: 2
							},
							{
								xtype: 'button',
								cls: 'form-button',
								pressedCls: 'form-button-pressed',
								baseCls: 'x-button-af',
								html: '手机相册',
								flex: 2
							}
						]
				},{
						xtype: 'panel',
						cls: 'tags-panel',
						items: [
						{
							xtype: 'textareafield',
							id: 'tags',
							name: 'tags',
							placeHolder: '图片描述..',
							useClearIcon: true,
							flex:1
						}],
						
					},
					{
						xtype: 'panel',
						cls: 'tags-list',
						layout:'hbox',
						items:[
							{
								xtype:'button',
								cls: 'tag-cbutton',
								baseCls: 'x-button-af',
								height: '30px',
								html: '<b>电子电器</b>',
								handler: tagsButtonHandler,
							},
							{
								xtype:'button',
								cls: 'tag-cbutton',
								baseCls: 'x-button-af',
								height: '30px',
								html: '<b>演唱会</b>',
								handler: tagsButtonHandler,
							},
							{
								xtype:'button',
								cls: 'tag-cbutton-pressed',
								baseCls: 'x-button-af',
								height: '30px',
								html: '<b>美食</b>',
								handler: tagsButtonHandler,
							},
							{
								xtype:'button',
								cls: 'tag-cbutton',
								baseCls: 'x-button-af',
								height: '30px',
								html: '<b>宠物</b>',
								handler: tagsButtonHandler,
							},
							{
								xtype:'button',
								cls: 'tag-cbutton',
								baseCls: 'x-button-af',
								height: '30px',
								html: '<b>日用百货</b>',
								handler: tagsButtonHandler,
							},
							{
								xtype:'button',
								cls: 'tag-cbutton',
								baseCls: 'x-button-af',
								height: '30px',
								html: '<b>娱乐</b>',
								handler: tagsButtonHandler,
							},
							{
								xtype:'button',
								cls: 'tag-cbutton',
								baseCls: 'x-button-af',
								height: '30px',
								html: '<b>精品</b>',
								handler: tagsButtonHandler,
							},
							{
								xtype:'button',
								cls: 'tag-cbutton',
								baseCls: 'x-button-af',
								height: '30px',
								html: '<b>优惠卷</b>',
								handler: tagsButtonHandler,
							},
							{
								xtype:'button',
								cls: 'tag-cbutton',
								baseCls: 'x-button-af',
								height: '30px',
								html: '<b>衣服</b>',
								handler: tagsButtonHandler,
							},
						]
					}
					
				],
				flex:1
			},
			{
				//73 60 48 60 49 60 48 60 50 60 72
				xtype : 'navigationbar',
            	docked: 'bottom', 	
				height: 40,
				ui: 'af2',
				layout: 'vbox',
				items:[
					{
						xtype: 'spacer',
						//width: 25,
						//flex: 50/640,
						flex: 0.37
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-cbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/ok_icon.png" width="30px"></img>'
					},
					{
						xtype: 'spacer',
						width: 25,
						//flex: 61/640,
						//flex: 0.078
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-cbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/forward_icon.png" width="30px"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.364
                	},
					
				]
			}
				]
	}
})
