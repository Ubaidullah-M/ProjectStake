const fs = require('fs').promises;

async function textFile(filename) {
  try {
    const content = await fs.readFile(filename, 'utf-8');
    return content;
  } catch (err) {
    console.error(`Error reading file ${filename}:`, err);
    throw err;
  }
}

async function activityTable(day) {
  let logFileList = await textFile("camera_logs.txt");
  let logFiles = logFileList.trim().split("\n");

  let activityCounts = Array(24).fill(0);

  for (let file of logFiles) {
    let fileContent = await textFile(file);
    let timestamps = fileContent.trim().split("\n");

    for (let timestamp of timestamps) {
      let date = new Date(Number(timestamp));

      if (date.getDay() === day) {
        let hour = date.getHours();
        activityCounts[hour]++;
      }
    }
  }

  return activityCounts;
}

activityTable(1)
  .then(table => console.log(activityGraph(table)))
  .catch(err => console.error('Error processing activity table:', err));
