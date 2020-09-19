interface Input {
	name: string;
	value: string;
}

const generateMessageIfEmpty = (inputNames: string[]): string | null => {
	const len = inputNames.length;

	if (len === 0) {
		return null;
	}

	if (len === 1) {
		const name = inputNames[0];

		return `O campo ${name} está vazio`;
	}

	const initial = inputNames.slice(0, len - 1);
	const last = inputNames[len - 1];

	const initialJoin = initial.join(', ');

	return `Os campos ${initialJoin} e ${last} estão vazios`;
};

function verifyInputsAreEmpty(inputs: Input[]): string | null {
	const inputsEmpty = [];
	for (const input of inputs) {
		if (!input.value) {
			inputsEmpty.push(input.name);
		}
	}
	const message = generateMessageIfEmpty(inputsEmpty);

	return message;
}

export default verifyInputsAreEmpty;
