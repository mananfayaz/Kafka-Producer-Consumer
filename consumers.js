const { kafka } = require('./client');
const group = process.argv[2];  // Get group ID from command-line argument

async function init() {
    const consumer = kafka.consumer({ groupId: group || "user 1" });  // Use the group from command line or default

    await consumer.connect();

    await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`${group}:[${topic}]: PART: ${partition}: ${message.value.toString()}`);
        },
    });
}

init();
