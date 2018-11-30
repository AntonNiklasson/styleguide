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
    			<div class="colordot" style="background-color: {{hex}}; {{#if textColor}}color: {{textColor}};{{/if}}">
    				<span class="colordot__title">{{name}}</span>
    				<span class="colordot__value">{{hex}}</span>
    			</div>
					{{#if variants}}
						{{#each variants}}
    			<div class="colordot" style="background-color: {{hex}}; {{#if textColor}}color: {{textColor}};{{/if}}">
							<span class="colordot__title">{{name}}</span>
							<pre class="colordot__value">{{hex}}</pre>
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
	width: 130px;
	height: 130px;
	border-radius: 50%;
	color: black;
	font-size: 14px;
	text-align: center;
}
.colordot__title {
  font-weight: bold;
}
.colordot__value {
  font-family: monospace;
}
</style>
