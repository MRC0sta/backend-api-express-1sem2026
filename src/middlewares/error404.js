export const error404 = (req, res) => {
	res.status(404).json({ message: `Rota ${req.originalUrl} nao encontrada.` })
}