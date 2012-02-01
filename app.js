Ext.ns("Af");


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

    launch: function() {
		 Ext.Loader.setConfig({enabled:true,paths:{Af:"src"}});
         form =  Ext.create("Af.panel", {
            fullscreen: true,
        });
		Ext.Viewport.add(form);
		form.setActiveItem(1, 'fade');
		

    }
});