import {parse as parseCss} from "css";
import {evalCssExpr} from "./eval-css-expr.js";

export function parseCssRules(cssText) {
	let resRules=[];

	let cssDoc=parseCss(cssText);
	for (let rule of cssDoc.stylesheet.rules) {
		if (rule.type=="rule") {
			let resRule={
				selectors: rule.selectors,
				declarations: {}
			};

			for (let declaration of rule.declarations)
				resRule.declarations[declaration.property]=declaration.value;

			resRules.push(resRule);
		}
	}

	return resRules;
}

export function getMatchingCssRules(rules, selectors) {
	let resRules=[];
	if (!Array.isArray(selectors))
		selectors=[selectors];

	for (let rule of rules) {
		let matching=false;
		for (let selector of selectors)
			if (rule.selectors.includes(selector))
				matching=true;

		if (matching)
			resRules.push(rule);
	}

	return resRules;
}

export function getMatchingCssDeclarations(rules, selectors) {
	let matchingRules=getMatchingCssRules(rules,selectors);
	let resDeclarations={};
	for (let rule of matchingRules)
		resDeclarations={...resDeclarations,...rule.declarations};

	return resDeclarations;
}

export function parseStyle(styleStr) {
	if (!styleStr)
		return {};

	let styles={};
	for (let styleStrPart of styleStr.split(";")) {
		let parts=styleStrPart.split(":");
		if (parts.length==2)
			styles[parts[0].trim()]=parts[1].trim();
	}

	return styles;
}

export function expandCssDeclarations(declarations, env={}) {
	let useEnv={...env, ...declarations};
	let resDeclarations={};

	for (let k of Object.keys(declarations))
		if (!k.startsWith("--"))
			resDeclarations[k]=evalCssExpr(declarations[k],useEnv);

	return resDeclarations;
}

export function stringifyStyle(styles) {
	let parts=[];
	for (let k in styles)
		parts.push(k+": "+styles[k]);

	return parts.join("; ");
}
