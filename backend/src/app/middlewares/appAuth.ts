import { Request, Response, NextFunction } from "express";
import { validateToken } from "../logic/auth";

const appAuth = (req: Request, res: Response, next: NextFunction) => {
	const authorization = req.headers["authorization"];
	if (!authorization)
		return res.status(401).json({ error: "Token não enviado." });

	const [bearer, token] = authorization?.split(" ");
	if (bearer !== "Bearer" && !token)
		return res.status(401).json({ error: "Token mal formatado." });

	const result = validateToken(token);

	if (!result.logged) return res.status(401).json({ error: "Token inválido." });

	req.headers["user_id"] = String(result.user_id);

	next();
};

export default appAuth;
