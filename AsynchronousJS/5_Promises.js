/**
 * It should be noted that promise.all() only returns when all the promisses within it resolves
 * when any of the promises within it is rejected, an exceptionis thrown
 * As a result of this, we have the introduction of promise.allSettled() whicch returns all thr results
 * regardless of whether any promises within it is rejected.
 * Example
 */
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hii")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "JJJJJ")
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(reject, 6000, "bbbbbbbbbbbbb")
})

Promise.all([promise2,promise3, promise4])
    .then(resp => console.log(resp))
        .catch(() => console.log("an exception occurred in promise.all() due to rejection"))

Promise.allSettled([promise2,promise3, promise4])
.then(resp => console.log("promise.allSettled(), returns regardless of if a promise was rejected",resp))
