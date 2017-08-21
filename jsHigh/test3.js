//import
var event= require('events');
//发射器,用来改变事件的状态
var emitter=new event.EventEmitter();
//事件注册
emitter.on('first_event',function () {
   //console.log('i am first event');
   emitter.emit('second_event');
   emitter.removeListener('first_event');
});
emitter.on('second_event',function () {
    console.log('i am first event');
});
//事件发射（触发）
emitter.emit('first_event');
