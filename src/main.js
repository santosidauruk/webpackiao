require("babel-runtime/regenerator");
require('./main.css');
require('./index.html');

const wee = async (args) => {
    const { a, b } = args
    await console.log('arrow future', a, b)
    console.log('done')
}
console.log('goks');

wee({a: 1, b: 2})
