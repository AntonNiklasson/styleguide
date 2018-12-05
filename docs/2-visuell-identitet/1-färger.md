---
name: Färger
---

# Färger

<div class="colorgroups-container">
	{{#each colorGroups}}
		<div class="colorgroup">
			<h2>{{title}}</h2>
      {{#if description}}
        <p class="colorgroup__description">{{description}}</p>
      {{/if}}
    		<div class="colorgroup__list">
    			{{#each colors}}
    			<div class="colordot">
          <div class="colordot__previews">
            <div class="colordot__preview" style="background-color: {{hex}};"></div>
            {{#if variants}}
              {{#each variants}}
                <div class="colordot__preview--variant" style="background-color: {{hex}};"></div>
              {{/each}}
            {{/if}}
            </div>
    				<div class="colordot__title">{{name}}</div>
    				<div class="colordot__value"><span>{{hex}}</span> {{#if variants}}<span style="color: #666;">(100%)</span>{{/if}}</div>
            {{#if variants}}
              {{#each variants}}
                <div class="colordot__value"><span>{{hex}}</span><span style="color: #666;">({{label}})</span></div>
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
	margin: 20px 0;
}
.colorgroup h2 {
  margin: 0 0 10px 0;
}
.colorgroup__description {
  margin: 0 0 15px 0;
}
.colorgroup__list {
	display: flex;
	flex-flow: row wrap;
}
.colordot {
  margin-right: 20px;
	color: black;
	font-size: 16px;
}
.colordot:last-child {
  margin-right: 0;
}
.colordot__previews {
  margin: 0 0 10px 0;
}
.colordot__preview {
	width: 150px;
  height: 150px;
}
.colordot__preview--variant {
  width: 150px;
  height: 50px;
}
.colordot__title {
  font-weight: bold;
}
.colordot__value span {
  font-family: monospace;
}

.Document .Prose {
  /*margin: 0;*/
  max-width: 500px;
}
</style>
