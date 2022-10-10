
export default function counter(pre = 0, action) {
    const { type, data } = action;
    console.log('pre',pre,action);
    switch (type) {
        case 'add':
            return pre + data ;

        case 'reduce':
            return pre - data ;

        default:
            return pre ;
    }
}