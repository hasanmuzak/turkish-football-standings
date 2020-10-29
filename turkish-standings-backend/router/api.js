const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');

const topScorers = require('./topScorers');
const topAssists = require('./topAssists');
const topCards = require('./topCards');

router.route('/super-lig-puan-durumu/')
    .get((req, res, next) => {
        const result = [];
        let data = {
            sira : '',
            takim : '',
            oynanan : '',
            galibiyet : '',
            beraberlik : '',
            maglubiyet : '',
            atilan_gol : '',
            yenilen_gol : '',
            averaj : '',
            puan : '',
            durum : '',
        };
        request({
            url: `https://www.sporx.com/turkiye-super-lig-puan-durumu`,
            encoding: null
        }, async (error, response, html) => {
            html = iconv.decode(html, 'iso-8859-9');
            if (!error && response.statusCode === 200) {
                const $ = await cheerio.load(html, {decodeEntities: false});
                let counter = 0;
                const heading = $('.table.table-league.table-striped').first().find('tbody > tr').find('td').each((index, value) => {
                    if(index === 0 ){
                        return
                    }
                    if(index % 12 === 0){
                        counter = 0;
                        result.push(data);
                        data = {
                            sira : '',
                            takim : '',
                            oynanan : '',
                            galibiyet : '',
                            beraberlik : '',
                            maglubiyet : '',
                            atilan_gol : '',
                            yenilen_gol : '',
                            averaj : '',
                            puan : '',
                            durum : '',
                        };
                    }
                    else{
                        data[Object.keys(data)[counter]] = $(value).text();
                        counter++;
                    }
                });
                res.send(result);
            }
        });
    });

router.route('/birinci-lig-puan-durumu/')
    .get((req, res, next) => {
        const result = [];
        let data = {
            sira : '',
            takim : '',
            oynanan : '',
            galibiyet : '',
            beraberlik : '',
            maglubiyet : '',
            atilan_gol : '',
            yenilen_gol : '',
            averaj : '',
            puan : '',
            durum : '',
        };
        request({
            url: `https://www.sporx.com/turkiye-1-lig-puan-durumu`,
            encoding: null
        }, async (error, response, html) => {
            html = iconv.decode(html, 'iso-8859-9    ');
            if (!error && response.statusCode === 200) {
                const $ = await cheerio.load(html, {decodeEntities: false});
                let counter = 0;
                const heading = $('.table.table-league.table-striped').first().find('tbody > tr').find('td').each((index, value) => {
                    if(index === 0 ){
                        return
                    }
                    if(index % 12 === 0){
                        counter = 0;
                        result.push(data);
                        data = {
                            sira : '',
                            takim : '',
                            oynanan : '',
                            galibiyet : '',
                            beraberlik : '',
                            maglubiyet : '',
                            atilan_gol : '',
                            yenilen_gol : '',
                            averaj : '',
                            puan : '',
                            durum : '',
                        };
                    }
                    else{
                        data[Object.keys(data)[counter]] = $(value).text();
                        counter++;
                    }
                });
                res.send(result);
            }
        });
    });

router.route('/ikinci-lig-puan-durumu/')
    .get((req, res, next) => {
        const result = [];
        let data = {
            sira : '',
            takim : '',
            oynanan : '',
            galibiyet : '',
            beraberlik : '',
            maglubiyet : '',
            atilan_gol : '',
            yenilen_gol : '',
            averaj : '',
            puan : '',
            durum : '',
        };
        request({
            url: `https://www.sporx.com/turkiye-2-lig-puan-durumu`,
            encoding: null
        }, async (error, response, html) => {
            html = iconv.decode(html, 'iso-8859-9    ');
            if (!error && response.statusCode === 200) {
                const $ = await cheerio.load(html, {decodeEntities: false});
                let counter = 0;
                const heading = $('.table.table-league.table-striped').first().find('tbody > tr').find('td').each((index, value) => {
                    if(index === 0 ){
                        return
                    }
                    if(index % 12 === 0){
                        counter = 0;
                        result.push(data);
                        data = {
                            sira : '',
                            takim : '',
                            oynanan : '',
                            galibiyet : '',
                            beraberlik : '',
                            maglubiyet : '',
                            atilan_gol : '',
                            yenilen_gol : '',
                            averaj : '',
                            puan : '',
                            durum : '',
                        };
                    }
                    else{
                        data[Object.keys(data)[counter]] = $(value).text();
                        counter++;
                    }
                });
                res.send(result);
            }
        });
    });

router.route('/ucuncu-lig-puan-durumu/')
    .get((req, res, next) => {
        const result = [];
        let data = {
            sira : '',
            takim : '',
            oynanan : '',
            galibiyet : '',
            beraberlik : '',
            maglubiyet : '',
            atilan_gol : '',
            yenilen_gol : '',
            averaj : '',
            puan : '',
            durum : '',
        };
        request({
            url: `https://www.sporx.com/turkiye-3-lig-puan-durumu`,
            encoding: null
        }, async (error, response, html) => {
            html = iconv.decode(html, 'iso-8859-9    ');
            if (!error && response.statusCode === 200) {
                const $ = await cheerio.load(html, {decodeEntities: false});
                let counter = 0;
                const heading = $('.table.table-league.table-striped').first().find('tbody > tr').find('td').each((index, value) => {
                    if(index === 0 ){
                        return
                    }
                    if(index % 12 === 0){
                        counter = 0;
                        result.push(data);
                        data = {
                            sira : '',
                            takim : '',
                            oynanan : '',
                            galibiyet : '',
                            beraberlik : '',
                            maglubiyet : '',
                            atilan_gol : '',
                            yenilen_gol : '',
                            averaj : '',
                            puan : '',
                            durum : '',
                        };
                    }
                    else{
                        data[Object.keys(data)[counter]] = $(value).text();
                        counter++;
                    }
                });
                res.send(result);
            }
        });
    });

router.use('/gol-krallari', topScorers);
router.use('/asist-krallari', topAssists);
router.use('/kirmizi-kart', topCards);

module.exports = router;