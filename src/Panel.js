Ext.define('Af.panel', {
	
	extend: 'Ext.Panel',
	requires: ['Af.login.panel', 'Af.profile.panel'],
	config:{
		fullscreen: true,
		layout: 'card',
		activeItem: 1,
		cardSwitchAnimation: 'slide',
		items:[
			{ 
				xtype: 'af-login-panel',
				id: 'loginpanel'
			},
			{
				xtype: 'af-profile-panel',
				id: 'profilepanel'
			}
		]
	},
	initComponent: function(){
		
		Af.panel.superclass.initComponent.call(this);
		// this.mon(Ext.getCmp('loginpanel'), 'login', this.showHomePanel, this);
	}
		
});