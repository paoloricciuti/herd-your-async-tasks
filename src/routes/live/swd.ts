import { pipeline, type TextClassificationSingle, env } from '@xenova/transformers';

env.localModelPath = './ai-model/';
env.allowRemoteModels = false;
env.backends.onnx.wasm.wasmPaths = './ai-model/';

class PipelineSingleton {
	static task = 'text-classification' as const;
	static model = 'Xenova/toxic-bert' as const;
	static instance: ReturnType<typeof pipeline<typeof this.task>> | null = null;

	static async get(progress_callback?: Function) {
		if (this.instance === null) {
			this.instance = pipeline(this.task, this.model, { progress_callback });
		}
		return this.instance;
	}
}

export async function check(message: string) {
	const classifier = await PipelineSingleton.get();
	let [result] = await classifier(message);
	return result as TextClassificationSingle;
}
