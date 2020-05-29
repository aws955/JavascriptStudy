function promiseForHomework(mustDo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('doing homework');
            if(mustDo) {
                resolve({
                    return: 'homeworkd-result'
                });
            } else {
                reject(new Error('Too lazy!'));
            }
        }, 3000);
    });
};

const promiseA = promiseForHomework(ture);
