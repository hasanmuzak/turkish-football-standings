const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');

router.route('/super-lig')
    .get((req, res, next) => {
        const result = [];
        let data = {
            isim : '',
            kart_sayisi : '',
        }
        request({url: 'https://www.sporx.com/turkiye-super-lig-panorama', encoding: null}, (error, response, html) => {
            html = iconv.decode(html, 'iso-8859-9');
            if (!error && response.statusCode === 200) {
                const $ = cheerio.load(html, {decodeEntities: false});
                let counter = 0;
                const heading = $('.table-panorama').eq(2).find("tbody > tr > td:not(:first-child)").each((index,value) => {
                    if(index === 9){
                        result.push(data);
                    }
                    if(index % 2 === 0  && index !== 0){
                        counter = 0;
                        result.push(data);
                        data = {
                            isim : '',
                            kart_sayisi : '',
                        }
                        data[Object.keys(data)[counter]] = $(value).text().replace(/\s\s+/g, '').toLowerCase();
                        counter++;
                    }
                    else{
                        data[Object.keys(data)[counter]] = $(value).text().replace(/\s\s+/g, '').toLowerCase();
                        counter++;
                    }
                });
                res.send(result);
            }
        });
    });

module.exports = router;