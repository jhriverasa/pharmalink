// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    {
      "physicians": [
        { name: 'Mitchell Rodríguez', username:'mierodriguezba', password:'12345' },
        { name:'Juan Santana', username:'jsantanas',password:'98765'},
        { name:'Segundo Domínguez', username:'2dodom',password:'22222'},
        { name:'Anastasio Mora', username:'amora',password:'13795'},
      ]
    }
    
  )
}
