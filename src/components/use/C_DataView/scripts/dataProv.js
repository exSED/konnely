export const recuperar = (id, info) => {
	basicData.id = id;
	basicData.info = info;
};
export const basicData = {
	id: null,
	info: {},
};
export const ciclo = [
	{
		etapa: 'Nacimiento',
		peso: '200gr',
		fecha: '**-**-****',
	},
	{
		etapa: 'Lactancia',
		peso: '1kg',
		fecha: '**-**-****',
	},
	{
		etapa: 'Levante',
		peso: '1.5kg',
		fecha: '**-**-****',
	},
	{
		etapa: 'Engorde',
		peso: '2kg',
		fecha: '**-**-****',
	},
	{
		etapa: 'Ceba',
		peso: '2.5kg',
		fecha: '**-**-****',
	},
];
export const reproData = {
	rechazos: '0',
	muertes: '0',
	vivos: '0',
	partos: '0',
};
