import {parse as parseXml} from "txml/txml";
import {parseCssRules, getMatchingCssDeclarations} from "../utils/css-util.js";
import {inlineCss, domRemToPx} from "../utils/inline-css.js";
import {txmlStringify} from "../utils/txml-stringify.js";

export function transformHtmlEmail(html, {css, remSize}={}) {
	if (!remSize)
		remSize=16;

	let rules=parseCssRules(css);
	let wrapperDeclarations=getMatchingCssDeclarations(rules,["body","html","*"]);
	wrapperDeclarations["font-size"]=remSize+"px";

	if (!wrapperDeclarations["color"])
		wrapperDeclarations["color"]="#000000";

	//console.log(wrapperDeclarations);
	rules.push({
		selectors: [".email-wrapper"],
		declarations: wrapperDeclarations
	});

	let htmlFragment=parseXml(`<div class="email-wrapper">${html}</div>`);
	let res=inlineCss(htmlFragment,rules);
	res=domRemToPx(res,remSize);
	let out=txmlStringify(res);

	return out;
}