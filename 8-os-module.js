const os = require('os');

// 현재 유저에 대한 정보
const user = os.userInfo();
console.log(user);

// 시스템 구동시간을 응답하는 함수
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};
console.log(currentOS);
