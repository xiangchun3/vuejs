module.exports = {
  'POST /search': [
      {
          id: 1,
          title: 'ubuntu上怎么设置默认python命令是执行python3而不是python2',
          des: '本人的ubuntu自带python，但是既有python2.7.6，又有python3.4.0。但是默认的python命令是python2.7.6，我要想执行python3.4.0就必须输入python3。',
          vote: 0,
          answer: 15,
          isFixed: true
      }, 
      {
          id: 2,
          title: 'python学习《python核心编程》和《python编程入门到实践》哪个好？',
          des: 'PHP开发一年半，目前公司的业务转向python,自己也开始在自学，请问上面两本书哪本学的好点?请指点一下。',
          vote: -2,
          answer: 9,
          isFixed: false
      }
  ],
  'POST /partner/channel/submit': {
    "retcode":"1030",
    "retmsg":"手机号码已存在"
  }
}