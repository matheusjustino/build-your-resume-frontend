import { useState, Dispatch, SetStateAction } from "react";

// COMPONENTS
import { PersonalInformation } from "../personal-information/personal-information";
import { Education } from "../education/education";
import { Career } from "../career/career";

const CVForm: React.FC = () => {
	return (
		<div className="flex flex-col w-full bg-slate-400 p-2 gap-6">
			<PersonalInformation />
			<Education />
			<Career />
		</div>
	);
};

export { CVForm };
