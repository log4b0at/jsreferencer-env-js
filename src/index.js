const documentation = require('./env.javascript.json');

documentation.find = function(array){
	
	let globals = documentation.globals,
	    found = globals,
		element;
		
	for(let member of array) {
		
		element = found[member];
		
		if(element) {
			let properties = element.properties;
			let staticProperties = element.staticProperties;
			
			if(properties && staticProperties) {
				found = Object.assign(properties, staticProperties);
			}
			else if(properties) {
				found = properties;
			}
			else{
				return element;
			}
		}
		else return false;
	}
	
	return element;

}

documentation.findByPattern = function(pattern) {
	return documentation.find( pattern.split('.') );
}

documentation.search = function ( elementToSearch, searshOptions ) {
	let found = {};
	let whereSearch;
	
	if(elementToSearch == documentation) {
		whereSearch = elementToSearch.globals;
	}
	else if(elementToSearch.properties && elementToSearch.staticProperties){
		whereSearch = Object.assign(elementToSearch.properties, elementToSearch.staticProperties);
	}
	else if(elementToSearch.properties){
		whereSearch = elementToSearch.properties;
	}
	
	if(typeof searshOptions == 'string') {
		for(let i in whereSearch) {
			let property = whereSearch[i];
			if(i.indexOf(searshOptions) != -1) found[i] = property;
		}
	}
	else if(searshOptions instanceof Object) {
		for(let i in whereSearch) {
			let property = whereSearch[i];
			let have = true;
			for(let j in searshOptions) {
				if(property[j] != searshOptions[j]) {
					have = false;
				}
			}
			if(have) found[i] = property;
		}
	}
	
	return found;
}

module.exports = documentation;