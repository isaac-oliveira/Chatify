import connection from "../../database";

export interface Device {
	id?: number;
	user_id: number;
	token: string;
}

type FilterFunction<T> = (value: T, index?: number, array?: T[]) => boolean;

class DeviceLogic {
	async createDevice(device: object): Promise<number> {
		const ids = await connection("devices").insert(device).returning("id");

		return ids[0];
	}

	async getDevice(where: object): Promise<Device> {
		const device = (await connection("devices")
			.select("*")
			.where(where)
			.first()) as Device;

		return device;
	}

	async getTokenDevicesByUser(user_id: number): Promise<string[]> {
		const devices = (await connection("devices")
			.select("*")
			.where({ user_id })) as Device[];

		return devices.map((device) => device.token);
	}

	async getDevices(filter?: FilterFunction<Device>): Promise<Device[]> {
		const devices = (await connection("devices").select("*")) as Device[];
		if (filter) {
			const filtereddevice = devices.filter(filter);
			return filtereddevice;
		}
		return devices;
	}

	async updateDevice(where: object, data: object) {
		const id = await connection("devices")
			.where(where)
			.update(data)
			.returning("id");

		return id;
	}

	async deleteDevice(where: object) {
		const id = await connection("devices").where(where).delete();

		return id;
	}
}

export default DeviceLogic;
