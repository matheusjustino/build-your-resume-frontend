import { v4 as uuidv4 } from "uuid";

export class ProjectDTO {
	id: string = uuidv4();
	name: string = "";
	link: string = "";
	description: string = "";
}
