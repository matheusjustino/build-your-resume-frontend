// DTOS
import { BaseDTO } from "./base.dto";

export class SkillDTO extends BaseDTO {
	name: string = "";

	constructor(name: string) {
		super();
		this.name = name;
	}
}
