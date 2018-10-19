import { Component, Input } from '@angular/core';
import { gsConstructor } from '@modules';

@Component({
  selector: 'text-viewer',
  template: `<h3>Text Viewer :: {{ node?.name }}</h3>
             <div>{{ output || "no-value" }}</div>`,
  styles: []
})
export class TextViewerComponent{
    @Input() node; 
    output : string;

    constructor(){ 
      console.log(`Text Viewer Created`); 
    }

   ngOnInit() {
    if (typeof this.node.output.value === 'number' || this.node.output.value === undefined){
      this.output = this.node.output.value;
    } else if (typeof this.node.output.value === 'string'){
      this.output = '"' + this.node.output.value + '"';
    } else if (this.node.output.value.constructor === [].constructor){
      this.output = '[' + this.node.output.value + ']';
    } else if (this.node.output.value.constructor === {}.constructor) {
      this.output = JSON.stringify(this.node.output.value);
    } else if (this.node.output.value.constructor === gsConstructor) {
      this.output = this.node.output.value.toJSON();
    } else {
    console.log('Unknown output type:', this.node.output.value);
      this.output = this.node.output.value;
    }
  
	}


	ngDoCheck(){
    if (typeof this.node.output.value === 'number' || this.node.output.value === undefined){
      this.output = this.node.output.value;
    } else if (typeof this.node.output.value === 'string'){
      this.output = '"' + this.node.output.value + '"';
    } else if (this.node.output.value.constructor === [].constructor){
      this.output = '[' + this.node.output.value + ']';
    } else if (this.node.output.value.constructor === {}.constructor) {
      this.output = JSON.stringify(this.node.output.value);
    } else if (this.node.output.value.constructor === gsConstructor) {
      this.output = JSON.stringify(this.node.output.value.toJSON());
    } else {
    console.log('Unknown output type:', this.node.output.value);
      this.output = this.node.output.value;
    }
	}



}