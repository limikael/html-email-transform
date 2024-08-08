import {parseCssRules} from "../src/utils/css-util.js";
import {parse as parseXml} from "txml/txml";
import SIMPLE_HTML from "./data/simple-html.js";
import CSS_FROM_TAILWIND from "./data/css-from-tailwind.js";
import {inlineCss, mapCssStyleValues} from "../src/utils/inline-css.js";
import {txmlStringify} from "../src/utils/txml-stringify.js";

describe("inline css",()=>{
	it("works",()=>{
		let rules=parseCssRules(CSS_FROM_TAILWIND);
		let htmlFragment=parseXml(SIMPLE_HTML);
		let res=inlineCss(htmlFragment,rules);
		res=mapCssStyleValues(res,v=>{
			//console.log(v);
			return v;
		});
		let out=txmlStringify(res);
		//console.log(out);
	});
})