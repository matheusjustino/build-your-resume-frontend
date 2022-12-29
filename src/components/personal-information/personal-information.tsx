import { ChangeEvent } from "react";

// CONTEXTS
import { useCv } from "../../contexts/cv.context";

const PersonalInformation: React.FC = () => {
	const {
		cv: { personalInformation },
		onCvChange,
	} = useCv();

	const onChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		onCvChange(({ personalInformation, ...prev }) => ({
			...prev,
			personalInformation: {
				...personalInformation,
				[e.target.name]: e.target.value,
			},
		}));
	};

	return (
		<div className="flex flex-col w-full">
			<h1 className="uppercase mb-1">Informações Pessoais</h1>
			<div className="flex flex-col gap-2 border p-2">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
					<input
						type="text"
						name="name"
						placeholder="Seu nome"
						value={personalInformation.name}
						onChange={onChange}
					/>
					<input
						type="email"
						name="email"
						placeholder="Seu email"
						value={personalInformation.email}
						onChange={onChange}
					/>
					<input
						type="text"
						name="phone"
						placeholder="Seu telefone/whatsapp"
						value={personalInformation.phone}
						onChange={onChange}
					/>
					<input
						type="text"
						name="website"
						placeholder="Link do seu site"
						value={personalInformation.website}
						onChange={onChange}
					/>
				</div>

				<textarea
					className="w-full"
					name="about"
					rows={4}
					placeholder="Escreva sobre você"
					value={personalInformation.about}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export { PersonalInformation };
