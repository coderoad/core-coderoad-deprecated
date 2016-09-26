import Main from './main';

// React optimization
process.env.NODE_ENV = 'production';

export let editor = {};

const init = (ed) => {
  editor = ed;
  return new Main(ed);
};

export default init;
