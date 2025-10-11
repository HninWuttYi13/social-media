const {PrismaClient } = require("@prisma/client");
const {faker} = require("@faker-js/faker");
const prisma = new PrismaClient();
async function PostSeeder(){
    console.log("Post Seeding is started");
    for(let i =0 ; i <20; i++){
        const content = faker.lorem.paragraph();
        const imageURLs = [faker.image.urlLoremFlickr(), faker.image.urlLoremFlickr()];
        const userId = faker.number.int({min: 1, max: 10});
        await prisma.post.create({
            data: {
                content, 
                userId,
                images: {
                    createMany: {
                        data: imageURLs.map(url => ({
                            imageUrl: url
                        }))
                    }
                }
            }
        })
    }
    console.log("Post Seeding done");
    
   
}
module.exports = {PostSeeder};