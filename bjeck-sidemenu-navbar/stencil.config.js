const sass = require('@stencil/sass');

exports.config = {
  namespace: 'mycomponent',
  plugins:[
    sass()
  ],
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
