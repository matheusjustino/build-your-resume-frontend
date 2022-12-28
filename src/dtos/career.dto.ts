import { v4 as uuidv4 } from "uuid";

export class CareerDTO {
	id: string = uuidv4();
	jobTitle: string = "";
	company: string = "";
	startDate: string = "";
	endDate: string = "";
	overview?: string;
}
