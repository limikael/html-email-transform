import {getMatchingCssDeclarations, stringifyStyle, expandCssDeclarations, parseStyle} from "./css-util.js";
import {classStringToArray} from "./js-util.js";

export function inlineCss(node, cssRules) {
	if (typeof node=="string")
		return node;

	if (Array.isArray(node))
		return node.map(child=>inlineCss(child,cssRules))

	let selectors=[
		node.tagName,
		...classStringToArray(node.attributes.class).map(cls=>"."+cls)
	];

	let declarations=getMatchingCssDeclarations(cssRules,selectors);
	declarations={...declarations,...parseStyle(node.attributes.style)};
	declarations=expandCssDeclarations(declarations);
	//console.log(declarations);

	if (Object.keys(declarations).length)
		node.attributes.style=stringifyStyle(declarations);

	else
		delete node.attributes.style;

	delete node.attributes.class;

	node.children=inlineCss(node.children,cssRules);

	return node;
}

export function mapCssStyleValues(node, fn) {
	if (typeof node=="string")
		return node;

	if (Array.isArray(node))
		return node.map(child=>mapCssStyleValues(child,fn));

	let nodeStyle=parseStyle(node.attributes.style);
	for (let k in nodeStyle)
		nodeStyle[k]=fn(nodeStyle[k]);

	if (Object.keys(nodeStyle).length)
		node.attributes.style=stringifyStyle(nodeStyle);

	else
		delete node.attributes.style;

	node.children=mapCssStyleValues(node.children,fn);

	return node;
}

export function domRemToPx(node, size) {
	return mapCssStyleValues(node,value=>{
		value=value.trim();
		if (value.endsWith("rem")) {
			let remSize=parseFloat(value);
			let pxSize=remSize*size;
			value=Math.round(pxSize)+"px";
		}

		return value;
	});
}