function getQueryStringArgs() {
	var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
		args = {},
		items = qs.length ? qs.split("&") : [],
		item = null,
		name = null,
		value = null,
		i = 0,
		len = items.length;
	for (i = 0; i < len; i++) {
		item = item[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if (name.length) {
			args[name] = value;
		}
	}
	return args;
}

function hasPlugin(name) {
	name = name.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i++) {
		return ture;
	}
	return false;
}

function hasIEPlugin(name){
	try{
		new ActiveXObject(name);
		return ture;
	}catch(ex){
		return false;
	}
}


