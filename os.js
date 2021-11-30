const info=require("os");

console.log("version of os:",info.version());
console.log("free memory in system:",info.freemem());
console.log("total memory in system:",info.totalmem());
console.log("cpu  in system:",info.cpus());
