Ext.define('Af.guid.panel', {
	extend: 'Ext.Panel',
	xtype: 'af-guid-panel',
	config: {
		layout:'card',
		height: '480',
		width: '320',
		items:[
			{
				xtype:'carousel',
				height: '480',
				items:[
					{ html:'<img src="resources/themes/images/default/guid/1.jpg"  width="100%" />'},
					{ html:'<img src="resources/themes/images/default/guid/2.jpg"  width="100%" />'},
					{ html:'<img src="resources/themes/images/default/guid/3.jpg"  width="100%" />'},
					{ html:'<img src="resources/themes/images/default/guid/4.jpg"  width="100%" />'},
					{ html:'<img src="resources/themes/images/default/guid/5.jpg"  width="100%" />'},
					{ html:'<img src="resources/themes/images/default/guid/6.jpg"  width="100%" />'},
					{ html:'<img src="resources/themes/images/default/guid/7.jpg"  width="100%" />'},
				],
				listeners:{
					cardswitch: function(container, newCard, oldCard, index){
						alert('ew');
						if (this.getActiveIndex()==6){
							alert(this.getActiveIndex());
							Ext.getCmp('main-panel').setActiveItem(0, 'fade');
						}else
							this.next();
					}
				}
			},
		],
	},
	initialize: function(){
		this.on({cardswitch: function(container, newCard, oldCard, index){
						alert('ew');
						if (this.getActiveIndex()==6){
							alert(this.getActiveIndex());
							Ext.getCmp('main-panel').setActiveItem(0, 'fade');
						}else
							this.next();
					}});
		this.callParent();
	}
	
});