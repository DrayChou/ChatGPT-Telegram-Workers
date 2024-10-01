import * as fs from 'node:fs';
import { executeRequest } from './template';

{
    const plugin = './plugins/dns.json';
    const template = JSON.parse(fs.readFileSync(plugin, 'utf8'));
    executeRequest(template, { DATA: ['B', 'google.com'] }).then(console.log).catch(console.error);
    executeRequest(template, { DATA: ['A', 'www.bilibili.com'] }).then(r => console.log(r.content)).catch(console.error);
}

{
    const plugin = './plugins/dicten.json';
    const template = JSON.parse(fs.readFileSync(plugin, 'utf8'));
    executeRequest(template, { DATA: 'example' }).then(console.log).catch(console.error);
}

{
    const plugin = './plugins/qweather.json';
    const template = JSON.parse(fs.readFileSync(plugin, 'utf8'));
    executeRequest(template, { DATA: ['101020100'] }).then(console.log).catch(console.error);
}

{
    const plugin = './plugins/ipim.json';
    const template = JSON.parse(fs.readFileSync(plugin, 'utf8'));
    executeRequest(template, { DATA: '8.8.8.8' }).then(console.log).catch(console.error);
}