import { pipeline, env, type TextClassificationSingle } from '@xenova/transformers';

// Specify a custom location for models (defaults to '/models/').
env.localModelPath = '/cached-models/';

// Disable the loading of remote models from the Hugging Face Hub:
env.allowRemoteModels = false;

// Set location of .wasm files. Defaults to use a CDN.
env.backends.onnx.wasm.wasmPaths = '/cached-models/';

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
