const express = require('express');
const {listData, analyzedData} = require('./data/controller/dados');
const { preprocessData } = require('./data/controller/dados');
const router = express();
router.get('/list', listData);

// router.get('/writeData', async (req, res) => {
//     const data = await listData(); // Supondo que listData retorna os dados que você quer escrever
//     writeDataToLocalDisk(data, 'nome_do_arquivo.json');
//     res.send('Dados escritos com sucesso no disco local!');
// });



router.post('/pre-process',preprocessData);
router.post('/analyzed',analyzedData);


module.exports = router
