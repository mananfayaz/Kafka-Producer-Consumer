const {kafka}=require('./client');



const init= async () => {
    const admin=kafka.admin();  //create admin
    console.log("admin trying to connect")
    await admin.connect();
    console.log('admin is connected...')
    console.log("Creating Topic [rider-updates]")

    await admin.createTopics({
        topics:[{
            topic:'rider-updates',
            numPartitions: 2,
        }]
    })
    console.log("Topic created")
    console.log('Disconnecting admin')
    await admin.disconnect();
}

init();