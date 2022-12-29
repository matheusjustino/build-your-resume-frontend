import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

// COMPONENTS
import { CVForm } from "../components/cv-form/cv-form";
import { CVPreview } from "../components/cv-preview/cv-preview";

export default function Home() {
	const previewRef = useRef<HTMLIFrameElement>(null);
	const handlePrint = useReactToPrint({
		content: () => previewRef?.current,
	});

	return (
		<div className="flex flex-col bg-slate-200 w-full min-h-[100vh] p-8">
			<div className="flex text-center items-center justify-between p-2 gap-4">
				<h1 className="text-xl md:text-4xl font-semibold uppercase">
					Construa seu currículo
				</h1>
				<button
					onClick={handlePrint}
					className="bg-green-400 hover:bg-green-600 max-w-[200px] w-full p-2"
				>
					Baixar agora
				</button>
			</div>

			<div className="h-[1px] w-full bg-blue-400"></div>

			<div className="flex md:flex-row flex-col gap-4 w-full">
				<CVForm />
				<CVPreview ref={previewRef} />
			</div>
		</div>
	);
}
