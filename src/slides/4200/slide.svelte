<script lang="ts">
	import mainmatter from './mainmatter.png';
	import sheepdog from './sheepdog.png';
</script>

<div class="flex gap-10">
	<ul class="-ml-20 grid list-none place-content-center gap-4 text-left">
		<li><a class="text-orange-200" href="https://sheepdog.run">https://sheepdog.run</a></li>
		<li>
			<a class="text-orange-200" href="https://github.com/mainmatter/sheepdog"
				>https://github.com/mainmatter/sheepdog</a
			>
		</li>
		<li>
			<a class="text-orange-200" href="https://mainmatter.com">https://mainmatter.com</a>
		</li>
	</ul>
	<div class="grid gap-10">
		<img class="max-w-[300px]" src={sheepdog} alt="sheepdog qr" />
		<img class="max-w-[300px]" src={mainmatter} alt="mainmatter qr" />
	</div>
</div>
