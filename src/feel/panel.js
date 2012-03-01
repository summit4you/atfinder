
function tagsButtonHandler(b, event){
	if (b.getCls()=="tag-cbutton"){
		b.setCls("tag-cbutton-pressed");
		
	}else{
		b.setCls("tag-cbutton");
	}
}

Ext.define('Af.feel.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-feel-panel',
	config: {
		cls: 'af-vote-panel',
		height: '480',
		width: '320',
		layout:'vbox',
		id:'feelpanel',
		scrollable: {
        	direction: 'vertical'
   		},
		items:[
			{
				xtype: 'titlebar',
				ui: 'af',
				docked: 'top', 
				title: '发布心情',
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
								style:'margin-top: 10px;',
								component: {
									
										xtype: 'button',
										cls: 'form-button',
										pressedCls: 'form-button-pressed',
										baseCls: 'x-button-af',
										html: '发&nbsp;&nbsp;布',
										style:'margin-left:0;',
										flex: 1
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