
function tagsButtonHandler(b, event){
	if (b.getCls()=="tag-cbutton"){
		b.setCls("tag-cbutton-pressed");
		
	}else{
		b.setCls("tag-cbutton");
	}
}

Ext.define('Af.tipoff.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-tipoff-panel',
	config: {
		cls: 'af-vote-panel',
		height: '480',
		width: '320',
		layout:'vbox',
		id:'tipoffpanel',
		scrollable: {
        	direction: 'vertical'
   		},
		items:[
			{
				xtype: 'titlebar',
				ui: 'af',
				docked: 'top', 
				title: '发布爆料',
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
						html: '<div style="text-align:left"><img src="resources/themes/images/default/return_icon.png" height="25px"></img></div>',	
						handler: function() {
							changePanel(lastPanel.id);
						}	
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
						html: '<div style="text-align:right"><img src="resources/themes/images/default/enter_icon.png" width="29px"></img></div>'
					
					}
				]
			},
			{
				xtype: 'formpanel',
				cls: 'vote-formpanel',
				items: [
				{
						xtype: 'fieldset',
						cls:'vote-fieldset',
						items: [
							{
								xtype: 'textfield',
								name : 'title',
								label: '标题',
								labelWidth : 'auto',
								labelCls: 'vote-form-label',
								cls: 'vote-field',
								placeHolder:'雪花牛排'
							},
							{
								xtype: 'field',
								label: '地点',
								labelWidth : 'auto',
								labelCls: 'vote-form-label',
								isField: false,
								
								component: {
									
										xtype: 'button',
										cls: 'form-button',
										pressedCls: 'form-button-pressed',
										baseCls: 'x-button-af',
										html: '地&nbsp;&nbsp;图',
										style:'margin-left: 15px;',
										flex: 1
								}
							 },
							{
								xtype: 'field',
								label: '图片',
								labelWidth : 'auto',
								labelCls: 'vote-form-label',
								isField: false,
								
								component: {
									xtype:'panel',
									layout:'hbox',
									items:[
										{
											xtype: 'button',
											cls: 'form-button',
											pressedCls: 'form-button-pressed',
											baseCls: 'x-button-af',
											html: '拍&nbsp;&nbsp;照',
											style:'margin-left: 15px;',
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
								}
							  },
							  {
								xtype: 'field',
								labelWidth : 'auto',
								labelCls: 'vote-form-label',
								isField: false,
								
								component: {
									xtype:'panel',
									layout:'hbox',
									items:[
										{
											xtype: 'panel',
											html: '<img src="resources/themes/images/default/tipoff.png" height="100" width="100"/>',
										},
										{
											xtype: 'textareafield',
											id: 'vote-content',
											name: 'vote-content',
											placeHolder: '内容描述...',
											clearIcon: true,
											height:100,
											cls:'vote-content',
											style:'margin-left:10px;',
											flex:1
							 			},
									]
								}
							  },
							  {
									xtype: 'textareafield',
									id: 'vote-content',
									name: 'vote-content',
									placeHolder: '正文内容...',
									clearIcon: true,
									height:100,
									cls:'vote-content',
									style:'margin-top:10px;',
									flex:1
							 },				
							 {
								xtype: 'field',
								labelWidth : 'auto',
								labelCls: 'vote-form-label',
								isField: false,
								
								component: {
									xtype:'panel',
									layout:'hbox',
									cls: 'tags-list',
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
							  },
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