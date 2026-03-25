export function logger(req, res, next){
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`)
    next() // Chama o próximo middleware ou rota
}