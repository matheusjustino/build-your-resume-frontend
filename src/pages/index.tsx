// COMPONENTS
import { CVForm } from "../components/cv-form/cv-form";
import { CVPreview } from "../components/cv-preview/cv-preview";

export default function Home() {
	return (
		<div className="flex gap-4 w-full h-[100vh] bg-slate-200 p-8">
			<CVForm />
			<CVPreview />
		</div>
	);
}
