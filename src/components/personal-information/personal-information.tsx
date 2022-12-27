const PersonalInformation: React.FC = () => {
	return (
		<div className="flex flex-col w-full">
			<h1 className="uppercase mb-1">Informações Pessoais</h1>
			<div className="flex flex-col gap-2 border p-2">
				<div className="grid grid-cols-2 gap-2">
					<input type="text" name="name" placeholder="Seu nome" />
					<input type="email" name="email" placeholder="Seu email" />
					<input
						type="text"
						name="phone"
						placeholder="Seu telefone/whatsapp"
					/>
					<input
						type="text"
						name="website"
						placeholder="Link do seu site"
					/>
				</div>

				<textarea
					className="w-full"
					name="about"
					rows="4"
					placeholder="Escreva sobre você"
				/>
			</div>
		</div>
	);
};

export { PersonalInformation };
