module.exports = function loader(source) {
    // return `${JSON.stringify(source)} // this is mukai's file`
    console.log('执行了addNameloader')
    return source;
}