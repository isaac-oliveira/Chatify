import connection from "../../database";

export interface User {
	id?: number;
	avatar: string | null;
	online: boolean;
	socket_id: string | null;
	name: string;
	email: string;
	password?: string;
}

type FilterFunction<T> = (value: T, index?: number, array?: T[]) => boolean;

class UserLogic {
	async createUser(user: object): Promise<number> {
		const ids = await connection("users").insert(user).returning("id");

		return ids[0];
	}

	async getUser(where: object): Promise<User> {
		const user = (await connection("users")
			.select("*")
			.where(where)
			.first()) as User;

		return user;
	}

	async getUsers(filter?: FilterFunction<User>): Promise<User[]> {
		const users = (await connection("users").select("*")) as User[];
		if (filter) {
			const filteredUser = users.filter(filter);
			return filteredUser;
		}
		return users;
	}

	async updateUser(where: object, data: object) {
		const id = await connection("users")
			.where(where)
			.update(data)
			.returning("id");

		return id;
	}
}

export default UserLogic;
