/*
 * @Author: Rainy
 * @Date: 2020-06-05 17:43:28
 * @LastEditors: Rainy
 * @LastEditTime: 2020-06-05 17:53:29
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'config',
        'wip',
        'FEAT',
        'FIX',
        'DOCS',
        'STYLE',
        'REFACTOR',
        'PERF',
        'TEST',
        'BUILD',
        'CI',
        'CHORE',
        'REVERT',
        'CONFIG',
        'WIP'
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 150]
  }
}
