const express= require('express');
const fs = require('fs');

const app = express();
var detail = fs.readFileSync(`${__dirname}/detail.html`, 'utf8');

function calculateConfig(p){
    parseInt(p);
    var config = [];
    if(p<=2){
        config.push(p);
        return config;
    }
    else{
        config.push(2);
        p = p-2;
        for(let i=1; i<=2; i++){
            if(p<=8){
                config.push(p);
                return config;
            }
            else { config.push(8); p = p-8; }
        }
        if(p<0){ return config; }
        else config.push(2); return config;
    }
}

function replaceText(element, symbol, p, config){
    let output = detail.replace('%{Element}%', element);
    output = output.replace('%{Element}%', element);
    output = output.replace('%{Symbol}%', symbol);
    output = output.replace('%{atomicno}%', p);
    output = output.replace('%{config}%', config);
    return output;
}

var e = ['H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca'];
var ff = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Flourine', 'Neon', 'Sodium', 'Magnesium', 'Aluminium', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Pottasium', 'Calcium'];

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/home.html`);
});
app.get('/1', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/2', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/3', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/4', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/5', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/6', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/7', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/8', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/9', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/10', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/11', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/12', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/13', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/14', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/15', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/16', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/17', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/18', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/19', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});
app.get('/20', (req, res) => {
    const p = req.path.replace('/', '');
    var symbol = e[p-1];
    var element = ff[p-1];
    var config = calculateConfig(p);
    res.set('text/html').send(replaceText(element, symbol, p, config));
});

app.listen(8999, () => {console.log('Running..')});
