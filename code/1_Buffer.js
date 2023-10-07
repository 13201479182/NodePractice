// Buffer: 用于创建缓冲区

// 1. alloc(分配内存会重置缓冲区,耗时相对2多)
console.time('alloc')
const allocBuffer = Buffer.alloc(100000);
console.timeEnd('alloc')
// console.log('alloc:', allocBuffer);

// 2. allocUnsafe(分配内存不会重置缓冲区,耗时相对1少)
console.time('allocUnsafe')
const unsafeBuffer = Buffer.allocUnsafe(100000);
console.timeEnd('allocUnsafe')
// console.log('allocUnsafe:' ,unsafeBuffer);

// 3. from(将数组或者字符串中的元素转换为buffer存储, 16进制形式)
const arrayBuffer = Buffer.from([1, 2, 3, 16, 17, 18, 104]); 
const stringBuffer = Buffer.from('asdefg');
// console.log('arrayBuffer:', arrayBuffer); 
// console.log('stringBuffer:', stringBuffer);

// 4. toString(将buffer中的数据转化为字符串,默认utf8)
const utf8Code = arrayBuffer.toString()
const cBuffer = Buffer.from('你好')
// console.log(utf8Code, cBuffer.toString());

/**
 * 注意点 
 * 
 * buffer溢出: 在将元素转换为16进制存储时, 当元素二进制数超出255, 会舍弃以上精度, 再转化为16进制存储
 * example:
 *  1. 十进制数: 600
 *  2. 转二进制: 1001011000
 *  3. 舍弃精度: 01011000
 *  4. 转16进制: 58
 */
console.log('600Buffer:', Buffer.from([600]));