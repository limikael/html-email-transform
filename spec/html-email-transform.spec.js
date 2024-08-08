import {transformHtmlEmail} from "../src/main/html-email-transform.js";
import SIMPLE_HTML from "./data/simple-html.js";
import CSS_FROM_TAILWIND from "./data/css-from-tailwind.js";

describe("email transform",()=>{
	it("works",()=>{
		let transformed=transformHtmlEmail(SIMPLE_HTML,{
			css: CSS_FROM_TAILWIND,
			remSize: 16
		});

		//console.log(transformed);
	});
})