const {Kafka}=require("kafkajs")


const kafka=new Kafka({     //kfka server
    clientId: "my-app",
    brokers: ['192.168.1.3:9092']    //broker is basically whole server container for kafka (where its running)
})

module.exports={kafka};
