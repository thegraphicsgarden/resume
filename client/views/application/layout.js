/*var path;

findPath = function () {
	path = Router.current().path;
	console.log(path);
	return path;
};

Template.layout.helpers({
	activePage: findPath()
});

Handlebars.registerHelper("greaterThan2010", function (year) {
	return year > 2010;
});*/

Template.layout.rendered = function () {
	$.getScript( '/javascript/jason.js');
};