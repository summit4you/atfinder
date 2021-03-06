
function tagsButtonHandler(b, event){
	if (b.getCls()=="tag-cbutton"){
		b.setCls("tag-cbutton-pressed");
		
	}else{
		b.setCls("tag-cbutton");
	}
}

Ext.define('Af.issuecoupon.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-issuecoupon-panel',
	config: {
		cls: 'af-vote-panel',
		height: '480',
		width: '320',
		layout:'vbox',
		id:'issuecouponpanel',
		scrollable: {
        	direction: 'vertical'
   		},
		items:[
			{
				xtype: 'titlebar',
				ui: 'af',
				docked: 'top', 
				title: '发布优惠券',
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
						handler:function(){
							changePanel(lastPanel.id); // because the ref pass , I must use the id instead of object
							
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
						html: '<div style="text-align:right"><img src="resources/themes/images/default/enter_icon.png" width="29px"></img></div>',
						handler:function(){
							alert('发布成功');
							
						}
					
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
								label: '名称',
								labelWidth : 'auto',
								labelCls: 'vote-form-label',
								cls: 'vote-field',
								placeHolder:''
							},
							{
								xtype:'panel',
								layout:'hbox',
								items:[
									{
										xtype: 'textfield',
										name : 'title',
										label: '现价',
										labelWidth : 'auto',
										labelCls: 'vote-form-label',
										cls: 'vote-field vote-field2',
										placeHolder:'',
										flex:1,
									},
									{
										xtype: 'textfield',
										name : 'title',
										label: '原价',
										labelWidth : 'auto',
										labelCls: 'vote-form-label',
										cls: 'vote-field vote-field2',
										placeHolder:'',
										flex:1,
									},
								]
							},
							{
								xtype: 'textfield',
								name : 'title',
								label: '时效',
								labelWidth : 'auto',
								labelCls: 'vote-form-label',
								cls: 'vote-field',
								placeHolder:''
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
								xtype: 'textareafield',
								id: 'vote-content',
								name: 'vote-content',
								placeHolder: '请输入优惠券描述，并选择标签......',
								clearIcon: true,
								height:135,
								cls:'vote-content',
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