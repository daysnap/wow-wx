
const gulp = require('gulp')
const babel = require('gulp-babel')

const paths = {
  dest: {
    lib: 'lib',
    esm: 'es',
  },
  scripts: [
    'src/**/*.ts'
  ]
}

function compileScripts(babelEnv, destDir) {
  const { scripts } = paths
  // 设置环境变量
  process.env.BABEL_ENV = babelEnv
  return gulp
    .src(scripts)
    .pipe(babel())
    .pipe(gulp.dest(destDir))
}

function compileCJS() {
  const { dest } = paths
  return compileScripts('cjs', dest.lib)
}

function compileESM() {
  const { dest } = paths
  return compileScripts('es', dest.esm)
}

const buildScripts = gulp.series(compileCJS, compileESM)

const build = gulp.parallel(buildScripts)

exports.build = build

exports.default = build

