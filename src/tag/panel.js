
function tagsButtonHandler(b, event){
	if (b.getCls()=="tag-cbutton"){
		b.setCls("tag-cbutton-pressed");
		
	}else{
		b.setCls("tag-cbutton");
	}
}

Ext.define('Af.tag.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-tag-panel',
	config: {
		cls: 'af-tag-panel',
		height: '480',
		width: '320',
		layout:'vbox',
		id:'tagpanel',
		scrollable: {
        	direction: 'vertical'
   		},
		items:[
			{
				xtype: 'titlebar',
				ui: 'af',
				docked: 'top', 
				title: '兴趣爱好',
				height: 30,
				items:[
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
			{
				xtype: 'formpanel',
				cls: 'tag-formpanel',
				items: [
					{
						xtype: 'panel',
						cls: 'tags-panel',
						items: [
						{
							xtype: 'textareafield',
							id: 'tags',
							name: 'tags',
							placeHolder: '请选择您感兴趣的标签...',
							clearIcon: true,
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
				xtype : 'toolbar',
            	docked: 'bottom', 	
				height: 40,
				ui: 'af2',
				layout: {
					type:'hbox',
					align:'center'
				},
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
	},
	initialize: function(){
		this.callParent();
	}
});