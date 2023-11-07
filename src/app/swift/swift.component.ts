import { Component, ElementRef, ViewChild } from '@angular/core';
import { Swift } from './swift.model';
import { SwiftService } from './swift.service';

@Component({
  selector: 'app-swift',
  templateUrl: './swift.component.html',
  styleUrls: ['./swift.component.scss']
})
export class SwiftComponent {

	swifts: Swift[] = [];
	currentSwift: Swift | null = null;
	newSwift: Swift = {
		title: '',
		content: ''
	};
	showForm: any = false;
	addForm: any = false;
	editForm: any = false;

	constructor(private swiftService: SwiftService) { }

	ngOnInit() {
		this.swifts = this.swiftService.getSwifts();
	}

	showFormDetails(){
		this.newSwift = {
			title: '',
			content: ''
		};
		this.showForm = true;
		this.addForm = true;
	}

	addSwift() {
		if (this.currentSwift) {
			// for edit
			this.currentSwift.title = this.newSwift.title;
			this.currentSwift.content = this.newSwift.content.split('\n');
			this.currentSwift = null;

			this.addForm = false;
			this.editForm = false;
			this.showForm = false;
		} else {
			// for add
			this.swifts.push({
				title: this.newSwift.title,
				content: this.newSwift.content.split('\n')
			});
		}
		this.newSwift = {
			title: '',
			content: ''
		};
		this.swiftService.setSwifts(this.swifts);
		this.showForm = false;
		this.addForm = false;
	}

	editSwift(swift: Swift) {
		this.currentSwift = swift;
		this.newSwift.title = swift.title;
		this.newSwift.content = swift.content.join('\n');
		this.showForm = true;
		this.editForm = true;
	}

	cancelSwift(){
		this.currentSwift = null;
		this.newSwift = {
			title: '',
			content: ''
		};
		this.showForm = false;
		this.editForm = false;
	}

	deleteSwift(swift: Swift) {
		const index = this.swifts.indexOf(swift);
		this.swifts.splice(index, 1);
		this.swiftService.setSwifts(this.swifts);
	}

}
