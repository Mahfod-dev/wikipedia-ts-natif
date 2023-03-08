const loading = document.querySelector<HTMLDivElement>('.loading')!;

export const removeLoading = () => {
	loading.style.display = 'none';
};

export const displayLoading = () => {
	loading.style.display = 'block';
};
