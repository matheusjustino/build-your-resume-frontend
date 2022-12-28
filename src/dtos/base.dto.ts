import { v4 as uuidv4 } from "uuid";

export class BaseDTO {
	id: string = uuidv4();
}
