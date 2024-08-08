import {parse as parseCssExpr} from "css-expression";

let cssFuncs={
	var(args, env) {
		if (args.length!=1)
			throw new Error("Expected var name");

		let varName=args[0];
		if (!env[varName])
			throw new Error("Unknown var: "+varName);

		let val=env[varName];
		return val;
	},

	rgb(args, env) {
		function hexColorComponent(v) {
			if (!v)
				v=0;

			return (Number(v).toString(16).padStart(2,"0").toUpperCase());
		}

		let s="#"+args.slice(0,3).map(hexColorComponent).join("");

		if (args.length>3) {
			let frac=evalCssFrac(args[args.length-1]);
			s+=hexColorComponent(Math.round(255*frac));
		}

		return s;
	}
}

export function evalCssFrac(s) {
	let ast=parseCssExpr(s);
	if (ast.literals.length!=1)
		throw new Error("Bad fraction: "+s);

	let node=ast.literals[0];
	if (node.unit=="%")
		return parseFloat(node.value)/100;

	else if (!node.unit)
		return parseFloat(node.value);

	throw new Error("Bad fraction: "+s);
}

function evalCssFunc(name, args, env) {
	if (!cssFuncs[name])
		throw new Error("Unknown css function: "+name);

	let res=cssFuncs[name](args,env);
	return res;
}

export function evalCssExprNodes(exprParts, env) {
	let evaledParts=[];
	if (!Array.isArray(exprParts))
		exprParts=[exprParts]

	for (let exprPart of exprParts.flat(Infinity)) {
		if (exprPart.type=="expression")
			evaledParts.push(evalCssExprNodes(exprPart.literals,env));

		else
			evaledParts.push(evalCssExprNode(exprPart,env));
	}

	return evaledParts.flat(Infinity);
}

export function evalCssExprNode(exprPart, env) {
	switch (exprPart.type) {
		case "expression":
			if (exprPart.literals.length!=1)
				throw new Error("Expected single literal: "+JSON.stringify(exprPart));

			return evalCssExprNode(exprPart.literals[0],env);

		case "function":
			let args=evalCssExprNodes(exprPart.args,env);
			return evalCssFunc(exprPart.name,args,env);

		case "primitive":
			return exprPart.raw;
	}
}

export function evalCssExpr(exprSource, env) {
	exprSource=exprSource.replaceAll("/"," / ");
	let expr=parseCssExpr(exprSource);
	//console.log(JSON.stringify(expr,null,2));
	let res=evalCssExprNodes(expr,env);

	return res.join(" ");
	//console.log(res);

	//return evalCssExprNode(expr,env);
}
