Router.configure({
	layoutTemplate: 'layout'
});

Router.onRun(function() {
	$('body,html').scrollTop(0);
});

Router.map(function() {
	//Home
	this.route('homePage', { path: '/' });
	
	this.route('webDevDesign', { path: '/web-dev-design' });
	this.route('music', { path: '/music' });
	this.route('director', { path: '/director' });
	this.route('video', { path: '/video' });
	this.route('education', { path: '/education' });
	this.route('contact', { path: '/contact' });
});

