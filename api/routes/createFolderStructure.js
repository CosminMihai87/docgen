var express = require('express');
var router = express.Router();
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const fs = require('fs');
const path = require('path');

router.get('/', function(req, res, next) {

    const outputPath = path.resolve(__dirname+ './../../output');
    const templatePath = path.resolve(__dirname + './../../src/templates/');

    //function that returns a list of files, folders and details about them from a certain path: ( filtred by our regex Array preferences)
    function getFileList(inputPath, RegEX) {
        var files =[];
        try {
            fs.readdirSync(inputPath).forEach((file)=> {
                var filePath = path.join(inputPath,"/", file);
                var stats = fs.statSync(filePath);
                files.push({
                    type: (stats.isDirectory() ? 'd' : 'f'),
                    name: file,
                    size: stats['size']
                });
            })
            if (RegEX.length > 0)
                files = files.filter(k => RegEX.some(m => m.test(k['name'])) ); //filter by regex

            return files;
        }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
            console.log(JSON.stringify({error: e}));
            throw error;
        };
    }

    function cleanUP(dirPath, removeSelf) {
        try {
            if (fs.existsSync(dirPath)){
                if (removeSelf === undefined)
                    removeSelf = true;
                try {
                    var files = fs.readdirSync(dirPath);
                } catch(e) {
                    return;
                }
                if (files.length > 0)
                    for (var i = 0; i < files.length; i++) {
                        const filePath = path.join(dirPath, files[i]);
                        if (fs.statSync(filePath).isFile())
                            fs.unlinkSync(filePath);
                        else
                            cleanUP(filePath);
                    }
                if (removeSelf)
                    fs.rmdirSync(dirPath);

            }
        }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name
            }
            console.log(JSON.stringify({error: e}));
            throw error;
        };
    };

    process.nextTick(() => {
        cleanUP(outputPath, false);
    });

    setImmediate(() => {
        console.log('intra aici');
        //create dir structure
        let folderName = "Ds (a vs b) din 2019"
        fs.mkdirSync( path.join(outputPath, folderName) );
    });


    return res.status(200).json({
        outputPath: outputPath,
        templatePath: templatePath,
        message: req.body
     });





});

module.exports = router;
