import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
      console.log("Mongodb Connected successfuly");
    });
  } catch (err) {
    console.log(err);
  }
}

main();
