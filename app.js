Ext.ns("Af");

var daddy;
var lastPanel = null;

function changePanel(id){
	lastPanel = daddy.getActiveItem();
	daddy.setActiveItem(Ext.getCmp(id), 'fade');
}

Ext.require([
	'Ext.Loader'
]);

Ext.application({
    name: 'Af',
	icon: 'resources/icon.png',
    tabletStartupScreen: 'resources/tablet_startup.png',
    phoneStartupScreen: 'resources/phone_startup.png',
    glossOnIcon: true,
    fullscreen: true,
	requires: [
	'Ext.data.Store',
	'Ext.field.Number',
	'Ext.form.Panel',
	'Ext.field.Password',
	'Ext.TitleBar',
	'Ext.tab.Panel',
	'Ext.dataview.List',
	'Ext.carousel.Carousel'
	],

    launch: function() {
		 Ext.Loader.setConfig({enabled:true,paths:{Af:"src"}});
         daddy =  Ext.create("Af.panel", {
            fullscreen: true,
        });
		Ext.Viewport.add(daddy);
		if (localStorage.getItem('visited')==null){
			//第一次访问进入guid
			//form.setActiveItem(Ext.getCmp('guidpanel'), 'fade');
			localStorage.setItem('visited', true)
		}else{
			daddy.setActiveItem(Ext.getCmp('loginpanel'), 'fade');
			Ext.getCmp('activities-carousel').updateStore(activitiesstore);
		}

    }
});