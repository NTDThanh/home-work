const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

/* eslint-disable no-console */
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send(200, 'api!');
});

const stubDir = `${__dirname}/stubs`;
const walk = dir => {
  const results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const found = path.join(dir, file);
    const stat = fs.statSync(found);
    if (stat && stat.isDirectory()) {
      Array.prototype.push.apply(results, walk(found));
    } else if (fs.statSync(found).isFile() && /.*\.json$/.test(found)) {
      results.push(found.replace(stubDir, ''));
    }
  });
  return results;
};

const addStub = file => {
  const stubs = 'stubs';
  let fileName;
  if (file.lastIndexOf(stubs) >= 0) {
    fileName = file.slice(file.lastIndexOf(stubs) + stubs.length + 1);
  } else if (file.startsWith('/')) {
    fileName = file.substr(1);
  } else {
    fileName = file;
  }

  const stubName = fileName.slice(0, -5).replace(path.sep, '/');
  const fullPath = path.resolve(path.join(stubDir, fileName));

  console.log(`STUB - [${stubName}]`);

  router.post(`/${stubName}`, (req, res) => {
    fs.readFile(fullPath, 'utf-8', (err, data) => {
      if (err) {
        res.send(500).json({
          errorCode: 'E0500',
          message: err.toString(),
        });
        return;
      }
      console.log(req.body);
      res.json(JSON.parse(data));
    });
  });

  router.get(`/${stubName}`, (req, res) => {
    fs.readFile(fullPath, 'utf-8', (err, data) => {
      if (err) {
        res.send(500).json({
          errorCode: 'E0500',
          message: err.toString(),
        });
        return;
      }
      res.json(JSON.parse(data));
    });
  });
};

walk(stubDir).forEach(v => {
  console.log(v);
  addStub(v);
});

module.exports = router;
