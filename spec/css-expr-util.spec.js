//import {parse as parseXml} from "txml/txml";
//import {parse as parseCss} from "css";
//import SIMPLE_HTML from "./data/simple-html.js";
//import CSS_FROM_TAILWIND from "./data/css-from-tailwind.js";
//import {applyCssToFragment} from "../src/utils/inline-css.js";
//import {txmlStringify} from "../src/utils/txml-stringify.js";
import {parseStyle} from "../src/utils/css-util.js";
import {evalCssExpr, evalCssFrac} from "../src/utils/eval-css-expr.js";

describe("css expr",()=>{
	it("can apply css functions",()=>{
		//console.log(evalCssFrac("50%"));

		let env=parseStyle("--tw-bg-opacity:100%;");
		//let expanded=evalCssExpr("rgb(64 147 234/var(--tw-bg-opacity))",env);
		let expanded=evalCssExpr("rgb(64 147 234/50%)",env);
		expect(expanded).toEqual("#4093EA80");
	});
})