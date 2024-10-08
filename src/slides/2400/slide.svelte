<script lang="ts">
	import { Code } from '@animotion/core';
</script>

<Code
	lang="typescript"
	class="max-h-[600px] max-w-full overflow-auto rounded-lg p-10 text-2xl!"
	theme="github-dark"
	code={`type TaskInstance<TReturn> = {
  /**
   * If the task instance completed successfully
   * this will be the return value.
   */
  value?: TReturn;

  /**
   * If an error is thrown inside the task instance
   * it will be found here.
   */
  error?: Error;

  /**
   * Indicates whether the task instance has started.
   */
  hasStarted: boolean;

  /**
   * Indicates whether the task instance was canceled.
   */
  isCanceled: boolean;

  /**
   * Indicates whether the task instance threw an error
   * before completing.
   */
  isError: boolean;

  /**
   * Indicates whether the task instance is
   * currently running.
   */
  isRunning: boolean;

  /**
   * Indicates whether the task instance completed
   * successfully.
   */
  isSuccessful: boolean;
};`}
/>
