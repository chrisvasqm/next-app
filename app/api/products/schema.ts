import { z } from "zod";

const schema = z.object({
    name: z.string().min(3, { message: 'Name must be 3 characters long' }),
    price: z.number().min(1, { message: 'Price must be at least 1' }).max(100, { message: 'Price can not be higher than 100' })
})

export default schema;