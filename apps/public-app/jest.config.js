module.exports = {
  name: 'public-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/public-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
