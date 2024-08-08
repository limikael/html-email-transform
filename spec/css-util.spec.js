import {parseStyle, parseCssRules, getMatchingCssRules, getMatchingCssDeclarations,
		expandCssDeclarations} from "../src/utils/css-util.js";
import CSS_FROM_TAILWIND from "./data/css-from-tailwind.js";

describe("css util",()=>{
	it("works",()=>{
		let rules=parseCssRules(CSS_FROM_TAILWIND);
		//console.log(getMatchingCssDeclarations(rules,["*","html"]));
		//console.log(rules);
	});

	it("can expande declarations",()=>{
		let declarations={
			'line-height': '1.5',
			'-webkit-text-size-adjust': '100%',
			'-moz-tab-size': '4',
			'-o-tab-size': '4',
			'tab-size': '4',
			'font-family': 'ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
			'font-feature-settings': 'normal',
			'font-variation-settings': 'normal',
			'-webkit-tap-highlight-color': 'transparent',
			'--tw-bg-opacity': '1',
			'background-color': 'rgb(64 147 234/var(--tw-bg-opacity))'
		};

		let expandedDeclarations=expandCssDeclarations(declarations);
		//console.log(expandedDeclarations);
	});
})