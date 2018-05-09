# jsreferencer-env-js
<img alt="Book illustration" src="./books-stack-of-three.svg" align="left"/>

*JSReferencer-Env-JS* is a **documentation dataset** for Javascript.
This is a JSON file storing a documentation of each property available in JavaScript, it is basically designed for the JSReferencer library (currently under development), but you can use it for other purposes.
Everyone is free to participate in the improvement of this open-source documentation by following the participation guide below.

You can install jsreferencer-env-js via Npm or Yarn.
```bash
    npm install jsreferencer-env-js --save
```
Or:
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
No method is present in the package, only the documentation as a standard object.
#### Some properties you can use
The name of the environment.
```JavaScript
    documentation.name = "JavaScript"
```
The version of environment.
```JavaScript
    documentation.version = "es6"
```
Dependencies of the environment, Rest assured, the native javascript environment has no dependencies.
```JavaScript
    documentation.dependencies = []
```
This object is the **one on which you can read the documentation**. It contains a multitude of sub-objects with the type, a description, its sub-properties etc.
```JavaScript
    documentation.globals = { ... }
```
#### Other properties specific to the JSReferencer library: (You can ignore them)
```JavaScript
    documentation.packages
```
## You want help ?

Just fill in the JSON file on Github, you can add descriptions, add the types of properties, you can add new objects if they are not already referencing, your help is precious but be careful to respect the file structure . Thanks you :)
### Understand the file structure
First there is the header, it is the one that is described at the top of this Readme.md, it is composed of several properties, `name`, `version`, `identifier`, `dependencies`.

Finally, the body of the file is stored in the `globals` property. Which defines the set of objects, classes and methods accessible from the "window" object.
Each object to a type, which can be `"class"`, `"interface"`, or the name of classes of which it is instantiated for example `"HTMLElement"`.

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
