const db = require('../conexao/db');
const fs = require('fs')
const  path = require('path')

const listData = async(req,res)=>{
    try {
        const list  = await db('customers').select('customer_id',
            'company_name',
            'contact_name',
            'contact_title',
            'address',
            'city',
            'region',
            'postal_code',
            'country',
            'phone',
            'fax')
            res.status(200).json({msg: "Listagem realizada com sucesso!", data:list})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}


const preprocessData = async(req, res) => {
    try {
        const data = req.body;
    
        const processedData = await realPreprocessData(data);
        res.status(200).json({msg: "Pré-processamento realizado com sucesso!", data: processedData});
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


const analyzedData  = async(req, res) =>{
   try {
    const data = req.body;
    const analyzed = await db.select('customers').from('company_name').where(data);
    res.status(200).json({msg: "Análise realizada com sucesso!", data: analyzed});

   } catch (error) {
    return res.status(500).json(error.message);
   }
}
//não seria exatamente uma rota, mas uma função dentro de uma rota.
const writeData = async(data,fileName)=>{
    try {
        const jsonData = JSON.stringify(data);
        const filePath = path.join(__dirname, '/data', fileName);
        fs.writeFileSync(filePath, jsonData);

        console.log('Dados escritos com sucesso no disco local!');

    } catch (error) {
        console.error('Erro ao escrever dados no disco local:', error);
    }
}


module.exports= {
    listData,
   preprocessData,
   analyzedData,
   writeData
}