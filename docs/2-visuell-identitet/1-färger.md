---
name: Färger
---

# Färger

<div class="colorgroups-container">
	{{#each colorGroups}}
		<div class="colorgroup">
			<h2>{{title}}</h2>
    		<div class="colorgroup__list">
    			{{#each colors}}
				<div>
    			<div class="colordot" style="background-color: {{hex}};">
    				<span class="colordot__title">{{name}}</span>
    				<span class="colordot__hex">{{hex}}</span>
    			</div>
					{{#if variants}}
						{{#each variants}}
						<div class="colordot" style="background-color: {{hex}};">
							<span class="colordot__title">{{name}}</span>
							<span class="colordot__hex">{{hex}}</span>
						</div>
						{{/each}}
					{{/if}}
				</div>
    			{{/each}}
    		</div>
    	</div>
    {{/each}}

</div>

<style>
.colorgroups-container {
	display: flex;
	flex-direction: column;
}
.colorgroup {
	flex: 1;
	margin: 1em 0;
}
.colorgroup__list {
	display: flex;
	flex-flow: row wrap;
}
.colordot {
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 8px;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	color: black;
	font-size: 14px;
}
</style>
