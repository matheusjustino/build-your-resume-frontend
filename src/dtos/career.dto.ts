// DTOS
import { BaseDTO } from "./base.dto";

export class CareerDTO extends BaseDTO {
	jobTitle: string = "";
	company: string = "";
	startDate: string = "";
	endDate: string = "";
	overview?: string;
}
