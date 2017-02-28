const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'}, function (err, data) {
  if (err) {
    console.error('Error!');
  }
  // process.exit(0);
  console.log(process.cwd()); // カレントディレクトリ
  process.chdir('/');
  console.log(process.cwd());
  console.log('ファイルの内容は以下の通り');
  console.log(data);
});
