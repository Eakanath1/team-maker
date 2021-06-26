import cron from "node-cron"

const cronUpdate = async () => {
    cron.schedule('*/4 * * *', () => {
        
    });
}

export default cronUpdate;