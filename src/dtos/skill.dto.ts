import { v4 as uuidv4 } from "uuid";

export class SkillDTO {
	id: string = uuidv4();
	name: string = "";
}
