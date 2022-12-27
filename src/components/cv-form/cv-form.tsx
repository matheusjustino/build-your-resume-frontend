import { useState } from "react";

// COMPONENTS
import { Education } from "../education/education";
import { PersonalInformation } from "../personal-information/personal-information";

const CVForm: React.FC = () => {
	return (
		<div className="flex flex-col w-full bg-slate-400 p-2 gap-6">
			<PersonalInformation />
			<Education />
		</div>
	);
};

export { CVForm };
