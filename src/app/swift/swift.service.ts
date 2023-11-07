import { Injectable, Inject } from "@angular/core";
import { Swift } from "./swift.model";

@Injectable()
export class SwiftService {
	constructor(@Inject('LOCALSTORAGE') private localStorage: Storage) { }

	getSwifts(): Swift[] {
		let swifts: any = this.localStorage.getItem('swifts')
		swifts = JSON.parse(swifts);
		return swifts || [];
	}

	setSwifts(swifts: Swift[]): void {
		this.localStorage.setItem('swifts', JSON.stringify(swifts));
	}
}
