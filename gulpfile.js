const elixir = require('laravel-elixir');

//require('laravel-elixir-vue');

elixir(mix => {
	mix.styles([
		'./node_modules/bootstrap/dist/css/bootstrap.css',
		'./node_modules/font-awesome/css/font-awesome.css',
	], 'public/css/vendor.css');

	mix.copy('./node_modules/bootstrap/dist/fonts', 'public/fonts');
	mix.copy('./node_modules/font-awesome/fonts', 'public/fonts');


	mix.scripts([
		'./node_modules/jquery/dist/jquery.js',
		'./node_modules/bootstrap/dist/js/bootstrap.js',
	], 'public/js/vendor.js');
});