//https://github.com/panva/jose/blob/master/docs/README.md
const { JWT, JWK } = require('jose')
const key = JWK.generateSync('RSA', 4096, { use: 'sig', alg:'RS512', kid:'RPC' })
const publicKey = key.toPEM()
const privateKey = key.toPEM(true)
const payload = {
//	issr:process.env.ISSR
	issr:"RBRO"
}
const jwtToken = JWT.sign(payload, key, {
	algorithm:'RS512',
	header:{
		typ:"JWT",
		alg:"RS512"
	}
})

console.log(jwtToken)
//console.log(privateKey)
console.log(publicKey)
