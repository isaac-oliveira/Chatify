import jwt from "jsonwebtoken";

interface ResultValidate {
	logged: boolean;
	user_id?: number;
}

interface Token {
	id: number;
	iat: number;
	exp: number;
}

export const generateToken = (id: number) => {
	const secret = process.env.SECRET || "teste";

	const token = jwt.sign({ id }, secret, {
		expiresIn: 7200,
	});

	return token;
};

export const validateToken = (token: string): ResultValidate => {
	const secret = process.env.SECRET || "teste";
	let result: ResultValidate = { logged: false };

	jwt.verify(token, secret, (error, decode) => {
		const tokenDecode = decode as Token;
		if (!error) result = { logged: true, user_id: tokenDecode.id };
	});

	return result;
};
