<script lang="ts">
	import { Code } from '@animotion/core';
</script>

<Code
	lang="typescript"
	class="max-h-[600px] max-w-full overflow-auto rounded-lg p-10 text-2xl!"
	theme="github-dark"
	code={`type Task = {
  /**
   * whether the task is currently running or not
   */
  isRunning: boolean;

  /**
   * number of times the task has been run,
   */
  performCount: number;

  /**
   * the last task instance, regardless of whether it errored
   * was canceled, or was successful
   */
  last?: TaskInstance;

  /**
   * the last canceled task instance
   */
  lastCanceled?: TaskInstance;

  /**
   * the last errored task instance
   */
  lastErrored?: TaskInstance;

  /**
   * the last running task instance, as soon as the task
   * stops running, this will be undefined
   */
  lastRunning?: TaskInstance;
  
  /**
   * the last successful task instance
   */
  lastSuccessful?: TaskInstance;
};`}
/>
