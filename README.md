# jsreferencer-env-js
<img alt="Book illustration" src="./ignore/books-stack-of-three.svg" align="left"/>

*JSReferencer-Env-JS* is a **documentation dataset** for Javascript.
This is a JSON file storing a documentation of each property available in JavaScript, it is basically designed for the JSReferencer library (currently under development), but **you can use it for other purposes**.
Everyone is free to participate in the improvement of this open-source documentation by following the [participation guide](#you-want-help--frog) below.

## Getting Started

You can install **jsreferencer-env-js** via **npm** or **yarn**.
```bash
    npm install jsreferencer-env-js --save
```
```bash
    yarn add jsreferencer-env-js
```
## How it's work?
All the documentation is in a single file in JSON format (env.javascript.json).
It can be imported by NodeJS in this way:
```JavaScript
    const documentation = require('jsreferencer-env-js');
```
You can go see the JSON file directly to understand how the documentation is organized.
[env.javascript.json](https://github.com/log4b0at/jsreferencer-env-js/blob/master/env.javascript.json)

#### Useful methods
```JavaScript
documentation.find(['Object', 'hasOwnProperty'])
documentation.findByPattern('Object.hasOwnProperty')
```
These methods allow to do the same thing, it returns the sub-properties `"hasOwnProperty"` of its parent `"Object"`
```JavaScript
documentation.search(documentation, 'fi'); // Returns a list of all evaluable properties in the documentation.globals having "fi" in their name.
documentation.searsh(documentation, { type : 'Function', returnType: 'Number' }); // Return a list of all functions in documentation.globals
```
The search function will provide you with an object list corresponding to the characters you give it, if it's a string then it will look in the names that most closely match the input string.

The first parameter is where to look, if you specify `documentation` it will look in `documentation.globals`, if you specify an object obtained with the find method, it will look in `staticProperties` and `properties`.

#### Some properties you can use

```JavaScript
    documentation.name = "JavaScript" // The name of the environment.
    documentation.version = "es6" // The version of environment.
    documentation.dependencies = []
    /* Dependencies of the environment, Rest assured, the native javascript environment has no dependencies. */
```
This object is the **one on which you can read the documentation**. It contains a multitude of sub-objects with the type, a description, its sub-properties etc.
```JavaScript
    documentation.globals = { ... }
```
#### Others specific to the JSReferencer library: (You can ignore them)
```JavaScript
    documentation.type = "Environment";
    documentation.packages = [];
```
## You want help ? :frog:

Just fill in the JSON file on Github, you can add descriptions, add the types of properties, you can add new objects if they are not already referencing, your help is precious but be careful to respect the file structure . Thanks you :)
### Understand the file structure
First there is the header, it is the one that is described at the top of this Readme.md, it is composed of several properties, `name`, `version`, `identifier`, `dependencies`.

Finally, the body of the file is stored in the `globals` property. Which defines the set of objects, classes and methods accessible from the "window" object.
Each object to a type, which can be `"class"`, `"interface"`, or the name of classes of which it is instantiated for example `"HTMLElement"`.

#### Define a class

The type `"class"` indicates that the object you see can be instantiated, that is, its name can be used as a type.

Here is a concrete example:
```JavaScript
    "WebSocket": {
    	"type": "class",
    	"extends": "EventTarget",
    	"description": "A super cool WebSocket class!",
    	"properties": { ... }
    }
```
    
Here you define the class `WebSocket`, to signify that it is a class you will use the type `"class"`.
This class is a child of `EventTarget`, its parent class.
You have the right to fill `"extends"` with `"EventTarget"` because this class is defined a little further in the file.

The value of `"properties"` is an object containing all the properties of the **prototype**. Beside the value of `"staticProperties"`is similar but these properties will be affiliated to the **constructor**.
#### Define an object instance

Imagine that in JavaScript there is a `WebSocket` object instance under the name `"myPersonnalWebSocketForMe"`. So to declare it you will go to the JSON file, in documentation.globals and add this code:
```JavaScript
    globals: {
	    ... /* All others properties */
	    "myPersonalWebSocketForMe": {
		    "type": "WebSocket", // Specify the class name
		    "description": "My personnal websocket, you not allow to modify.",
		    "properties": {
			    "myUniqMethod": { type: "Function", returnType: "Number", ...  }
		    }
	    }
    }
```
For an object instance, only the following 2 properties are needed: `"type"`, `"description"`.
`"properties"` isn't needed if no particular property is given to the object.

For example the `document` object instance has no personal property, in fact it retrieves the methods given to its type: `HTMLDocument` and `Document`

#### Define a function
A function is more specific, it takes several additional parameters.
`"returnType"` : declares the type of return, it can be empty if the function is not deterministic in its typing.
`"arguments"`: a list of properties defining the arguments of the function.
Let's see a method of Object class for example:
```JavaScript
[...]
"isPrototypeOf": {
	"type": "Function",
	"returnType": "Boolean",
	"arguments": {
		"object": {
			"type": "Object",
			"description": "The object to verify"
		}
	},
	"description": "Verify if 'object' is prototype of this"
},
[...]
```
This is the end of this short tutorial, 
Thanks for your attention :)

L.S. - log4b0at
